import React, { useContext, useEffect } from "react"
import { CollectionContext } from "../collection/CollectionProvider"

// Move into separate component for searching through either Collections or Words in Collection

export const CollectionSearch = () => {
    const { setSearchTerms } = useContext(CollectionContext)

    // On page load, set search terms to empty string
    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
            <fieldset className="card card__color--white card__collection card__collection--search">
                <label className="card__h2" htmlFor="collectionSearch">Search collections by name</label>
                <input type="text"
                name="collectionSearch"
                className="input__search"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for collection name... "
                />
            </fieldset>
    )
}