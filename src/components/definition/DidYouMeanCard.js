import React, { useContext } from "react"
import { ThesaurusContext } from "../thesaurus/ThesaurusProvider"
import { IconClose } from "../icons/Icons"
import { WordButton } from "../word/WordButton"
import "./DefinitionCard.css"
// Displays if there are no matches. Shows similar words

export const DidYouMeanCard = props => {

    const { definitionCards, setDefinitionCards } = useContext(ThesaurusContext)

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
                Similar words
            </h2>
            
            <h3 className="card__h3 definition__h3">
                Couldn't find TERM, did you mean?
            </h3>

            {/* word button list */}
            <ul className="word__list definition__words">
                {
                    props.props.map(similar => {
                        const wordPreppedForButton = {
                            word: similar
                        }

                        // NEED TO BASE KEY VALUE ON PLACE IN ARRAY
                        return <WordButton key={props.props.indexOf(similar)} props={wordPreppedForButton} />
                    })
                }
            </ul>
            {/* stems array of: 'autumn, autumnal, autumnally, autumns, fall' */}

        </article>
    )
}