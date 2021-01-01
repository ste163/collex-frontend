import React, { useContext, useState, useEffect, useRef } from "react"
import { CollectionContext } from "./CollectionProvider"
import { Modal } from "../modal/Modal"
import "./CollectionForm.css"

export const CollectionForm = props => {

    // Store the project we can edit, if we have one
    const editableCollection = props.props
    const userId = +sessionStorage.getItem("userId")

    const typeModal = useRef()
    const wordGoalModal = useRef()

    // Set the default project so the form can reset.
    const defaultCollection = {
        name: "",
        typeId: "",
        dateStarted: "",
        wordCountGoal: "",
        goalFrequency: "",
        daysPerFrequency: ""
    } 

    const { collections, addCollections, updateCollections } = useContext(CollectionContext)
    
    // Sets state for creating the project
    const [ collection, setCollection ] = useState(defaultCollection)

    const [ isLoading, setIsLoading ] = useState(true)

    // Check on load and when collections change, if we have an editable collection or not
    useEffect(() => {
            if (editableCollection) {
                setCollection(editableCollection)
                setIsLoading(false);
            } else {
                setIsLoading(false)
            }
    }, [collections])

    const handleControlledInputChange = e => {
            const newCollection = { ...collection }
            newCollection[e.target.name] = e.target.value
            setCollection(newCollection)
    }

    const constructNewCollection = (e) => {
        // if (!parseInt(collection.typeId)) {
        //     typeModal.current.className = "background__modal modal__active"
        // } else {
        //     // Prepare not entered inputs for saving
        //     if (collection.goalFrequency === "daily") {
        //         collection.daysPerFrequency = 1
        //     }

        //     if (+collection.wordCountGoal === 0) {
        //         wordGoalModal.current.className = "background__modal modal__active"
        //     } else {
        //         if (editableCollection) {
        //             updateCollection({
        //                 id: editableCollection.id,
        //                 name: collection.name,
        //                 userId,
        //                 typeId: +collection.typeId,
        //                 dateStarted: collection.dateStarted,
        //                 wordCountGoal: +collection.wordCountGoal,
        //                 goalFrequency: collection.goalFrequency,
        //                 daysPerFrequency: +collection.daysPerFrequency,
        //                 completed: false
        //             }).then(() => {
        //                 getProgressByCollectionId(editableCollection.id)
        //             })
    
        //         } else {
        //             addCollection({
        //                 name: collection.name,
        //                 userId,
        //                 typeId: +collection.typeId,
        //                 dateStarted: collection.dateStarted,
        //                 wordCountGoal: +collection.wordCountGoal,
        //                 goalFrequency: collection.goalFrequency,
        //                 daysPerFrequency: +collection.daysPerFrequency,
        //                 completed: false
        //             })
        //             setCollection(defaultCollection)
        //         }  
        //         e.currentTarget.parentNode.parentNode.parentNode.className = "background__modal"
        //     }   
        // }
    }

    const createProject = (e) => {
        e.preventDefault()
        constructNewCollection(e)
    }

    return (
        <>
        <form className="form__project" onSubmit={createProject}>

            <h3 className="form__h3">
                {editableCollection ? "Update Project ": "Create New Project"}
            </h3>
            
            <h4 className="form__h4">Project Setup</h4>

            <fieldset>
                <label htmlFor="projectName">Collection name: </label>
                <input type="text"
                onChange={handleControlledInputChange}
                id="projectName"
                name="name"
                value={collection.name}
                placeholder="Project name"
                required
                autoFocus/>
            </fieldset>
            
            {/* Make this Public or Private, with a note that you can change this later */}
            <fieldset>
                <label htmlFor="projectType">Project Type:</label>
                <select
                onChange={handleControlledInputChange}
                id="projectType"
                name="typeId"
                // value={project.typeId}
                required
                autoFocus>
                    <option value="0">Select a project type</option>
                    {/* {types.map(type => (
                        <option key={type.id} value={type.id}>
                            {type.name}
                        </option>
                    ))} */}
                </select>
            </fieldset>  
            
            <div className="project__submit">
                <button 
                className="btn"
                type="submit"
                disabled={isLoading}>
                    {editableCollection ? "Update" : "Create"}
                </button>
            </div>

        </form>
        </>
    )
}