import React, { useEffect, useState, useContext } from "react"
import { CollectionCreateList } from "./CollectionCreateList"
import { CollectionContext } from "../CollectionProvider"
import { NoCreatedCollectionCard } from "../NoCreatedCollectionCard"
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
            // We are searching, so empty unfiltered state
            setUnfiltered([])
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
                !collections.length ? <NoCreatedCollectionCard /> : 
                <>
                    <CollectionSearch />

                    <CollectionCreateList props={unfiltered}/>
                    {
                        // Heading must have a separate check or it will not render properly
                        !filteredByName.length ? null : <h2 className="card__h2 card__h2--list">Matching collection names</h2>
                    }
                    <CollectionCreateList props={filteredByName}/>        
                    {
                        !filteredByDescription.length ? null : <h2 className="card__h2 card__h2--list">Matching collection descriptions</h2>
                    }
                    <CollectionCreateList props={filteredByDescription}/>
                </>                  
            }
        </section>
    )
}