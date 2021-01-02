import React, { useEffect, useContext } from "react"
import { CollectionContext } from "./CollectionProvider"
import { CollectionViewHeader } from "./CollectionViewHeader"
import { CollectionList } from "./CollectionList"
import { NoSelectedCollectionCard } from "./NoSelectedCollectionCard"


export const CollectionView = () => {

    const activeUser = +sessionStorage.getItem("userId")
    
    const { getCollections } = useContext(CollectionContext)

    // Run once to get all collections
    useEffect(() => {
        getCollections(activeUser)
        // will need to get all collections and all words... probably all words...
    }, [])

    return (
        <>
        <CollectionViewHeader />

        <section className="view__container">
            {/* 
            Condensed List
            Should (as with the others) be made into components
            So I can reuse them on the Community page
            */}
            <CollectionList />

            {/* Selected Collection */}
            <section className="collection__selected">
                Selected Collection
            </section>

            {/* Thesaurus */}
            <section className="collection__thesaurus">
                Thesaurus
            </section>
        </section>
        </>
    )
}