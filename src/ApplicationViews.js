import React from "react"
import { Route } from "react-router-dom"
import { CollectionProvider } from "./views/main/collection/CollectionProvider"
import { ThesaurusProvider} from "./views/main/thesaurus/ThesaurusProvider"
import { SettingsProvider } from "./components/settings/SettingsProvider"
import MainView from "./views/main/MainView"
import { RecentProvider } from "./views/main/thesaurus/recent/RecentProvider"
import { WordProvider } from "./components/word/WordProvider"
import Header from "./views/main/header/Header"
import Footer from "./views/main/footer/Footer"

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
                                <MainView />
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
