import React, { useRef, forwardRef, useContext, useState } from "react"
import { IconDots } from "../../../../components/icons/Icons"
import { Modal } from "../../../../components/modal/Modal"
import { RecentContext } from "../../../../providers/RecentProvider"

export const RecentDotMenu = (React.forwardRef((props, ref) => {
    
    const { recents, deleteRecent } = useContext(RecentContext);

    const clearModal = useRef()

    const ClearWarning = () => (
        <>
            <p className="warning__p">Clearing recents for {props.collection.name} is permanent.</p>
            <button className="btn btn--red"
            onClick={e => {
                // Would be better if I could have ONE method to delete all instead of however many words there are
                const selected = recents.filter(r => r.collectionId === props.collection.id)
                if (selected.length > 0) {
                    selected.forEach(r => deleteRecent(props.collection.userId, r.id))
                }
                clearModal.current.className = "background__modal"
            }}>
                Clear
            </button>
        </>
    )
        
    return (
        <section className="dot__menu"
        onMouseLeave={e => {
            if (ref.current.className === "dot__btns--active") {
                ref.current.className = "dot__btns--inactive"
            }
        }}>

            <Modal ref={clearModal} contentFunction={<ClearWarning />} contentHeader={<div className="modal__warning">WARNING</div>}/>
            
            <button 
            className="card__btn"
            onClick={e => ref.current.className === "dot__btns--inactive" ? ref.current.className = "dot__btns--active" : ref.current.className = "dot__btns--inactive" }
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
                <IconDots color="icon__gray"/>
            </button>
            
            <div ref={ref} className="dot__btns--inactive"
            onMouseLeave={e => ref.current.className = "dot__btns--inactive"}>
                
                <button className="dot__btn"
                onClick={e => clearModal.current.className = "background__modal modal__active"}>
                    Clear
                </button>
            
            </div>
        </section>
)}))