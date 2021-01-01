import React, { useContext, useEffect } from "react"
import { CollectionContext } from "./CollectionProvider"

export const CollectionSearch = () => {
    const { setSearchTerms } = useContext(CollectionContext)

    // On page load, set search terms to empty string
    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
        <article className="card card__color--white card__collection card__collection--search">
            Search
            <input type="text"
            onKeyUp={
                (keyEvent) => setSearchTerms(keyEvent.target.value)
            }
            placeholder="Search for collection... "
            />
        </article>
    )
}