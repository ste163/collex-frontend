import React, { useContext, useEffect, useState } from "react"
import { DefinitionCardContext } from "../../../../providers/DefinitionCardProvider" 
import { ThesaurusContext } from "../../../../providers/ThesaurusProvider"
import { CollectionContext } from "../../../../providers/CollectionProvider"
import { WordContext } from "../../../../providers/WordProvider"
import { IconClose, IconArrow } from "../../../../components/icons/Icons"
import DefinitionCardSynonyms from "./DefinitionCardSynonyms"
import { ChangeIconClassOnHover } from "../../../../utils/ChangeIconClassOnHover"
import "./DefinitionCard.css"
// Definition cards handle all information related to retrieved search terms

export const DefinitionCard = props => {
    // stores incoming array of all definitions for current term
    const definitions = props.props
    const userId = parseInt(sessionStorage.getItem("userId"))

    // setState for previous and next buttons
    const [ defPrevBtnDisabled, setDefPrevBtnDisabled ] = useState(true)
    const [ defNextBtnDisabled, setDefNextBtnDisabled ] = useState(false)

    // DefinitionCards hold the array of current cards
    const { definitionCards, setDefinitionCards } = useContext(ThesaurusContext)

    // addWord allows us to add to the currently selected collection
    const { addWord } = useContext(WordContext)

    // currentDef holds current definition showing in card
    const { currentDef, setCurrentDef } = useContext(DefinitionCardContext)

    // currently selected collection to add/remove definition from
    const { selectedCollection } = useContext(CollectionContext)

    // Need useEffect to setState on card instantiation
    // Whenever the definitions change (ie, a new card is added, re-load state)
    useEffect(() => {
        setCurrentDef(definitions[0])
    }, [definitions])

    // Need useEffect to always check if the next def buttons should have
    // active or disabled SVG arrow class state per card
    useEffect(() => {
        // PreviousDefinitionBtn State
        if (definitions.indexOf(currentDef) === 0) {
            setDefPrevBtnDisabled(true)
        } else {
            setDefPrevBtnDisabled(false)
        }
        // NextDefinitionBtn State
        if (definitions.indexOf(currentDef) === definitions.length - 1) {
            setDefNextBtnDisabled(true)
        } else {
            setDefNextBtnDisabled(false)
        }
    }, [currentDef])

    if (!currentDef) {
        return null;
    }

    return (
        <article className="card card__color--white card__definition">
            <button className="btn__close card__definition--close"
            onClick={e => {
                const removed = definitionCards.filter(card => definitionCards.indexOf(card) !== props.cardId)
                setDefinitionCards(removed)
            }}
            onMouseOver={e => ChangeIconClassOnHover(e, true, "icon__gray", "icon__hovered")}
            onMouseLeave={e => ChangeIconClassOnHover(e, true, "icon__hovered", "icon__gray")}>
                <IconClose color="icon__gray" />
            </button>

            <h2 className="card__h2 definition__h2">
                Definition
            </h2>
            
            <h3 className="card__h3 definition__h3">
                {/* Displays currentDefintion's name */}
                {currentDef.meta.id}
            </h3>

            {
                // If more than one definition, show previous/next buttons to cycle through definitions
                definitions.length === 1 ? null :
                <div className="definition__next">
                    <button                      
                    onClick={e => {
                        const previous = definitions.indexOf(currentDef) - 1
                        setCurrentDef(definitions[previous])
                    }}
                    onMouseOver={e => ChangeIconClassOnHover(e, true, "icon__black", "icon__white")}
                    onMouseLeave={e => ChangeIconClassOnHover(e, false, "icon__black", "icon__white")}
                    className={definitions.indexOf(currentDef) === 0 ? "btn btn__arrow btn__disabled" : "btn btn__arrow"}>
                        <IconArrow rotation="icon__arrow--rotated" color="icon__black" disabled={defPrevBtnDisabled} />
                    </button>

                    <p className="next__text"> {definitions.indexOf(currentDef) + 1} / {definitions.length}</p>
                    
                    <button
                    onClick={e => {
                        const next = definitions.indexOf(currentDef) + 1
                        setCurrentDef(definitions[next])
                    }}
                    onMouseOver={e => ChangeIconClassOnHover(e, true, "icon__black", "icon__white")}
                    onMouseLeave={e => ChangeIconClassOnHover(e, false, "icon__black", "icon__white")}
                    className={definitions.indexOf(currentDef) === definitions.length - 1 ? "btn btn__arrow btn__disabled" : "btn btn__arrow"}>
                        <IconArrow color="icon__black" disabled={defNextBtnDisabled} />
                    </button>
                </div>
            }
            
            {/* OPEN MODAL WITH SEARCH TO MW'S DICTIONARY API FOR CURRENT DEFINITION */}
            <a className="definition__expanded">See Expanded Definition</a>

            {/* DEFINITION LIST SECTION */}
            <h4 className="card__h4 definition__h4--speech">
                {currentDef.fl}
            </h4>
            <ol className="definitions__list">
                {
                currentDef.shortdef.map(shortDefinition => {
                        return <li className="list__definition" key={currentDef.shortdef.indexOf(shortDefinition)}>{shortDefinition}</li>
                    })
                }
            </ol>

            <DefinitionCardSynonyms currentDef={currentDef} />
            
            {/* ADD/REMOVE BUTTON SECTION */}
            {
                // If word is already in the user's collection, change this to REMOVE
                selectedCollection.id === 0 ? null :
                    <button className="btn definition__submit"
                    onClick={e => {
                        const word = {
                            userId,
                            "collectionId": selectedCollection.id,
                            "word": currentDef.meta.id
                        }
                        // NEED TO KNOW IF WORD IS IN DATABASE, AND NOT ALLOW IT TO BE ADDED.
                        addWord(word)
                    }}>
                        Add to {selectedCollection.name}
                    </button>
            }
        </article>
    )
}