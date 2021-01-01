import React from "react"
import { Redirect, Route } from "react-router-dom"
import { CollectionView } from "./collection/CollectionView"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <CollectionView />
            </Route>
        </>
    )
}