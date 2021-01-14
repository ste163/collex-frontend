import React from "react"
import { Redirect, Route } from "react-router-dom"
import { CollectionProvider } from "./collection/CollectionProvider"
import { ThesaurusProvider} from "./thesaurus/ThesaurusProvider"
import { SettingsProvider } from "./settings/SettingsProvider"
import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import { CollectionView } from "./collection/CollectionView"
import { CommunityView } from "./community/CommunityView"
import { RecentProvider } from "./recent/RecentProvider"
import { WordProvider } from "./word/WordProvider"

export const ApplicationViews = () => {
    return (
        <>
            <CollectionProvider>
                <WordProvider>      
                    <SettingsProvider>
                        <ThesaurusProvider>
                            <RecentProvider>
                                {/* Header only need setting and project provider */}
                                <Header />

                                {/* 
                                    Will need a Words provider, most likely, so we can compare words in our database to the thesaurus
                                    Will also need a Recents provider to show the correct recents searches for each collection

                                    HOWEVER, I will NOT compare Words in the Community view. I would like ot have a "Community Recents" though, that would be
                                    Just for the signed in user. So that way You could still have your recent words across public collections.
                                */}

                                <Route path="/">
                                    <Redirect to="/Collections" />
                                </Route>

                                <Route exact path="/Collections">
                                    <CollectionView />
                                </Route>

                                <Route exact path="/Community">
                                    <CommunityView />
                                </Route>
                            </RecentProvider>
                        </ThesaurusProvider>
                    </SettingsProvider>
                </WordProvider>
            </CollectionProvider>

            {/* Footer needs no providers; it's static content */}
            <Footer />
        </>
    )
}