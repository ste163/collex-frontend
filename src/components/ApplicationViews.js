import React from "react"
import { Redirect, Route } from "react-router-dom"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <h1>I'm Collex!</h1>
            </Route>
        </>
    )
}