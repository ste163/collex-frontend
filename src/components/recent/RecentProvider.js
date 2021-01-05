import React, { useState, createContext } from "react"

export const RecentContext = createContext()

export const RecentProvider = props => {

    const [ recents, setRecents ] = useState([])

    // Should be by collectionId, if no collection selected, get all recents will a NULL selection.
    // Leave userId for testing.
    const getRecents = userId => {
        return fetch(`http://localhost:8088/recents/?userId=${userId}`)
        .then(response => response.json())
        .then(setRecents)
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

    return (
        <RecentContext.Provider value={{
            recents, getRecents, addRecent
        }}>
            {props.children}
        </RecentContext.Provider>
    )
}