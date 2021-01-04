import React from "react"
import "./ThesaurusRecent.css"
// Store most recent searches in a card beneath the search card

// WILL NEED:
    // Recents Provider
        // that has a GET, ADD, and a DELETE. No Update needed.

// Only store most recent words based on the max from User Settings
// if there are any more than that, delete them.
// This will need to be an Array of Words/Strings
// where each new one is shifted to the front of the list
// And if the array.length is greater than the max from settings,
// delete the item from list

// IF user clicks on one of the words, which are displayed as buttons (by looping through the Recents array)
// Then put that value in the Thesaurus Search box, which means the Thesaurus Search will need to have GLOBAL state

export const ThesaurusRecent = () => {

    return (
        <article className="card card__color--white card__thesaurus--recent">
            {/* make a more consistent className */}
            <h2 className="label__search">
                Most recent searches
            </h2>
            <ul>
                {/* Word Buttons go here, as an <li> */}
            </ul>
        </article>
    )
}