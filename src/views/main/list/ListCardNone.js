import React from "react"

const ListCardNone = () => (
    <section className="card card__color--white card__noDefault">
        <h2 className="noDefault__h2">No collection created</h2>
        <p className="noDefault__p">Create a <strong>collection</strong> to begin using <strong>Lexicon</strong>.</p>
        <button className="btn btn__noDefault"
        onClick={e => {e.target.parentNode.parentNode.parentNode.childNodes[0].className = "background__modal modal__active"}}>
            Create new collection
        </button>
    </section>
)

export default ListCardNone