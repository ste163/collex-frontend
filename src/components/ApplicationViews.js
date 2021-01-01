import React from "react"
import { Redirect, Route } from "react-router-dom"
import { CollectionProvider } from "./collection/CollectionProvider"
import { SettingsProvider } from "./settings/SettingsProvider"
import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import { CollectionView } from "./collection/CollectionView"
import { CommunityView } from "./community/CommunityView"

export const ApplicationViews = () => {
    return (
        <>
            <CollectionProvider>
                <SettingsProvider>
                    {/* Header only need setting and project provider */}
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
            </CollectionProvider>

            {/* Footer needs no providers; it's static content */}
            <Footer />
        </>
    )
}