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
                        // For the Key
                            // Use the position of the item in the array to set the key.
                            // That way, we you hit the X, it uses that location to remove it from state.
                            if (def[0].meta) {
                                return <DefinitionCard key={1} props={def} />
                            } else {
                                return <DidYouMeanCard key={1} props={def} />
                            }
                    })
                }
            </div>
        </section>
    )
}