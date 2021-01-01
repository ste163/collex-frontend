import React, { useContext, useState, useEffect, useRef } from "react"
import { CollectionContext } from "./CollectionProvider"
import { Modal } from "../modal/Modal"
import "./CollectionForm.css"

export const CollectionForm = props => {

    // Store the project we can edit, if we have one
    const editableCollection = props.props
    const userId = +sessionStorage.getItem("userId")

    const visModal = useRef()

    // Set the default project so the form can reset.
    const defaultCollection = {
        name: "",
        description: "",
        categorizationType: "",
        public: "",
        starred: ""
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
        // if (!parseInt(collection.public)) {
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
        //                 public: +collection.public,
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
        //                 public: +collection.public,
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

    const createCollection = (e) => {
        e.preventDefault()
        constructNewCollection(e)
    }

    const VisibilityWarning = () => (
        <>
            <h2 className="modal__warning">Warning</h2>
            <p className="warning__p">No project type selected.</p>
            <button className="btn btn--red"
            onClick={e => visModal.current.className = "background__modal"}>
                Close
            </button>
        </>
    )

    return (
        <>
        <Modal ref={visModal} contentFunction={<VisibilityWarning/>} width={"modal__width--small"}/>

        <form className="form__project" onSubmit={createCollection}>

            <h3 className="form__h3">
                {editableCollection ? (<>Update {editableCollection.name}</>) : "Create New Collection"}
            </h3>

            <fieldset>
                <label htmlFor="collectionName">Name: </label>
                <input type="text"
                onChange={handleControlledInputChange}
                id="collectionName"
                name="name"
                value={collection.name}
                placeholder="Collection name"
                required
                autoFocus/>
            </fieldset>

            <fieldset>
                <label htmlFor="collectionDescription">Description: </label>
                <input type="text"
                onChange={handleControlledInputChange}
                id="collectionDescription"
                name="description"
                value={collection.description}
                placeholder="Collection description"
                />
            </fieldset>
            
            {/* Make this Public or Private, with a note that you can change this later */}
            <fieldset>
                <label htmlFor="public">Visibility (can change later): </label>
                <select
                onChange={handleControlledInputChange}
                id="public"
                name="public"
                value={collection.public}
                required
                autoFocus>
                    <option value="0">Select a visibility</option>
                    <option value="1">Private</option>
                    <option value="2">Public</option>
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