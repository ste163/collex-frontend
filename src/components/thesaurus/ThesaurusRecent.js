import React, { useState, useContext, useEffect } from "react"
import { WordButton } from "../word/WordButton"
import { RecentContext } from "../recent/RecentProvider"
import { CollectionContext } from "../collection/CollectionProvider"
import { SettingsContext } from "../settings/SettingsProvider"
import "./ThesaurusRecent.css"
// Store most recent searches in a card beneath the search card

// WILL NEED:
    // Recents Provider
        // that has a GET, and a DELETE. No Update needed.

export const ThesaurusRecent = () => {
    const totalRecents = +sessionStorage.getItem("TotalRecentsToStore")
    const userId = +sessionStorage.getItem("userId")

    const { recents, deleteRecent } = useContext(RecentContext)
    const { selectedCollection } = useContext(CollectionContext)
    const { settings } = useContext(SettingsContext)

    const [ selectedRecents, setSelectedRecents ] = useState(recents)

    useEffect(() => {
        if (recents !== undefined) {
            // Only get recents for the selected collection
            const selected = recents.filter(r => r.collectionId === selectedCollection.id)

            if (selected.length >= totalRecents) {
                // To get the full list, need to add 1 to length
                const recentsToDelete = selected.slice(totalRecents, (selected.length + 1))           
                // If there are words to delete, delete them.
                // Thesaurus Search contains checks for empty strings
                if (recentsToDelete.length > 0)
                {
                    recentsToDelete.forEach(r => {
                        deleteRecent(userId, r.id)
                    });
                }
            }
            // To use the selected recents and have it update properly, set the state
            setSelectedRecents(selected)
        }
    }, [selectedCollection, recents, settings])

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
                        selectedRecents === undefined ? null : 
                        <>
                        {selectedRecents.map(recent => {
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