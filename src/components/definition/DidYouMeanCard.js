import React from "react"
import { IconClose } from "../icons/IconClose"
import { WordButton } from "../word/WordButton"
import "./DefinitionCard.css"

const afterlife = {
    word: "afterlife"
} 

const afternoon = {
    word: "afternoon"
} 

const age = {
    word: "age"
} 

// IF there is more than one definition in the array, show the back and next buttons 
export const DidYouMeanCard = props => (
    <article className="card card__color--white card__definition">

        <button className="btn__close card__definition--close"
        onClick={e => console.log("DELETE MY STATE")}>
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
                    return <WordButton key={1} props={wordPreppedForButton} />
                })
            }
        </ul>
        {/* stems array of: 'autumn, autumnal, autumnally, autumns, fall' */}

    </article>
)

