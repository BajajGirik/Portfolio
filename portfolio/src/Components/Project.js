import React from 'react'
import "./Project.css"

function Project({ title, desc, image }) {
    return (
        <div className="Project">
            <img src={image} alt="Img not loaded" />
            <div>
                <h2>{title}</h2>
                <p>yadtsgxicaskj</p>
            </div>
        </div>
    )
}

export default Project
