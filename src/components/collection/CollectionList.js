import React, { useEffect, useState, useContext } from "react"
import { NoCreatedCollectionCard } from "./NoCreatedCollectionCard"
import { CollectionContext } from "./CollectionProvider"
import { CollectionCard } from "./CollectionCard"
import { CollectionSearch } from "./CollectionSearch"

export const CollectionList = () => {

    const { collections, searchTerms } = useContext(CollectionContext)

    const [filteredCollections, setFiltered] = useState([])


    // Run whenever we enter into the search box
    useEffect(() => {
        if (searchTerms !== "") {
            const subset = collections.filter(collection => collection.name.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFiltered(subset)
        } else {
            // no terms in search, so display all collections
            setFiltered(collections)
        }
    }, [searchTerms, collections])

    return (
    <section className="collection__list">
    {
        filteredCollections.length === 0 ? <NoCreatedCollectionCard /> :
        <>
        <CollectionSearch />
        {              
            filteredCollections.map(collection => {
                // may need to wrap each in it's own word provider? or recent words provider?
                // return <ProgressProvider key={project.id}><ProjectCard key={project.id} project={project} /></ProgressProvider>
                return <CollectionCard key={collection.id} collection={collection} />
            })               
        }
        </>
    }
    </section>
    )
}