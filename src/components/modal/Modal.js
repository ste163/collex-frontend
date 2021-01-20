import React, { forwardRef } from "react"
import { IconClose } from "../icons/Icons"
import "./Modal.css"

// To use Modal
    // Add props for width (see Modal.css for all):
        // modal__width--small
        // modal__width--wide
    // Add content with
        // contentFunction
        
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

            <article className={`modal__container ${props.width}`}>

                <section className="modal__heading">
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