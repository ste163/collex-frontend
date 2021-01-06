import React, { useState, createContext } from "react"

export const RecentContext = createContext()

export const RecentProvider = props => {

    const [ recents, setRecents ] = useState([])

    // Should be by collectionId, if no collection selected, get all recents will a NULL selection.
    // Leave userId for testing.
    const getRecents = userId => {
        return fetch(`http://localhost:8088/recents/?userId=${userId}`)
        .then(response => response.json())
        .then(recents => {
            // Must invert list of recents so most recent comes first. Recents get added at right spot, older ones get deleted   
            recents.reverse()
            setRecents(recents)
        })
    }

    const addRecent = recent => {
        return fetch("http://localhost:8088/recents/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recent)
        })
        .then(() => {
            getRecents(recent.userId)
        })
    }

    const deleteRecent = (userId, recentId) => {
        return fetch(`http://localhost:8088/recents/${recentId}`, {
            method: "DELETE"
        })
        .then(() => {
            getRecents(userId)
        })
    }

    return (
        <RecentContext.Provider value={{
            recents, getRecents, addRecent, deleteRecent
        }}>
            {props.children}
        </RecentContext.Provider>
    )
}