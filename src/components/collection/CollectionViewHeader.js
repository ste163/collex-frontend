import React, { useRef, useContext, useEffect } from "react"
import { CollectionContext } from "./CollectionProvider"
import { IconPlus } from "../icons/IconPlus"
import { IconDivider } from "../icons/IconDivider"
import { Modal } from "../modal/Modal"
import { CollectionForm } from "./CollectionForm"

export const CollectionViewHeader = () => {
    // Default Selection currently is not being checked. Need a useEffect for this.
    const defaultSelection = +sessionStorage.getItem("defaultCollection")
    const modal = useRef()

    const { collections, selectedCollection, setSelectedCollection } = useContext(CollectionContext)
    console.log(selectedCollection)

    // Set currently selected collection state
    const selectCollection = e => {
        const foundSelectedCollection = collections.find(collection => collection.id === +e.target.value)
        setSelectedCollection(foundSelectedCollection)
    }

    return (
        <>
        <Modal ref={modal} contentFunction={<CollectionForm />} width={"modal__width--widest"}/>

        <section className="view__header">
            <button className="collection__btn"
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

            <fieldset className="view__collectionSelect">
                <label className="collectionSelect__label" htmlFor="collectionSelect">Selected collection: </label>
                <select className="collectionSelect__select" name="collectionSelect" id="collectionSelect"
                value={selectedCollection === undefined ? 0 : selectedCollection.id}
                onChange={e => selectCollection(e)}>
                    <option value="0">Select collection</option>
                    {
                        collections.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>

                        ))
                    }
                </select>
            </fieldset>
        </section>
        </>
    )
}