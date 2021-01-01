import React, { useState, createContext } from "react"

export const CollectionContext = createContext()

export const CollectionProvider = props => {

    const [collections, setCollection] = useState([])

    const getCollections = userId => {
        return fetch(`http://localhost:8088/collections/?userId=${userId}&_expand=type`)
        .then(response => response.json())
        .then(setCollection)
    }

    return (
        <CollectionContext.Provider value={{
            collections, getCollections
        }}>
            {props.children}
        </CollectionContext.Provider>
    )
}