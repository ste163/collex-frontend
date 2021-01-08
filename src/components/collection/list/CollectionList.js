import React, { useEffect, useState, useContext } from "react"
import { CollectionContext } from "../CollectionProvider"
import { NoCreatedCollectionCard } from "../NoCreatedCollectionCard"
import { CollectionCard } from "./CollectionCard"
import { CollectionSearch } from "./CollectionSearch"

export const CollectionList = () => {

    const { collections, searchTerms } = useContext(CollectionContext)

    const [ unfiltered, setUnfiltered ] = useState([])
    const [ filteredByName, setFilteredByName ] = useState([])
    const [ filteredByDescription, setFilteredByDescription] = useState([])


    // Run whenever we enter into the search box
    useEffect(() => {
        if (searchTerms !== "") {
            // Get matching names and descriptions
            const subsetNames = collections.filter(collection => collection.name.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            const subsetDescriptions = collections.filter(collection => collection.description.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFilteredByName(subsetNames)
            setFilteredByDescription(subsetDescriptions)
        } else {
            // no terms in search, so display all collections, reset filtered items
            setUnfiltered(collections)
            setFilteredByName([])
            setFilteredByDescription([])
        }
    }, [searchTerms, collections])

    return (
        <section className="collection__list">
            {
                collections.length === 0 ? <NoCreatedCollectionCard /> :
                <>
                <CollectionSearch />
                {   
                    // If there are items in unfiltered, show all
                    filteredByName.length === 0 ?

                    unfiltered.map(collection => {
                        // Need "defaultCollection" check to remove it from selected list
                        if (collection.name !== "defaultCollection") {
                            // return <ProgressProvider key={project.id}><ProjectCard key={project.id} project={project} /></ProgressProvider>
                            return <CollectionCard key={collection.id} collection={collection} />
                        }
                    })
                    :
                    <>
                    <h2 className="card__h2 card__h2--list">Matching collection names</h2>
                    {
                        filteredByName.map(collection => {
                            if (collection.name !== "defaultCollection") {
                                return <CollectionCard key={collection.id} collection={collection} /> 
                            } 
                        })
                    }
                    </> 
                }
                </>
            }
        </section>
    )
}