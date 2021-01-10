import React, { useState, createContext } from "react"
// WordProvider is only for the Word table.
// This is separate from the Recent Words table

export const WordContext = createContext()

export const WordProvider = props => {

    // Words are ALL the words in the database. Different from ThesaurusProvider's word state.
    // That state is for the single word
    const [ words, setWords ] =  useState([])

    // Need getWords and deleteWord

return (
    <WordContext.Provider value={{
        words
    }}>
        {props.children}
    </WordContext.Provider>
)
}