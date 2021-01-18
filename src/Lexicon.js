import React from "react"
import { Route, Redirect } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import AuthView from "./components/auth/AuthView"
import { SettingsProvider } from "./components/settings/SettingsProvider"

const Lexicon = () => (
    <SettingsProvider>
        <Route render={() => {
            if (sessionStorage.getItem("userId")) {
                return <ApplicationViews />
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route exact path="/login">
            <AuthView />
        </Route>
    </SettingsProvider>
)

export default Lexicon