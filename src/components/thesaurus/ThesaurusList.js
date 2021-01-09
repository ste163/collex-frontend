import React from "react"
import { ThesaurusSearch } from "./ThesaurusSearch"
import { RecentCard } from "../recent/RecentCard"
import { DefinitionCard } from "../definition/DefinitionCard"
import "./ThesaurusList.css"

export const ThesaurusList = () => {

    return (
        <section className="collection__thesaurus">
            <div className="thesaurus__container--search">
                <ThesaurusSearch />
                <RecentCard />
            </div>
            <div className="thesaurus__container--definitions">
                {/*
                    Definition Cards here---created dynamically. Need ref?q
                */}
                <DefinitionCard />
                <DefinitionCard />
                <DefinitionCard />
                <DefinitionCard />
            </div>
        </section>
    )
}