import React, { forwardRef } from "react"
import { IconClose } from "../icons/Icons"
import "./Modal.css"

// To use Modal
    // Add content with
        // contentFunction
    // Add a type label to top right corner with
        // contentHeader
        
export const Modal = (React.forwardRef((props, ref) => (
     (
        // Modal Background
        <section ref={ref} className="background__modal"
        onClick={e => {
            // If you click on the background, close modal
           if (e.target.className === "background__modal modal__active") {
            ref.current.className = "background__modal"
           }
        }}>

            {/* Modal Card */}
            <article className={`modal__container`}>
                <section className="modal__header">
                    <div className="card__type">
                        {props.contentHeader}
                    </div>
                    <button className="btn__close"
                    onClick={e => ref.current.className = "background__modal"}>
                        <IconClose color="icon__gray" />
                    </button>
                </section>

                <section className="modal__content">
                    {props.contentFunction}                
                </section>
            </article>

        </section>
    )
)))