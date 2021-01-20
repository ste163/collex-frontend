import React, { useEffect, useContext } from "react"
import { CollectionContext } from "../../providers/CollectionProvider"
import ListColumn from "./list/ListColumn"
import SelectedColumn from "./selected/SelectedColumn"
import ThesaurusColumn from "./thesaurus/ThesaurusColumn"

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
        <section className="view__container">
            <ListColumn />
            <SelectedColumn />
            <ThesaurusColumn />
        </section>
    )
}

export default MainView