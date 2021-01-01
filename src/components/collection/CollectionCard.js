import React, {useContext, useEffect, useRef} from "react"
import { IconArrow } from "../icons/IconArrow"
import "./CollectionCard.css"

export const CollectionCard = ({collection}) => {

    // Words context??
    // const { progress, getProgressByProjectId } = useContext(ProgressContext)

    // useEffect(() => {
    //     getProgressByProjectId(project.id)
    // }, [])

    return (
        <article className="card card__color--white card__collection">
            <h2 className="collection__h2--card">{collection.name}</h2>
            <p className="collection__p">{collection.description}</p>
            <p className="collection__visibility">{collection.public === "2" ? <>Public</> : <></>}</p>
            <div className="collection__arrow">
                <IconArrow color="icon__gray"/>
            </div>
        </article>
    )
}