import React, { useRef, useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import "./AuthView.css"

export const AuthView = props => {
    return (
        <main className="auth__container">

            <div className="auth__column--middle">
                <div>COLLEX LOGO</div>
                <h1>COLLEX FANCY TITLE</h1>
                <h2 className="subtitle">
                    Create and share word collections<br/>
                    using Merriam-Webster's CollegiateR Thesaurus
                </h2>
                <div>MW LOGO</div>
            
            </div>

        </main>
    )
}