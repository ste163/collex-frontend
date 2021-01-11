import React, { useContext, useEffect } from "react"
import { ThesaurusContext } from "../thesaurus/ThesaurusProvider"
import { CollectionContext } from "../collection/CollectionProvider"
import { DefinitionCardContext } from "../definition/DefinitionCardProvider" 
import { IconClose } from "../icons/IconClose"
import { WordButton } from "../word/WordButton"
import "./DefinitionCard.css"


// IF there is more than one definition in the array, show the back and next buttons 
export const DefinitionCard = props => {

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

    const { definitionCards, setDefinitionCards } = useContext(ThesaurusContext)

    const { currentDef, setCurrentDef } = useContext(DefinitionCardContext)
    const { selectedCollection } = useContext(CollectionContext)

    useEffect(() => {
        setCurrentDef(definitions[0])
    }, [definitions])

    console.log(definitions)
    // console.log(`DEF STATE ${currentDef.meta.id}: `, currentDef)

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
                            <button className="btn">Previous</button>
                    }
                    <p className="next__text"> {definitions.indexOf(currentDef) + 1} / {definitions.length}</p>
                    <button className="btn">Next</button>
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