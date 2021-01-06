import React, { useRef, forwardRef, useContext } from "react"
import { IconDots } from "../icons/IconDots"
import { Modal } from "../modal/Modal"
import { RecentContext } from "./RecentProvider"

export const RecentDotMenu = (React.forwardRef((props, ref) => {

    const { deleteAllForCollection } = useContext(RecentContext);

    const clearModal = useRef()

    const ClearWarning = () => (
        <>
            <h2 className="modal__warning">Warning</h2>
            <p className="warning__p">Clearing {props.collection.name} is permanent.</p>
            <button className="btn btn--red"
            onClick={e => deleteAllForCollection(props.collection.userId, props.collection.id)}>
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

        <Modal ref={clearModal} contentFunction={<ClearWarning/>} width={"modal__width--small"}/>
        
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