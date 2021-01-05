import React, { useContext, useEffect, useState } from "react"
import { ThesaurusContext } from "./ThesaurusProvider"
import { RecentContext } from "../recent/RecentProvider"
import { CollectionContext } from "../collection/CollectionProvider"
import "./ThesaurusSearch.css"

export const ThesaurusSearch = () => {
    
    const userId = parseInt(sessionStorage.getItem("userId"))

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
        createRecentWord(search.search)
        getWord(search.search)
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
            <fieldset className="">
                <label className="label__search" htmlFor="search">Search Merriam-Webster's Collegiate<sup>&#174;</sup> Thesaurus</label>
                <input type="text"
                onChange={handleControlledInputChange}
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