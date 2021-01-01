import React, { useRef } from "react"
import { IconPlus } from "../icons/IconPlus"
import { IconDivider } from "../icons/IconDivider"
import { Modal } from "../modal/Modal"
import { CollectionForm } from "./CollectionForm"

export const CollectionViewHeader = () => {

    const modal = useRef()

    return (
        <>
        <Modal ref={modal} contentFunction={<CollectionForm />} width={"modal__width--widest"}/>

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
        </>
    )
}