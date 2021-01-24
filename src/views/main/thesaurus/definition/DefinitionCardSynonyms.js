// Render synonyms for current definition
import React from "react"
import WordButton from "../../../../components/word/WordButton"

const DefinitionCardSynonyms = ({ currentDef }) => {

    // Move these to State instead
    // Used in CreateArrayOfAllSyns to make a array of all Synonyms
    let allSynonyms = []
    // Used in SeparateListOfSynsIntoTens to array of arrays
    let arraysOfSynonyms = []
    
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
        currentDef.meta.syns.forEach(synonymArray => {
            synonymArray.forEach(synonym => {
                allSynonyms.push(synonym)
            })
        })
        console.log("All Synonyms ", allSynonyms )
    }

    const SeparateListOfSynsIntoTens = () => {
        CreateArrayOfAllSyns()
    
        let array = []

        allSynonyms.forEach(synonym => {
            // If the array 10 or less, add current synonym
            if (array.length < 10) {
                array.push(synonym)
            } else if (array.length === 10) {
                // If we've filled the array and their are still words,
                // Add the array to Array of Arrays then clear array
                arraysOfSynonyms.push(array)
                array = []
                // After we clear the array, add the word to it
                array.push(synonym)
            }
        })
        // If allSynonyms has less than 10 words in it.
        arraysOfSynonyms.push(array)

        console.log("Array of Arrays", arraysOfSynonyms)
    }
    
    if (currentDef.meta.syns.length === 0) {
        return null
    }


    // Because we have synonyms at this point (after the if check), createSyns
    SeparateListOfSynsIntoTens()

    return (
        <>
            <hr className="definition__divider"></hr>
            <h4 className="card__h4 definition__h4--synonym">
                synonyms
            </h4>
            <p className="synonym__total">
                Showing X out of {CalculateTotalSyns()}
            </p>

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