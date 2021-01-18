import React from "react"
import { Route } from "react-router-dom"
import { CollectionProvider } from "./components/collection/CollectionProvider"
import { ThesaurusProvider} from "./components/thesaurus/ThesaurusProvider"
import { SettingsProvider } from "./components/settings/SettingsProvider"
import Header from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { CollectionView } from "./components/collection/CollectionView"
import { RecentProvider } from "./components/recent/RecentProvider"
import { WordProvider } from "./components/word/WordProvider"

const ApplicationViews = () => (
    <CollectionProvider>
        <WordProvider>      
            <SettingsProvider>
                <ThesaurusProvider>
                    <RecentProvider>

                        <div className="app__container">                          
                            {/*
                                Header only needs setting and project provider,
                                but needs to be inside the app__container so
                                login and main application can have different CSS layouts
                            */}
                            <Header />

                            <Route path="/">
                                <CollectionView />
                            </Route>
                        </div>

                    </RecentProvider>
                </ThesaurusProvider>
            </SettingsProvider>
        </WordProvider>
        {/*
            Footer needs no providers;
            it's static content,
            but CollectionProvider is the main wrapping element
        */}
        <Footer />
    </CollectionProvider>
)

export default ApplicationViews
