import React, { useContext, useEffect, useRef } from "react"
import { CollectionContext } from "../CollectionProvider"
import { NoSelectedCollectionCard } from "./NoSelectedCollectionCard"
import { SelectedDotMenu } from "./SelectedDotMenu"
import { WordContext } from "../../word/WordProvider"
import "./CollectionSelected.css"

export const CollectionSelected = () => {
    
    const dotMenu = useRef()

    const { selectedCollection } = useContext(CollectionContext)

    const { words, wordsInCollection, getWordsByCollectionId } = useContext(WordContext)

    // Whenever a selectedCollection changes, change the state of collectionWords.
    // So whenever we change collections, getWordsByCollection(selectedCollection.id)

    useEffect(() => {
        if (selectedCollection.id != 0) {
            getWordsByCollectionId(selectedCollection.id)
        }
    }, [selectedCollection, words])

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
                    <div>
                        {
                            wordsInCollection.map(w => <p key={w.id}>{w.word}</p>)
                        }
                    </div>
                </article>
            }
        </section>
    )
}