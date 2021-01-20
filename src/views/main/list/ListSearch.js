import React, { useContext, useEffect } from "react"
import { CollectionContext } from "../../../providers/CollectionProvider"

// Move into separate component for searching through either Collections or Words in Collection

const ListSearch = () => {
    const { setSearchTerms } = useContext(CollectionContext)

    // On page load, set search terms to empty string
    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
            <fieldset className="card card__color--white card__collection card__collection--search">
                <label className="card__type type__margin--search" htmlFor="collectionSearch">Search collections by name</label>
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

export default ListSearch