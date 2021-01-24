// Render synonyms for current definition
import React, { useEffect, useState } from "react"
import WordButton from "../../../../components/word/WordButton"

const DefinitionCardSynonyms = ({ currentDef }) => {

    // Final Array of Arrays of all Synonyms separated into sets of 10
    const [ arrayOfSynonymArrays, setArrayOfSynonymArrays ] = useState([])

    useEffect(() => {
        setArrayOfSynonymArrays(SeparateListOfSynsIntoTens())
        console.log("Array of Arrays", arrayOfSynonymArrays)
    }, [currentDef])
    
    // Find total of synonyms for "Showing X out of TOTAL"
    const CalculateTotalSyns = () => {
        let totalSyns = 0
        currentDef.meta.syns.map(synonymArray => {
            totalSyns += synonymArray.length
        })
        return totalSyns
    }

    // Create a combined list of all synonyms for this definition
    // Returns nothing because it's affecting allSynonyms
    const CreateArrayOfAllSyns = () => {
        let allSynonyms = []
        currentDef.meta.syns.forEach(synonymArray => {
            synonymArray.forEach(synonym => {
                allSynonyms.push(synonym)
            })
        })
        return allSynonyms
    }

    const SeparateListOfSynsIntoTens = () => {
        const allSynonyms = CreateArrayOfAllSyns()
        let arraysOfSynonyms = []
        let setOf10Array = []
        
        allSynonyms.forEach(synonym => {
            // If the array 10 or less, add current synonym
            if (setOf10Array.length < 10) {
                setOf10Array.push(synonym)
            } else if (setOf10Array.length === 10) {
                // If we've filled the array and their are still words,
                // Add the array to Array of Arrays then clear array
                arraysOfSynonyms.push(setOf10Array)
                setOf10Array = []
                // After we clear the array, add the word to it
                setOf10Array.push(synonym)
            }
        })
        arraysOfSynonyms.push(setOf10Array)
        return arraysOfSynonyms
    }
    
    if (currentDef.meta.syns.length === 0) {
        return null
    }

    return (
        <>
            <hr className="definition__divider"></hr>
            <h4 className="card__h4 definition__h4--synonym">
                synonyms
            </h4>
            {
                arrayOfSynonymArrays.length === 1 ? null :
                // Only show if there is more than one "page" of synonyms
                <p className="synonym__total">
                    Showing X out of {CalculateTotalSyns()}
                </p>
            }
            <ul className="word__list definition__words">
                {
                    // allSynonyms.map(synonym => {
                    //     return <WordButton key={allSynonyms.indexOf(synonym)} props={{word: synonym}} />
                    // })
                }
            </ul>
        </>
    )
}

export default DefinitionCardSynonyms