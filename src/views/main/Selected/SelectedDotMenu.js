import React, { useRef, forwardRef, useContext } from "react"
import { CollectionContext } from "../../../providers/CollectionProvider"
import { IconDots } from "../../../components/icons/Icons"
import { Modal } from "../../../components/modal/Modal"
import { CollectionForm } from "../../../components/forms/CollectionForm"

const SelectedDotMenu = (React.forwardRef((props, ref) => {

    const { deleteCollection } = useContext(CollectionContext);

    const deleteModal = useRef()
    const editModal = useRef()  

    const DeleteWarning = () => (
        <>
            <h2 className="modal__warning">Warning</h2>
            <p className="warning__p">Deleting {props.collection.name} is permanent.</p>
            <button className="btn btn--red"
            onClick={e => deleteCollection(props.collection.userId, props.collection.id)}>
                Delete
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

        <Modal ref={editModal} contentFunction={<CollectionForm props={props.collection} />} width={"modal__width--wide"}/> 
       
        <Modal ref={deleteModal} contentFunction={<DeleteWarning/>} width={"modal__width--small"}/>
        
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
            onClick={e => editModal.current.className = "background__modal modal__active"}>
                Edit
            </button>
            
            <button className="dot__btn"
            onClick={e => deleteModal.current.className = "background__modal modal__active"}>
                Delete
            </button>
        
        </div>
    </section>
)}))

export default SelectedDotMenu