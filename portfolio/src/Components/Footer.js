import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer__head" data-aos="flip-right" data-aos-duration="3000">
                <h2>Thanks For Visiting My Website</h2>
                <p>If you want to get in touch with me,</p>
                <p>Then check out my socials down below</p>
            </div>
            
            <div className="Footer__contact">
                <a className="icon solid fa fa-linkedin-square" href="https://www.linkedin.com/in/girik-bajaj/" target="_blank"></a>
                <a className="icon solid fa fa-github" href="https://github.com/BajajGirik" target="_blank"></a>
                <a className="icon solid fa fa-envelope" href="mailto:bajajgirikoff2@gmail.com" target="_blank"></a>
                <a className="icon solid fa fa-facebook-f" href="https://www.facebook.com/girik.bajaj.9/" target="_blank"></a>
                <a className="icon solid fa fa-instagram" href="https://www.instagram.com/girik_bajaj/" target="_blank"></a>
            </div>    
        </div> 
    )
}

export default Footer
