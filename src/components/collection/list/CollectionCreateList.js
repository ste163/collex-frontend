import React from "react"
import { CollectionCard } from "./CollectionCard"
// Create collection cards for searched words

export const CollectionCreateList = props => (
    !props.props ? null :
    <>
    {
        props.props.map(collection => {
            if (collection.name !== "defaultCollection") {
                return <CollectionCard key={collection.id} collection={collection} /> 
            } 
        })
    }
    </>
)