import React, { useContext, useEffect } from "react"
import { DefinitionCardContext } from "./DefinitionCardProvider" 
import { ThesaurusContext } from "../ThesaurusProvider"
import { CollectionContext } from "../../../../providers/CollectionProvider"
import { IconClose } from "../../../../components/icons/Icons"
import { WordContext } from "../../../../providers/WordProvider"
import WordButton from "../../../../components/word/WordButton"
import "./DefinitionCard.css"
// Definition cards handle all information related to retrieved search terms

export const DefinitionCard = props => {
    // stores incoming array of all definitions for current term
    const definitions = props.props
    const userId = parseInt(sessionStorage.getItem("userId"))

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

    return (
        !currentDef ? null : 
            <article className="card card__color--white card__definition">
                <button className="btn__close card__definition--close"
                onClick={e => {
                    const removed = definitionCards.filter(card => definitionCards.indexOf(card) !== props.cardId)
                    setDefinitionCards(removed)
                }}>
                    <IconClose color="icon__gray" />
                </button>

                <h2 className="card__h2">
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
                        {
                            <button
                            disabled={definitions.indexOf(currentDef) === 0}                           
                            onClick={e => {
                                const previous = definitions.indexOf(currentDef) - 1
                                setCurrentDef(definitions[previous])
                            }}
                            className="btn">Previous</button>
                        }

                        <p className="next__text"> {definitions.indexOf(currentDef) + 1} / {definitions.length}</p>

                        {
                            <button
                            disabled={definitions.indexOf(currentDef) === definitions.length - 1}  
                            onClick={e => {
                                const next = definitions.indexOf(currentDef) + 1
                                setCurrentDef(definitions[next])
                            }}
                            className="btn">Next</button>
                        }
                    </div>
                }

                <h4 className="card__h4 definition__h4--speech">
                    {currentDef.fl}
                </h4>
                <div className="card__definition--text">
                    {
                        // RENAME THIS CONTAINER
                        // NEED TO IMPROVE STYLING WITH BULLETS, ETC.
                        currentDef.shortdef.map(shortDefinition => {
                            return <p key={currentDef.shortdef.indexOf(shortDefinition)}>{shortDefinition}</p>
                        })
                    }
                </div>
                
                {
                    // If there are no synonyms, don't show the section
                    currentDef.meta.syns.length === 0 ? null :
                        <>
                            <h4 className="card__h4 definition__h4--synonym">
                                synonyms
                            </h4>

                            {/* word button list */}
                            <ul className="word__list definition__words">
                                {
                                    currentDef.meta.syns.map(synonymArray => {
                                        return synonymArray.map(synonym => {
                                            return <WordButton key={synonymArray.indexOf(synonym)} props={{word: synonym}} />
                                        })
                                    })
                                }
                            </ul>
                        </>
                }
                
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