import React, { useContext } from "react"
import { ThesaurusContext } from "../../../../providers/ThesaurusProvider"
import { IconClose } from "../../../../components/icons/Icons"
import "./DefinitionCard.css"


// IF there is more than one definition in the array, show the back and next buttons 
export const DefinitionNotFound = props => {

    const { definitionCards, setDefinitionCards } = useContext(ThesaurusContext)

    return (
        <article className="card card__color--white card__definition">
        {
            console.log("MY CARD ID IS:", props.cardId)
        }
            <button className="btn__close card__definition--close"
            onClick={e => {
                const removed = definitionCards.filter(card => definitionCards.indexOf(card) !== props.cardId)
                setDefinitionCards(removed)
            }}>
                <IconClose color="icon__gray" />
            </button>

            <h2 className="card__h2">
                Error
            </h2>
            
            <h3 className="card__h3 definition__h3">
                TERM NAME not found
            </h3>

        </article>
    )
}