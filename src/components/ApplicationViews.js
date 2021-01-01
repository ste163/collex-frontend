import React from "react"
import { Redirect, Route } from "react-router-dom"
import { SettingsProvider } from "./settings/SettingsProvider"
import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import { CollectionView } from "./collection/CollectionView"
import { CommunityView } from "./community/CommunityView"

export const ApplicationViews = () => {
    return (
        <>
            <SettingsProvider>
                {/* Header will need the Collections Provider to generate list of default collections to load */}
                <Header />

                <Route exact path="/">
                    <Redirect to="/Collections" />
                </Route>

                <Route exact path="/Collections">
                    <CollectionView />
                </Route>

                <Route exact path="/Community">
                    <CommunityView />
                </Route>
            </SettingsProvider>

            {/* Footer needs no providers; it's static content */}
            <Footer />
        </>
    )
}