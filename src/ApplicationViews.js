import React from "react"
import { Redirect, Route } from "react-router-dom"
import { CollectionProvider } from "./components/collection/CollectionProvider"
import { ThesaurusProvider} from "./components/thesaurus/ThesaurusProvider"
import { SettingsProvider } from "./components/settings/SettingsProvider"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { CollectionView } from "./components/collection/CollectionView"
import { CommunityView } from "./components/community/CommunityView"
import { RecentProvider } from "./components/recent/RecentProvider"
import { WordProvider } from "./components/word/WordProvider"

const ApplicationViews = () => (
    <CollectionProvider>
        <WordProvider>      
            <SettingsProvider>
                <ThesaurusProvider>
                    <RecentProvider>

                        <div className="app__container">                          
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

                            {/* Will not be doing a community view */}
                            <Route exact path="/Community">
                                <CommunityView />
                            </Route>
                        </div>

                    </RecentProvider>
                </ThesaurusProvider>
            </SettingsProvider>
        </WordProvider>

        {/* Footer needs no providers; it's static content, but CollectionProvider is the main wrapping element */}
        <Footer />
    </CollectionProvider>
)

export default ApplicationViews
