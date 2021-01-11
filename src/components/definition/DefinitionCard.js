import React, { useContext } from "react"
import { ThesaurusContext } from "../thesaurus/ThesaurusProvider"
import { CollectionContext } from "../collection/CollectionProvider"
import { IconClose } from "../icons/IconClose"
import { WordButton } from "../word/WordButton"
import "./DefinitionCard.css"


// IF there is more than one definition in the array, show the back and next buttons 
export const DefinitionCard = props => {

    console.log(props.props)

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
    const { selectedCollection } = useContext(CollectionContext)

    return (
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
                {props.props[0].meta.id}
            </h3>
            <h4 className="card__h4 definition__h4--speech">
                noun
            </h4>
            <p className="card__definition--text">
                a later period in  one's life
            </p>
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