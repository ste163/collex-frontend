import React, { useState, useContext, useEffect } from "react"
import { WordButton } from "../word/WordButton"
import { RecentContext } from "../recent/RecentProvider"
import { CollectionContext } from "../collection/CollectionProvider"
import { SettingsContext } from "../settings/SettingsProvider"
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

export const ThesaurusRecent = () => {
    const totalRecents = +sessionStorage.getItem("TotalRecentsToStore")
    const userId = +sessionStorage.getItem("userId")

    const { recents, deleteRecent } = useContext(RecentContext)
    const { selectedCollection } = useContext(CollectionContext)
    const { settings } = useContext(SettingsContext)

    useEffect(() => {
        if (recents !== undefined) {
            if (recents.length >= totalRecents) {
                console.log("TOTAL RECENTS: ", recents.length);
                console.log("TOTAL TO KEEP: ", totalRecents)
                // Get ALL the items AFTER the total recents. so if max is 6 but there are 12 in the recents array (so 11),
                // get items 5 - end of array, Loop through sliced array, deleting each item
                // To get the full list, need to add 1 to length
                const recentsToDelete = recents.slice(totalRecents, (recents.length + 1))
                console.log("WE DELETE: ", recentsToDelete)               
                if (recentsToDelete.length > 0)
                {
                    recentsToDelete.forEach(r => {
                        deleteRecent(userId, r.id)
                    });
                }
            }
        }
    }, [recents, settings])

    return (
        <article className="card card__color--white card__thesaurus--recent">
            {
            selectedCollection === undefined ? null :
                <>    
                {/* make a more consistent className */}
                <h2 className="label__search">
                    Most recent searches {selectedCollection.id === 0 ? '' : `for ${selectedCollection.name}`}
                </h2>
                <ul className="recent__list">
                    {
                        recents === undefined ? null : 
                        <>
                        {recents.map(recent => {
                            return <WordButton key={recent.id} props={recent} />
                        })}
                        </>
                    }
                </ul>
                </>
            }
        </article>
    )
}