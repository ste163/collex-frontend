import React, { useState, createContext } from "react"
import { APIKey } from "../../APIKey"

export const ThesaurusContext = createContext()

export const ThesaurusProvider = props => {

    const key = APIKey.thesaurus

    const [ word, setWord ] = useState([])
    const [ definitionCards, setDefinitionCards ] = useState([])

    const getWord = term => {
        return fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${term}?key=${key}`)
        .then(response => response.json())
        .then(response => {
            // Set word state and definition cards' state
            // If I want to set a max card amount from user settings, will need to add that check here
            setWord(response)
            const updatedList = definitionCards
            updatedList.push(response)
            setDefinitionCards(updatedList)
        })
        }

    return (
        <ThesaurusContext.Provider value={{
            word, definitionCards, getWord
        }}>
            {props.children}
        </ThesaurusContext.Provider>
    )
}