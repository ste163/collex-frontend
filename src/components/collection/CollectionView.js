import React, { useRef, useEffect, useContext } from "react"
import { CollectionContext } from "./CollectionProvider"
import { Modal } from "../modal/Modal"
import { IconPlus } from "../icons/IconPlus"
import { IconDivider } from "../icons/IconDivider"
import { NoCreatedCollectionCard } from "./NoCreatedCollectionCard"
import { NoSelectedCollectionCard } from "./NoSelectedCollectionCard"
import { CollectionForm } from "./CollectionForm"

export const CollectionView = () => {

    const {collections, getCollections } = useContext(CollectionContext)
    const activeUser = +sessionStorage.getItem("userId")

    const modal = useRef()

    useEffect(() => {
        getCollections()
        // will need to get all collections and all words... probably all words...
    }, [])

    return (
<>
        <section className="view__header">
            <button className="project__btn"
            onClick={e => modal.current.className = "background__modal modal__active"}
            onMouseOver={e => {
                e.currentTarget.firstElementChild.children[1].childNodes.forEach(svg => {
                    svg.classList.remove("icon__gray")
                    svg.classList.add("icon__hovered")

                 })
             }}
             onMouseOut={e => {
                 e.currentTarget.firstElementChild.children[1].childNodes.forEach(svg => {
                    svg.classList.remove("icon__hovered")
                    svg.classList.add("icon__gray")
                 })
             }}>
                <IconPlus color="icon__gray" />
                Create new collection
            </button>

            <IconDivider color="icon__lightGray" />
        </section>

        {/* 
            View__Container will need to hold the 3 columns:
                1. Condensed list of all collections on left
                2. Currently selected Collection in middle
                3. Thesaurus on left
        */}
        <section className="view__container">
            <Modal ref={modal} contentFunction={<CollectionForm />} width={"modal__width--widest"}/>

            {/* Condensed List */}
            <section className="project__cards">
                {
                    collections.length === 0 ? <NoCreatedCollectionCard /> :
                    <>
                    {                   
                        collections.map(collection => {
                            // return <ProgressProvider key={project.id}><ProjectCard key={project.id} project={project} /></ProgressProvider>
                        })               
                    }
                    </>
                }
            </section>

            {/* Selected Collection */}
            <section className="">
                Selected Collection
            </section>

            {/* Thesaurus */}
            <section className="">
                Thesaurus
            </section>
        </section>
        </>
    )
}