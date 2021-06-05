import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
    
function Navbar() {
    return (
        <div className="Navbar">
           <Link className=""
                to="Head"
                smooth={true}
                duration={1000}>
            Home    
            </Link> 
           <Link className=""
                to="Skills"
                smooth={true}
                duration={1000}>
            About Me   
            </Link> 
           <Link className=""
                to="Main"
                smooth={true}
                duration={1000}>
            Projects    
            </Link> 
           <Link className=""
                to="ContactMe"
                smooth={true}
                duration={1000}>
            Contact  
            </Link> 
        </div>
    )
}

export default Navbar
