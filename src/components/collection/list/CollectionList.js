import React, { useEffect, useState, useContext } from "react"
import { CollectionContext } from "../CollectionProvider"
import { NoCreatedCollectionCard } from "../NoCreatedCollectionCard"
import { CollectionCard } from "./CollectionCard"
import { CollectionSearch } from "./CollectionSearch"

export const CollectionList = () => {

    const { collections, searchTerms } = useContext(CollectionContext)

    const [ unfiltered, setUnfiltered ] = useState([])
    const [ filteredByName, setFilteredByName ] = useState([])


    // Run whenever we enter into the search box
    useEffect(() => {
        if (searchTerms !== "") {
            const subset = collections.filter(collection => collection.name.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            // May need a setFilteredNames
            // setFilteredDescriptions
            // That way, if there are any, the proper headings/containers could be made
            setFilteredByName(subset)
        } else {
            // no terms in search, so display all collections
            setUnfiltered(collections)
            setFilteredByName([])
        }
    }, [searchTerms, collections])

    return (
        <section className="collection__list">
            {
                collections.length === 0 ? <NoCreatedCollectionCard /> :
                <>
                <CollectionSearch />
                {   
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