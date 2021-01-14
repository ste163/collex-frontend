import React, { useEffect, useRef, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { IconLogout } from "../icons/IconLogout"
import { IconGear } from "../icons/IconGear"
import { HeaderSettings } from "./HeaderSettings"
import { Modal } from "../modal/Modal"
import LexLogo from "../branding/LexLogo"
import LexTitle from "../branding/LexTitle"
import "./Header.css"

export const Header = () => {

    // To use history and location, need to store the invoked functions
    const history = useHistory()
    const location = useLocation()

    // Get references for nav buttons and underline
    const btnCollections = useRef()
    const btnCommunity = useRef()
    const navLine = useRef()

    // Get references for modals
    const settingsModal = useRef()

    const [currentLocation, setCurrentLocation] = useState(location.pathname)

    // Re-render the header whenever the pathname in the URL changes
    useEffect(() => {
        setCurrentLocation(location.pathname)
    }, [location.pathname])

    // Resets the nav underline when the mouse stops hovering 
    const navLineMouseLeave = () => {
        navLine.current.className = `${currentLocation.includes("/Collections") ? "nav__line nav__line--collections" : "nav__line nav__line--community"}`
    }

    return (
        <header className="header">

            <section className="header__branding">
                <LexLogo location={"logo__header--lex"} color={"logo__white"} />
                <LexTitle location={"title__header"} color={"title__white"} />
            </section>

            <nav className="header__nav">
                <ul className="nav__list">
                    <div className="nav__centered">
                        <li className="nav__item">
                            <button 
                            ref={btnCollections}
                            className={currentLocation.includes("/Collections") ? "nav__btn nav__btn--active" : "nav__btn"}
                            onMouseEnter={e => navLine.current.className = "nav__line nav__line--collections"}
                            onMouseLeave={e => navLineMouseLeave()}
                            onClick={ e => history.push("/Collections")}>
                                Your Collections
                            </button>
                        </li>

                        <li className="nav__item">
                            <button 
                            className="nav__btn"
                            ref={btnCommunity}
                            className={currentLocation.includes("/Community") ? "nav__btn nav__btn--active" : "nav__btn"}
                            onMouseEnter={e => navLine.current.className = "nav__line nav__line--community"}
                            onMouseLeave={e => navLineMouseLeave()}
                            onClick={e => history.push("/Community")}>
                                Community Collections
                            </button>
                        </li>

                        <div
                        ref={navLine}
                        className={currentLocation.includes("/Collections") ? "nav__line nav__line--collections" : "nav__line nav__line--community"}>
                        </div>
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

            <Modal  ref={settingsModal} contentFunction={<HeaderSettings/>} width={"modal__width--med"}/>
        
        </header>
    )
}