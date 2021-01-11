import React, { useContext } from "react"
import { RecentCard } from "../recent/RecentCard"
import { DefinitionCard } from "../definition/DefinitionCard"
import { DidYouMeanCard } from "../definition/DidYouMeanCard"
import { ThesaurusSearch } from "./ThesaurusSearch"
import { ThesaurusContext } from "./ThesaurusProvider"
import "./ThesaurusList.css"

export const ThesaurusList = () => {
    const { definitionCards } = useContext(ThesaurusContext)
    console.log("Definition cards: ", definitionCards)

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
                        if (def[0].meta) {
                            return <DefinitionCard key={definitionCards.indexOf(def)} props={def} cardId={definitionCards.indexOf(def)} />
                        } else {
                            return <DidYouMeanCard key={definitionCards.indexOf(def)} props={def} cardId={definitionCards.indexOf(def)} />
                        }
                    })
                }
            </div>
        </section>
    )
}