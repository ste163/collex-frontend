import React from "react"
import ListCard from "./ListCard"
// Create collection cards for searched words

const ListCardCreator = props => {
    if (!props.props) {
        return null;
    }

    return (
        props.props.map(collection => {
            if (collection.name !== "defaultCollection") {
                return <ListCard key={collection.id} collection={collection} /> 
            } 
        })
    )
}

export default ListCardCreator