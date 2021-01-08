import React from "react"
import { ThesaurusSearch } from "./ThesaurusSearch"
import { RecentCard } from "../recent/RecentCard"

export const ThesaurusList = () => {

    return (
        <section className="collection__thesaurus">
            <ThesaurusSearch />
            <RecentCard />
            {/*
               Definition Cards here---created dynamically. Need ref?q
            */}
        </section>
    )
}