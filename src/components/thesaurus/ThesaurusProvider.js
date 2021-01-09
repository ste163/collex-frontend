import React, { useState, createContext } from "react"
import { APIKey } from "../../APIKey"

export const ThesaurusContext = createContext()

export const ThesaurusProvider = props => {

    const key = APIKey.thesaurus

    const [word, setWord] = useState([])
    const [definitionCards, setDefinitionCards] = useState([])

    const getWord = word => {
        return fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${key}`)
        .then(response => response.json())
        .then(setWord)
        }

    return (
        <ThesaurusContext.Provider value={{
            word, definitionCards, getWord
        }}>
            {props.children}
        </ThesaurusContext.Provider>
    )
}