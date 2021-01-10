import React, { useState, createContext } from "react"
import { APIKey } from "../../APIKey"

export const ThesaurusContext = createContext()

export const ThesaurusProvider = props => {

    const key = APIKey.thesaurus

    const [ word, setWord ] = useState([])
    const [ definitionCards, setDefinitionCards ] = useState([])

    const getWord = word => {
        return fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${key}`)
        .then(response => response.json())
        .then(setWord)
        // When we get a word, grab the current definitionCards list,
        // then ADD the word object we just retrieved to the front of the array
        // OR the back and i just reverse it later. Doesn't matter yet.
        // Just need to ensure definitionCards always updates correctly
        // Whenever we getWord
        }

    return (
        <ThesaurusContext.Provider value={{
            word, definitionCards, getWord
        }}>
            {props.children}
        </ThesaurusContext.Provider>
    )
}