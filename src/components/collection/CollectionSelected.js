import React, { useContext, useEffect } from "react"
import { CollectionContext } from "./CollectionProvider"
import { NoSelectedCollectionCard } from "./NoSelectedCollectionCard"

export const CollectionSelected = () => {
    
    const { selectedCollection } = useContext(CollectionContext)

    useEffect(() => {
        // Maybe get all the words for this collection here?
    }, [selectedCollection])
    
    return (
        selectedCollection === undefined ? <NoSelectedCollectionCard /> :
        <>
        <section className="collection__selected">
            Selected Collection
        </section>
        </>
    )
}