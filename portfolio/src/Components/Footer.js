import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer__head">
                <h2>Thanks For Visiting My Website</h2>
                <p>If you want to get in touch with me,</p>
                <p>Then check out my socials down below</p>
            </div>
            
            <div className="Footer__contact">
                <a className="icon solid fa fa-linkedin-square" target="_blank"></a>
                <a className="icon solid fa fa-github" target="_blank"></a>
                <a className="icon solid fa fa-envelope" target="_blank"></a>
                <a className="icon solid fa fa-facebook-f" target="_blank"></a>
                <a className="icon solid fa fa-instagram" target="_blank"></a>
            </div>    
        </div>
    )
}

export default Footer
