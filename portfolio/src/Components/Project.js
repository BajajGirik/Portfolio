import "./Project.css"

function Project({ title, desc, image, link, styles }) {
    return (
        <div className="Project" data-aos={styles} data-aos-duration="3000">
            <a href={link}><img src={image} alt="Img not loaded" /></a>
            <div>
                <center><h2>{title}</h2></center>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Project
