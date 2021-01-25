import React, { useContext } from "react"
import { ThesaurusContext } from "../../providers/ThesaurusProvider"
import { RecentContext } from "../../providers/RecentProvider"
import { CollectionContext } from "../../providers/CollectionProvider"
import "./WordButton.css"

// The word buttons are representations of the Words table in database.
// Clicking a word button opens a card with that word's definition.
// Word Buttons are used by Collections, Most Recent Searches, and Word Definition Cards

const WordButton = props => {

    const { getWord } = useContext(ThesaurusContext)
    const { createRecentWordObj } = useContext(RecentContext)
    const { selectedCollection } = useContext(CollectionContext)

    return (
        <li className="word__button">
            <button className="btn btn--word"
            // getWord fetch and update state to generate definition card
            onClick={e => {
                    getWord(e.target.textContent)
                    // If this button is not on the Selected Collection Card, do not add to recents
                    // By default, this is undefined, a falsey
                    if (props.props.isSelectedCard === false) {
                        createRecentWordObj(e.target.textContent, selectedCollection)
                    }
                }}>
                {props.props.word}
            </button>
        </li>
    )
}

export default WordButton