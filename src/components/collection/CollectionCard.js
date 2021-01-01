import React, {useContext, useEffect, useRef} from "react"
import "./CollectionCard.css"

export const CollectionCard = ({collection}) => {

    // Words context??
    // const { progress, getProgressByProjectId } = useContext(ProgressContext)

    console.log(collection)

    // useEffect(() => {
    //     getProgressByProjectId(project.id)
    // }, [])

    return (
        <article className="card card__color--white card__collection">

            <h2 className="collection__h2--card">{collection.name}</h2>
            <p className="collection__subtitle--container">{collection.description}</p>

        </article>
    )
}