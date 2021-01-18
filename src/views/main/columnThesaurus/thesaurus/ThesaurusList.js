import React, { useContext } from "react"
import { ThesaurusSearch } from "./ThesaurusSearch"
import { ThesaurusContext } from "./ThesaurusProvider"
import { RecentCard } from "../../../../components/recent/RecentCard"
import { DefinitionCard } from "../definitionCards/DefinitionCard"
import { DidYouMeanCard } from "../definitionCards/DidYouMeanCard"
import { DefinitionNotFound } from "../definitionCards/DefinitionNotFound"
import { DefinitionCardProvider } from "../definitionCards/DefinitionCardProvider"
import "./ThesaurusList.css"

export const ThesaurusList = () => {
    const { definitionCards } = useContext(ThesaurusContext)

    return (
        <section className="collection__thesaurus">
            <div className="thesaurus__container--search">
                <ThesaurusSearch />
                <RecentCard />
            </div>
            <div className="thesaurus__container--definitions">
                {
                    // Definition Cards created by state. Word buttons & search bar update state.
                    // Hitting the X on any card would remove it from definitionList state.
                    definitionCards.map(def => {
                        const keyInstance = definitionCards.indexOf(def)

                        if (typeof def[0] !== "string" && def[0] !== undefined) {
                            return (
                                <DefinitionCardProvider key={keyInstance}>
                                    <DefinitionCard key={keyInstance} props={def} cardId={keyInstance} />
                                </DefinitionCardProvider>
                            )
                        } else if (def[0] !== undefined) {
                            return <DidYouMeanCard key={keyInstance} props={def} cardId={keyInstance} />
                        } else {
                            return <DefinitionNotFound key={keyInstance} props={def} cardId={keyInstance} />
                        }
                    })
                }
            </div>
        </section>
    )
}