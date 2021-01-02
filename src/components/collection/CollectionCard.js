import React, {useContext, useEffect, useRef} from "react"
import { CollectionContext } from "./CollectionProvider"
import { IconArrow } from "../icons/IconArrow"
import "./CollectionCard.css"

export const CollectionCard = ({collection}) => {

    // needs to update whenever there is a selectedCollection. Because if it's selected, it's background color will change
    const { collections, selectedCollection, setSelectedCollection } = useContext(CollectionContext)

    // Words context??
    // const { progress, getProgressByProjectId } = useContext(ProgressContext)

    // useEffect(() => {
    //     getProgressByProjectId(project.id)
    // }, [])

    useEffect(() => {
        // Need to get all my collections, and do a FIND on the ONCLICK to match the clicked ID to the one in my collections
        console.log("Selected:", selectedCollection)
    }, [selectedCollection])

    // To allow for selecting the button, every item has the collection.id
    // otherwise, each e.target.id is not available

    // NEED TO FIX
    // so if they click on any piece of the SVG, it gets the correct ID, currently it's the SVG id
    return (
        <button
        id={collection.id}
        className="card card__color--white card__collection"
        onClick={e => setSelectedCollection(e.target.id)}>
            <h2 id={collection.id} className="collection__h2--card">{collection.name}</h2>
            <p id={collection.id} className="collection__p">{collection.description}</p>
            <p id={collection.id} className="collection__visibility">{collection.public === "2" ? <>Public</> : <></>}</p>
            <div id={collection.id} className="collection__arrow">
                <IconArrow id={collection.id} color="icon__gray"/>
            </div>
        </button>
    )
}