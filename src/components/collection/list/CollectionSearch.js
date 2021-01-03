import React, { useContext, useEffect } from "react"
import { CollectionContext } from "../CollectionProvider"

export const CollectionSearch = () => {
    const { setSearchTerms } = useContext(CollectionContext)

    // On page load, set search terms to empty string
    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
            <fieldset className="card card__color--white card__collection card__collection--search">
                <label htmlFor="collectionSearch">Search collections by name</label>
                <input type="text"
                name="collectionSearch"
                className="search__input"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for collection name... "
                />
            </fieldset>
    )
}