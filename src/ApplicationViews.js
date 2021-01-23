import React from "react"
import { Route } from "react-router-dom"
import { CollectionProvider } from "./providers/CollectionProvider"
import { ThesaurusProvider} from "./providers/ThesaurusProvider"
import { SettingsProvider } from "./providers/SettingsProvider"
import { RecentProvider } from "./providers/RecentProvider"
import { WordProvider } from "./providers/WordProvider"
import Header from "./components/header/Header"
import SubHeader from "./components/subHeader/SubHeader"
import MainView from "./views/main/MainView"
import Footer from "./components/footer/Footer"


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
                            <SubHeader />

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
