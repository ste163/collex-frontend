import React, { useContext, useEffect, useState, useRef } from "react"
import { ThesaurusContext } from "../../../providers/ThesaurusProvider"
import { RecentContext } from "../../../providers/RecentProvider"
import { CollectionContext } from "../../../providers/CollectionProvider"
import "./ThesaurusSearch.css"

export const ThesaurusSearch = () => {
    
    const userId = parseInt(sessionStorage.getItem("userId"))
    const searchInput = useRef()

    const { word, getWord } = useContext(ThesaurusContext)
    const { selectedCollection } = useContext(CollectionContext)
    const { getRecents, addRecent, createRecentWordObj } = useContext(RecentContext)

    const [ search, setSearch ] = useState("")

    useEffect(() => {
        getRecents(userId)
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
                createRecentWordObj(lowered, selectedCollection)
                getWord(lowered)
                searchInput.current.value = ""
            }    
        }
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