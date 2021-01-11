import React, { useContext, useEffect } from "react"
import { ThesaurusContext } from "../thesaurus/ThesaurusProvider"
import { CollectionContext } from "../collection/CollectionProvider"
import { DefinitionCardContext } from "../definition/DefinitionCardProvider" 
import { IconClose } from "../icons/IconClose"
import { WordButton } from "../word/WordButton"
import "./DefinitionCard.css"
// Definition cards handle all information related to searched for definitions

export const DefinitionCard = props => {
    // stores incoming array of all definitions for current term
    const definitions = props.props

    const afterlife = {
        word: "afterlife"
    } 

    const afternoon = {
        word: "afternoon"
    } 

    const age = {
        word: "age"
    } 

    // DefinitionCards hold the array of current cards
    const { definitionCards, setDefinitionCards } = useContext(ThesaurusContext)
    // currentDef holds current definition showing in card
    const { currentDef, setCurrentDef } = useContext(DefinitionCardContext)
    // currently selected collection to add/remove definition from
    const { selectedCollection } = useContext(CollectionContext)

    // Need useEffect to setState on card instantiation
    // Whenever the definitions change (ie, a new card is added, re-load state)
    useEffect(() => {
        setCurrentDef(definitions[0])
    }, [definitions])

    console.log(definitions)

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
                {/* Get first item and show its name */}
                {currentDef.meta.id}
            </h3>

            {
                // If more than one definition, show next buttons to cycle through definition
                // Which means each card needs to hold its own state, so it has the ability to change
                // ONLY SHOW NEXT AND PREVIOUS IF THERE IS SOMETHING YOU CAN MOVE TO
                definitions.length === 1 ? null :
                <div className="definition__next">
                    {
                        definitions.indexOf(currentDef) === 0 ? null :
                            <button 
                            onClick={e => {
                                const previous = definitions.indexOf(currentDef) - 1
                                setCurrentDef(definitions[previous])
                            }}
                            className="btn">Previous</button>
                    }
                    <p className="next__text"> {definitions.indexOf(currentDef) + 1} / {definitions.length}</p>
                    {
                        definitions.indexOf(currentDef) === definitions.length - 1 ? null :
                            <button
                            onClick={e => {
                                const next = definitions.indexOf(currentDef) + 1
                                setCurrentDef(definitions[next])
                            }}
                            className="btn">Next</button>
                    }
                </div>
            }

            <h4 className="card__h4 definition__h4--speech">
                noun
            </h4>
            <div className="card__definition--text">
                {
                    // RENAME THIS CONTAINER
                    // NEED TO IMPROVE STYLING
                    currentDef.shortdef.map(shortDefinition => {
                        return <p key={currentDef.shortdef.indexOf(shortDefinition)}>{shortDefinition}</p>
                    })
                }
            </div>
            <h4 className="card__h4 definition__h4--synonym">
                synonyms
            </h4>

            {/* word button list */}
            <ul className="word__list definition__words">
                <WordButton key={1} props={afterlife} />
                <WordButton key={2} props={afternoon} />
                <WordButton key={3} props={age} />
            </ul>
            {/* stems array of: 'autumn, autumnal, autumnally, autumns, fall' */}

            {/* IF word is already in the user's collection, change this to REMOVE */}
            {
                selectedCollection.id === 0 ? null :
                <button className="btn definition__submit"
                onClick={e => console.log("ADD ME TO COLLECTION")}>
                    Add to {selectedCollection.name}
                </button>
            }
        </article>
    )
}