import React, { useState, createContext } from "react"
// WordProvider is only for the Word table.
// This is separate from the Recent Words table

export const WordContext = createContext()

export const WordProvider = props => {

    const [ words, setWords ]

    // Need getWords and deleteWord

return (
    <WordContext.Provider value={{
        words
    }}>
        {props.children}
    </WordContext.Provider>
)
}