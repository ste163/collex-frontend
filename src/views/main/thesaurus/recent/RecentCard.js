import React, { useState, useContext, useEffect, useRef } from "react"
import { RecentContext } from "./RecentProvider"
import { RecentDotMenu } from "./RecentDotMenu"
import WordButton from "../../../../components/word/WordButton"
import { CollectionContext } from "../../collection/CollectionProvider"
import { SettingsContext } from "../../../../components/settings/SettingsProvider"
import "./RecentCard.css"
// Store most recent searches in a card beneath the search card

export const RecentCard = () => {
    const totalRecents = +sessionStorage.getItem("TotalRecentsToStore")
    const userId = +sessionStorage.getItem("userId")
    const dotMenu = useRef()

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
        !selectedRecents.length ? null :
            <article className="card card__color--white card__recent">
                <RecentDotMenu ref={dotMenu} collection={selectedCollection} />
                <h2 className="card__type type__margin--recents">
                    Most recent searches {selectedCollection.id === 0 ? 'for no selection' : `for ${selectedCollection.name}`}
                </h2>
                <ul className="word__list">
                    {
                        selectedRecents.map(recent => {
                            return <WordButton key={recent.id} props={recent} />
                        })
                    }
                </ul>
            </article>
    )
}