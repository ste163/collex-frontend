import React, { useEffect, useContext } from "react"
import "./WordButton.css"

// The word buttons are representations of the Words table in database.
// Clicking a word button opens a card with that word's definition.
// Word Buttons are used by Collections, Most Recent Searches, and Word Definition Cards

export const WordButton = props => {

    return (
        <>
        <li className="word__button">
            <button className="btn"
            onClick={e => {
                console.log("FETCH: ", e.target.innerHTML)
                // FETCH word from MW API
                    // Then pass result into definition card
            }}>
                
                {props.props.word}
            </button>
        </li>
        </>
    )
}