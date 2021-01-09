import React from "react"
import { IconClose } from "../icons/IconClose"
import { WordButton } from "../word/WordButton"

// Created dynamically
    // May need a reference to the Thesaurus column to ensure it reaches the correct location
    // Or does each location that can create a definition card need the location (thesaurus search & word cards need the ref)?
    // Will need the Thesaurus definition returned valued passed in as props


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
export const DefinitionCard = props => (
    
    <article className="card card__color--white card__definition">

        <button className="btn__close card__definition--close"
        // onClick={e => ref.current.className = "background__modal"}>
        >
            <IconClose color="icon__gray" />
        </button>

        <h2 className="card__h2">
            Definition
        </h2>
        
        <h3 className="card__h3 definition__h3">
            Autumn
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
        {/* list of buttons */}
        <ul className="word__list definition__words">
            <WordButton props={afterlife} />
            <WordButton props={afternoon} />
            <WordButton props={age} />
        </ul>
        {/* stems array of: 'autumn, autumnal, autumnally, autumns, fall' */}

    </article>
)

