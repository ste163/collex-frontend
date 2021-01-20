import React, { useContext, useEffect, useRef } from "react"
import { CollectionContext } from "../../../providers/CollectionProvider"
import SelectedCardNone from "./SelectedCardNone"
import SelectedDotMenu from "./SelectedDotMenu"
import { WordContext } from "../../../providers/WordProvider"
import WordButton from "../../../components/word/WordButton"
import "./SelectedCard.css"

const SelectedCard = () => {
    
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
        selectedCollection === undefined ? <SelectedCardNone /> :
        selectedCollection.id === 0  ? <SelectedCardNone /> :
        <article className="card card__color--white card__selected">
            <SelectedDotMenu ref={dotMenu} collection={selectedCollection} />

            <div className="card__type">
                Selected Collection
            </div>
            <h1 className="selected__h1">
                {selectedCollection.name}
            </h1>
            <p className="selected__description">
                {selectedCollection.description}
            </p>

            {/* TO BE REPlACED BY THE SEARCH BAR COMPONENT */}
            <fieldset className="selected__search">
                <label className="card__h2" htmlFor="collectionSearch">Search words in collection:</label>
                <input type="text"
                name="collectionSearch"
                className="input__search"
                placeholder="Search for word or part of speech... "
                />
            </fieldset>

            {/* DROPDOWN FOR CATEGORIZATION TYPE */}
            <fieldset className="view__collectionSelect selected__categorization">
                <label className="collectionSelect__label" htmlFor="collectionSelect">Categorize by:</label>
                <select className="collectionSelect__select" name="collectionSelect" id="collectionSelect">
                    <option value="1">Part of Speech</option>
                </select>
            </fieldset>

            <div className="selected__divider">Dividing Line</div>

            <section className="selected__words word__list definition__words">
                {
                    // Organize into buttons by alphabetical. With option for by part of speech
                    // Will probably need to store the part of speech in db for quick sorting
                        // Organize part of speech alphabetically
                    wordsInCollection.map(w => <WordButton key={w.id} props={{word: w.word}} />)
                }
            </section>

        </article>
    )
}

export default SelectedCard