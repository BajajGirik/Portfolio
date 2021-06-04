import React, { useEffect } from 'react'
import "./Project.css"

function Project({ title, desc, image, link }) {

    return (
        <div className="Project">
            <a href={link}><img src={image} alt="Img not loaded" /></a>
            <div>
                <center><h2>{title}</h2></center>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Project
