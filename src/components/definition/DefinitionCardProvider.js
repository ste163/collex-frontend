import React, { useState, createContext } from "react"
// DefinitionCardProvider's only goal is to have a unique state for each definition card
// This way, users can cycle through all possible definitions for a term.

export const DefinitionCardContext = createContext()

export const DefinitionCardProvider = props => {

    const [ currentDef, setCurrentDef ] = useState(undefined)

    return (
        <DefinitionCardContext.Provider value={{
            currentDef, setCurrentDef
        }}>
            {props.children}
        </DefinitionCardContext.Provider>
    )
}