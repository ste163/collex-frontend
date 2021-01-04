import React, { useContext, useEffect } from "react"
import "./ThesaurusSearch.css"

export const ThesaurusSearch = () => {

    const searchThesaurus = e => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <form className="card card__color--white card__thesaurus--search" onSubmit={searchThesaurus}>
            <fieldset className="">
                <label className="label__search" htmlFor="collectionSearch">Search Merriam-Webster's Collegiate<sup>&#174;</sup> Thesaurus</label>
                <input type="text"
                name="collectionSearch"
                className="input__search"
                placeholder="Search for collection name... "
                />
            </fieldset>

            <button className="btn" type="submit">
                Search
            </button>
        </form>
    )
}