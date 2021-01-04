import React, { useContext, useEffect, useState } from "react"
import { ThesaurusContext } from "./ThesaurusProvider"
import "./ThesaurusSearch.css"

export const ThesaurusSearch = () => {

    const { word, getWord } = useContext(ThesaurusContext)

    const [ search, setSearch ] = useState("")

    useEffect(() => {
        console.log(word)
    }, [word])

    const searchThesaurus = e => {
        e.preventDefault()
        getWord(search.search)
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