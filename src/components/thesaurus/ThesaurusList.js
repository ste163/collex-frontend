import React, { useContext } from "react"
import { RecentCard } from "../recent/RecentCard"
import { DefinitionCard } from "../definition/DefinitionCard"
import { ThesaurusSearch } from "./ThesaurusSearch"
import { ThesaurusContext } from "./ThesaurusProvider"
import "./ThesaurusList.css"

export const ThesaurusList = () => {
    // PROBLEM: DOESN'T CREATE THE FIRST CARD. IT'S DELAYED BY 1. PROBABLY NEED A USEEFFECT
    const { definitionCards } = useContext(ThesaurusContext)

    let id = 0;

    console.log("Definition cards: ", definitionCards)

    return (
        <section className="collection__thesaurus">
            <div className="thesaurus__container--search">
                <ThesaurusSearch />
                <RecentCard />
            </div>
            <div className="thesaurus__container--definitions">
                {
                    // Definition Cards created by a definitionList state. Word buttons that get a word response create these cards.
                    // Hitting the X on any card would remove it from definitionList state.
                    definitionCards.map(def => {
                        debugger
                        id++
                        return <DefinitionCard id={id} props={def} />
                    })
                }
            </div>
        </section>
    )
}