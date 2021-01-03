import React, { useState, createContext } from "react"

export const CollectionContext = createContext()

export const CollectionProvider = props => {

    const defaultCollection = {
        id: 0,
        name: "defaultCollection"
    }

    const [ collections, setCollection ] = useState([])
    const [ searchTerms, setSearchTerms] = useState("")
    const [ selectedCollection, setSelectedCollection ] = useState(defaultCollection)

    const getCollections = userId => {
        return fetch(`http://localhost:8088/collections/?userId=${userId}`)
        .then(response => response.json())
        .then(r => {
            const sorted = r.sort((a, b) => {
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()

                if (nameA < nameB) return -1 // nameA is first
                if (nameA > nameB) return 1 // nameB is first
                return 0 // names match. Shouldn't happen because I won't be saving matching names
            })
            setCollection(sorted)
        })
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
            // Not able to just setSelectedCollection here, for some reason it doesn't update state in List or Dropdown
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
            setSelectedCollection(collection)
        })
    }

    const deleteCollection = (userId, collectionId) => {
        return fetch(`http://localhost:8088/collections/${collectionId}`, {
            method: "DELETE"
        })
        .then(() => {
            getCollections(userId)
            setSelectedCollection(defaultCollection)
        })
    }

    return (
        <CollectionContext.Provider value={{
            collections, getCollections, addCollection, updateCollection, deleteCollection, searchTerms, setSearchTerms, selectedCollection, setSelectedCollection
        }}>
            {props.children}
        </CollectionContext.Provider>
    )
}