import React, { useRef, useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { Modal } from "../modal/Modal";
import "./AuthView.css"

export const AuthView = props => {

        // If logging out with dark mode active, this resets colors to white 
        // HeaderColorMode()
    
        // Get references for all of the elements that will change
        const usernameLogin = useRef()
        const usernameRegister = useRef()
        const existDialog = useRef()
        const conflictDialog = useRef()
        const history = useHistory()
    
        const loginBtn = useRef()
        const registerBtn = useRef()
    
        // To allow for the nav underline to move, target it by useRef
        const underline = useRef()
        const [activeBtn, setBtn] = useState(true)

        // CAN NOT USE FOR CURRENT TESTING
        // Create default settings for user or load user's settings
        // const { settings, getSettingsOnLogin, addDefaultSettings } = useContext(SettingsContext)

        // // Fetch for only login field
        // const existingUserCheckLogin = () => {
        //     return fetch(`http://localhost:8088/users?username=${usernameLogin.current.value}`)
        //         .then(res => res.json())
        //         .then(user => user.length ? user[0] : false)
        // }
    
        // // Fetch for only register field
        // const existingUserCheckRegister = () => {
        //     return fetch(`http://localhost:8088/users?username=${usernameRegister.current.value}`)
        //         .then(res => res.json())
        //         .then(user => user.length ? user[0] : false)
        // }
    
        const handleLogin = (e) => {
            e.preventDefault()
                // Get the username the person entered. If it matches, then GOOD!
                // IF IT DOESN"T MAtCH the 1 in the database, fail.
                const username = e.target[1].value
                const retrievedUsername = localStorage.getItem("Username")
                
                if (retrievedUsername === username) {
                    sessionStorage.setItem("userId", 1)
                    sessionStorage.setItem("Username", username)
                    history.push("/")
                } else {
                    existDialog.current.className = "background__modal modal__active"
                }
        }
    
        const handleRegister = (e) => {
            e.preventDefault()
            const username = e.target[1].value
            const retrievedUsername = localStorage.getItem("Username")

            if (retrievedUsername !== username) {
                localStorage.setItem("UserId", 1)
                localStorage.setItem("Username", username)
            } else {
                conflictDialog.current.className = "background__modal modal__active"
            }
        }
    
    // Content for warning modal
    const ExistDialog = () => (
        <>
            <h2 className="modal__warning">Warning</h2>
            <p className="auth__warning">User does not exist.</p>
            <button className="btn"
            onClick={e => existDialog.current.className = "background__modal"}>
                Close
            </button>
        </>
    )

    // Content for warning modal
    const ConflictDialog = () => (
        <>
            <h2 className="modal__warning">Warning</h2>
            <p className="auth__warning">Username has already been taken.</p>
            <button className="btn"
            onClick={e => conflictDialog.className = "background__modal"}>
                Close
            </button>
        </>
    )

    return (
        <main className="auth__container">

            <Modal ref={existDialog} contentFunction={<ExistDialog/>} width={"modal__width--smallest"}/>
            <Modal ref={conflictDialog} contentFunction={<ConflictDialog/>} width={"modal__width--small"} />    

            <div className="auth__column--middle">
                <div>COLLEX LOGO</div>
                <h1>COLLEX FANCY TITLE</h1>
                <h2 className="subtitle">
                    Create and share word collections<br/>
                    using Merriam-Webster's CollegiateR Thesaurus
                </h2>
                <div>MW LOGO</div>

                <section className="card card__color--white card__auth">
                    <ul  className="auth__btns">
                        
                        <li className="btns__li">
                            <button
                            className={activeBtn ? "auth__btn auth__btn--active" : "auth__btn"}
                            onClick={e => {
                                setBtn(true)
                                if (usernameRegister.current !== undefined && usernameRegister.current !== null) {
                                    usernameRegister.current.value = ""
                                }
                            }}
                            onMouseEnter={e => underline.current.className = "auth__line line__login--active"}
                            onMouseLeave={e => underline.current.className = `auth__line ${activeBtn ? "line__login--active" : "line__register--active"}`}>
                                Log in
                            </button>
                        </li>
                        
                        <li className="btns__li">
                            <button
                            className={activeBtn ? "auth__btn" : "auth__btn auth__btn--active"}
                            onClick={e => {
                                setBtn(false)
                                if (usernameLogin.current !== undefined  && usernameLogin.current !== null) {
                                    usernameLogin.current.value = ""
                                }
                            }}
                            onMouseEnter={e => underline.current.className = "auth__line line__register--active"}
                            onMouseLeave={e => underline.current.className = `auth__line ${activeBtn ? "line__login--active" : "line__register--active"}`}>
                                Register
                            </button>
                        </li>
                        
                        <div ref={underline} className={`auth__line ${activeBtn ? "line__login--active" : "line__register--active"}`}></div>
                    
                    </ul>

                    <section>
                        <form className="form"
                        onSubmit={activeBtn ? handleLogin : handleRegister}>

                            <fieldset>
                                <label htmlFor={activeBtn ? "usernameLogin" : "usernameRegister"}>Username</label>
                                <input className="input--auth" ref={activeBtn ? usernameLogin : usernameRegister} type="text"
                                    id={activeBtn ? "usernameLogin" : "usernameRegister"}
                                    placeholder="Author123"
                                    required autoFocus />
                            </fieldset>

                            <fieldset className="fieldset__btn">
                                <button 
                                ref={loginBtn}
                                className={`btn btn--green btn__authSubmit ${activeBtn ? "login__active" : " login__inactive"}`}
                                type="submit">Login</button>
                                <button
                                ref={registerBtn} 
                                className={`btn btn--green btn__authSubmit ${activeBtn ? "register__inactive" : "register__active"}`}
                                type="submit">Register</button>
                            </fieldset>

                        </form>
                    </section>
                </section>
            </div>

        </main>
    )
}