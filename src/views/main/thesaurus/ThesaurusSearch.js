import React, { useContext, useEffect, useState, useRef } from "react"
import { ThesaurusContext } from "./ThesaurusProvider"
import { RecentContext } from "./recent/RecentProvider"
import { CollectionContext } from "../../../providers/CollectionProvider"
import "./ThesaurusSearch.css"

export const ThesaurusSearch = () => {
    
    const userId = parseInt(sessionStorage.getItem("userId"))
    const searchInput = useRef()

    const { word, getWord } = useContext(ThesaurusContext)
    const { selectedCollection } = useContext(CollectionContext)
    const { getRecents, addRecent } = useContext(RecentContext)

    const [ search, setSearch ] = useState("")

    useEffect(() => {
        getRecents(userId)
        console.log(`Entered word: ${search.search} `, word)
    }, [word])

    const searchThesaurus = e => {
        e.preventDefault()
        // Checks for if there is just an empty string
        if (search.length !== 0) {
            // If there is more than an empty string, remove all spaces
            const trimmed = search.search.trim()
            // On the off chance there is just a bunch of spaces, do not add the word
            if (trimmed.length !== 0) {
                const lowered = trimmed.toLowerCase()
                createRecentWord(lowered)
                getWord(lowered)
                searchInput.current.value = ""
            }    
        }
    }

    const createRecentWord = word => {
        const collectionId = selectedCollection === undefined ? null : selectedCollection.id

        const newRecent = {
            userId,
            collectionId,
            word
        }

        addRecent(newRecent)
    }

    const handleControlledInputChange = e => {
        const newSearch = { ...search }
        newSearch[e.target.name] = e.target.value
        setSearch(newSearch)
    }

    return (
        <form className="card card__color--white card__thesaurus--search" onSubmit={searchThesaurus}>
            <fieldset>
                <label className="card__type type__margin--search" htmlFor="search">Search Merriam-Webster's Collegiate<sup>&#174;</sup> Thesaurus</label>
                <input type="text"
                ref={searchInput}
                onChange={handleControlledInputChange}
                defaultValue=""
                name="search"
                className="input__search"
                placeholder="Search thesaurus... "
                />
            </fieldset>

            <button className="btn" type="submit">
                Search
            </button>
        </form>
    )
}