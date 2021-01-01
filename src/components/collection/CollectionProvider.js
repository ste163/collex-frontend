import React, { useState, createContext } from "react"

export const CollectionContext = createContext()

export const CollectionProvider = props => {

    const [collections, setCollection] = useState([])

    const getCollections = userId => {
        return fetch(`http://localhost:8088/collections/?userId=${userId}`)
        .then(response => response.json())
        .then(setCollection)
    }

    const addCollection = collection => {
        return fetch("http://localhost:8088/collections/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(collection)
        })
        .then(() => {
            getCollections(collection.userId)
        })
    }

    const updateCollection = collection => {
        return fetch(`http://localhost:8088/collections/${collection.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(collection)
        })
        .then(() => {
            getCollections(collection.userId)
        })
    }

    return (
        <CollectionContext.Provider value={{
            collections, getCollections, addCollection, updateCollection
        }}>
            {props.children}
        </CollectionContext.Provider>
    )
}