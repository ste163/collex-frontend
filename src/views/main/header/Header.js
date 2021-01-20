import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import { IconLogout, IconGear } from "../../../components/icons/Icons"
import { Modal } from "../../../components/modal/Modal"
import LexLogo from "../../../components/branding/LexLogo"
import LexTitle from "../../../components/branding/LexTitle"
import SettingsForm from "../../../components/settings/SettingsForm"
import "./Header.css"

const Header = () => {

    // Instantiate useHistory to use it
    const history = useHistory()

    // Get references for modals
    const settingsModal = useRef()

    return (
        <header className="header">

            <section className="header__branding">
                <LexLogo location={"logo__header--lex"} color={"logo__white"} />
                <LexTitle location={"title__header"} color={"title__white"} />
            </section>

            <nav className="header__nav">
                <ul className="nav__list">
                    
                    <div className="nav__centered">
                        {/* Leave empty for proper flex spacing */}
                    </div>

                    <div className="nav__rightAligned">
                        <li className="nav__item">
                            <button className="nav__btn btn__settings"
                            onClick={() => { 
                                settingsModal.current.className = "background__modal modal__active"
                            }}
                            onMouseOver={e => {
                                    const svg = e.currentTarget.firstElementChild.children[1].classList
                                    svg.remove("icon__whiteNoChange")
                                    svg.add("icon__hovered")
                                }}
                                onMouseLeave={e => {
                                    const svg = e.currentTarget.firstElementChild.children[1].classList
                                    svg.remove("icon__hovered")
                                    svg.add("icon__whiteNoChange")
                                }}>
                                <IconGear color="icon__whiteNoChange" />
                                Settings
                            </button>
                        </li>
                        
                        <li className="nav__item">
                            <button className="nav__btn btn__logout" 
                            onClick={() => {
                                sessionStorage.clear("userId")
                                history.push()
                            }}
                            onMouseOver={e => {
                                e.currentTarget.firstElementChild.children[1].childNodes.forEach(svg => {
                                        svg.classList.remove("icon__whiteNoChange")
                                        svg.classList.add("icon__hovered")
                                    })
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.firstElementChild.children[1].childNodes.forEach(svg => {
                                    svg.classList.remove("icon__hovered")
                                    svg.classList.add("icon__whiteNoChange")
                                })
                            }}>
                                <IconLogout color="icon__whiteNoChange" />
                                Logout
                            </button>
                        </li>
                    </div>
                </ul>
            </nav>

            <Modal  ref={settingsModal} contentFunction={<SettingsForm/>} width={"modal__width--med"}/>
        
        </header>
    )
}

export default Header