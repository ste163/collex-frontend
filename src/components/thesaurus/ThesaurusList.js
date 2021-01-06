import React from "react"
import { ThesaurusSearch } from "./ThesaurusSearch"
import { RecentCard } from "../recent/RecentCard"

export const ThesaurusList = () => {

    return (
        <section className="collection__thesaurus">
            {/* Card labels and sizes need to be more consistent. They use too many different styles */}
            <ThesaurusSearch />
            <RecentCard />
            {/*
                Word cards with definitions and related words. These are created dynamically.
            */}
        </section>
    )
}