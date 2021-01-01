import React from "react"

export const NoSelectedCollectionCard = () => (
    <section className="card card__color--white card__noDefault">
        <h2 className="noDefault__h2">No collection selected</h2>
        {/* Change based on if the left-side view is active */}
        <p className="noDefault__p">Select a <strong>collection</strong> from <strong>drop-down menu</strong>.</p>
    </section>
)