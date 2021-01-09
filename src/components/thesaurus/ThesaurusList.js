import React, { useContext } from "react"
import { RecentCard } from "../recent/RecentCard"
import { DefinitionCard } from "../definition/DefinitionCard"
import { ThesaurusSearch } from "./ThesaurusSearch"
import { ThesaurusContext } from "./ThesaurusProvider"
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
                {/*
                    Definition Cards created by a definitionList state. Word buttons that get a word response create these cards.
                    Hitting the X on any card would remove it from definitionList state.
                */}
                {
                    definitionCards.map(def => {
                        return <DefinitionCard id={def.id} props={def} />
                    })
                }
                <DefinitionCard />
                <DefinitionCard />
                <DefinitionCard />
                <DefinitionCard />
            </div>
        </section>
    )
}