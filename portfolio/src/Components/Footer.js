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
                <a className="icon solid fa fa-linkedin-square"></a>
                <a className="icon solid fa fa-github"></a>
                <a className="icon solid fa fa-envelope"></a>
                <a className="icon solid fa fa-facebook-f"></a>
                <a className="icon solid fa fa-instagram"></a>
            </div>    
        </div>
    )
}

export default Footer
