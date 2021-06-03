import React from 'react'
import "./Project.css"

function Project({ title, desc, image }) {
    return (
        <div className="Project">
            <a href="#"><img src={image} alt="Img not loaded" /></a>
            <div>
                <center><h2>{title}</h2></center>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Project
