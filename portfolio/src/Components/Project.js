import React from 'react'
import "./Project.css"

function Project({ title, image }) {
    return (
        <div className="Project">
            <img src={image} />
            <h2>{ title }</h2>
        </div>
    )
}

export default Project
