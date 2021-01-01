import React, { useEffect, useContext } from "react"
import { CollectionContext } from "./CollectionProvider"
import { CollectionViewHeader } from "./CollectionViewHeader"
import { NoCreatedCollectionCard } from "./NoCreatedCollectionCard"
import { NoSelectedCollectionCard } from "./NoSelectedCollectionCard"
import { CollectionCard } from "./CollectionCard"
import { CollectionSearch } from "./CollectionSearch"

export const CollectionView = () => {

    const {collections, getCollections } = useContext(CollectionContext)
    const activeUser = +sessionStorage.getItem("userId")


    useEffect(() => {
        getCollections(activeUser)
        // will need to get all collections and all words... probably all words...
    }, [])

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
                    collections.length === 0 ? <NoCreatedCollectionCard /> :
                    <>

                    <CollectionSearch />

                    {/* 
                        To get the correct collections, I'll need to pass whatever collection results are from Search
                        into the collections.map. This may mean that I'll need a different State that handles just the search results
                        because I don't want to screw up the Collections in other places (like Settings)
                    */}

                    {              
                        collections.map(collection => {
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