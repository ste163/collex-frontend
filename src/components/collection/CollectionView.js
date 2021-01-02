import React, { useEffect, useState, useContext } from "react"
import { CollectionContext } from "./CollectionProvider"
import { CollectionViewHeader } from "./CollectionViewHeader"
import { NoCreatedCollectionCard } from "./NoCreatedCollectionCard"
import { NoSelectedCollectionCard } from "./NoSelectedCollectionCard"
import { CollectionCard } from "./CollectionCard"
import { CollectionSearch } from "./CollectionSearch"

export const CollectionView = () => {

    const {collections, getCollections, searchTerms } = useContext(CollectionContext)
    const activeUser = +sessionStorage.getItem("userId")

    const [filteredCollections, setFiltered] = useState([])

    // Run once to get all collections
    useEffect(() => {
        getCollections(activeUser)
        // will need to get all collections and all words... probably all words...
    }, [])

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

    console.log(filteredCollections)

    return (
        <>
       
        <CollectionViewHeader />

        <section className="view__container">
            {/* 
            Condensed List
            Should (as with the others) be made into components
            So I can reuse them on the Community page
            */}
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

            {/* Selected Collection */}
            <section className="collection__selected">
                Selected Collection
            </section>

            {/* Thesaurus */}
            <section className="collection__thesaurus">
                Thesaurus
            </section>
        </section>
        </>
    )
}