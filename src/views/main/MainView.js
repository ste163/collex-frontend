import React, { useEffect, useContext } from "react"
import { CollectionContext } from "./collection/CollectionProvider"
import SubHeader from "./subHeader/SubHeader"
import { CollectionList } from "./columnList/CollectionList"
import SelectedCard from "./Selected/SelectedCard"
import { ThesaurusList } from "./columnThesaurus/ThesaurusList"

const MainView = () => {

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
        <SubHeader />

        <section className="view__container">
            <CollectionList />
            <SelectedCard />
            <ThesaurusList />
        </section>
        </>
    )
}

export default MainView