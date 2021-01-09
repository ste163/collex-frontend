import React, { useEffect, useContext } from "react"
import { ThesaurusContext } from "../thesaurus/ThesaurusProvider"
import "./WordButton.css"

// The word buttons are representations of the Words table in database.
// Clicking a word button opens a card with that word's definition.
// Word Buttons are used by Collections, Most Recent Searches, and Word Definition Cards

export const WordButton = props => {

    const { definitionCards } = useContext(ThesaurusContext)

    return (
        <>
        <li className="word__button">
            <button className="btn btn--word"
            onClick={e => {
                console.log("FETCH: ", e.target.innerHTML)
                // FETCH word from MW API
                    // Then PASS the returned object
                    // Into definitionCards state
            }}>
                {props.props.word}
            </button>
        </li>
        </>
    )
}