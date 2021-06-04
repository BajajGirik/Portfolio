import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="Header">
            <span>Hello!</span>
            <span className="Header__about">I am Girik Bajaj</span>
            <div>
                <p>Scroll Down to know more about me</p>
                <a className="icon solid fa fa-angle-double-down" href="#Main"></a>
            </div>
        </div>
    )
}

export default Header
