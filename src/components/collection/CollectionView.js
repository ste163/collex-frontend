import React, { useEffect, useContext } from "react"
import { CollectionContext } from "./CollectionProvider"
import { CollectionViewHeader } from "./CollectionViewHeader"
import { CollectionList } from "./list/CollectionList"
import { CollectionSelected } from "./selected/CollectionSelected"
import { ThesaurusList } from "../thesaurus/ThesaurusList"

export const CollectionView = () => {

    // Removes the 'locked' overflow on the login page, so the border SVGs stay in place
    const bodyElement = document.querySelector("body")
    bodyElement.style.removeProperty("overflow", "hidden")

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
            <ThesaurusList />
        </section>
        </>
    )
}