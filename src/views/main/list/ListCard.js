import React, { useContext, useEffect } from "react"
import { CollectionContext } from "../../../providers/CollectionProvider"
import { IconArrow } from "../../../components/icons/Icons"
import "./ListCard.css"

const ListCard = ({collection}) => {

    // needs to update whenever there is a selectedCollection. Because if it's selected, it's background color will change
    const { collections, selectedCollection, setSelectedCollection } = useContext(CollectionContext)

    // Words context??
    // const { progress, getProgressByProjectId } = useContext(ProgressContext)

    return (
        <button
        id={collection.id}
        className={
            selectedCollection === undefined ? "card card__color--white card__collection btn__collection" :
            collection.id !== selectedCollection.id ? "card card__color--white card__collection btn__collection" : "card card__color--yellow card__collection"
        }
        onClick={e => {
            const matchingCollection = collections.find(collection => collection.id === +e.target.id)
            setSelectedCollection(matchingCollection)
        }}>
            <h2 id={collection.id} className="collection__h2--card">{collection.name}</h2>
            <p id={collection.id} className="collection__p">{collection.description}</p>
            <div id={collection.id} className="collection__arrow">
                <IconArrow id={collection.id} color="icon__gray" />
            </div>
        </button>
    )
}

export default ListCard