import React, { useContext, useRef, useEffect } from "react"
import { CollectionContext } from "../CollectionProvider"
import { NoSelectedCollectionCard } from "./NoSelectedCollectionCard"
import { SelectedDotMenu } from "./SelectedDotMenu"
import "./CollectionSelected.css"

export const CollectionSelected = () => {
    
    const dotMenu = useRef()

    const { selectedCollection, collections } = useContext(CollectionContext)

    useEffect(() => {

    }, [collections])

    return (
        <section className="collection__selected">
            {
                selectedCollection === undefined ? <NoSelectedCollectionCard /> :
                selectedCollection.id === 0  ? <NoSelectedCollectionCard /> :
                <article className="card card__color--white card__selected">
                    <SelectedDotMenu ref={dotMenu} collection={selectedCollection} />

                    <div className="selected__type">
                       {selectedCollection.public === "2" ? "Public" : "Private"} Collection
                    </div>
                    <h1 className="selected__h1">
                        {selectedCollection.name}
                    </h1>
                    <p className="selected__description">
                        {selectedCollection.description}
                    </p>
                </article>
            }
        </section>
    )
}