import React, { useContext, useEffect } from "react"
import { CollectionContext } from "../CollectionProvider"
import { NoSelectedCollectionCard } from "../NoSelectedCollectionCard"
import "./CollectionSelected.css"

export const CollectionSelected = () => {
    
    const { selectedCollection } = useContext(CollectionContext)

    return (
        <section className="collection__selected">
            {
                selectedCollection === undefined ? <NoSelectedCollectionCard /> :
                <article className="card card__color--white card__selected">
                    <div className="selected__type">
                        Collection
                    </div>
                    <h1>
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