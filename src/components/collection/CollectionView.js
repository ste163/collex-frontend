import React, { useEffect, useContext } from "react"
import { CollectionContext } from "./CollectionProvider"
import { CollectionViewHeader } from "./CollectionViewHeader"
import { CollectionList } from "./list/CollectionList"
import { CollectionSelected } from "./selected/CollectionSelected"

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
            <CollectionList />
            <CollectionSelected />

            {/* Thesaurus */}
            <section className="collection__thesaurus">
                Thesaurus
            </section>
        </section>
        </>
    )
}