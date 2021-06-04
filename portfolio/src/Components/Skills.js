import React from 'react'
import './Skills.css'
import Resume from '../Pics/Resume.pdf'
function Skills() {
    return (
        <div id="Skills" data-aos="flip-down" data-aos-duration="3000">
            <center><h1>ABOUT ME</h1></center>
            <div>
                <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" />
                <p>My name is Girik Bajaj. 
                I am a Full Stack Web Developer and am proficient in HTML5, CSS3, Javascript; plus
                modern libraries and frameworks. I have experience working with <strong>Django</strong> and <strong>ReactJs</strong>.
                I am currently looking for an internship that is
                intellectually rewarding and has flexible work timings.<br /><br />
                For more details about me, check out my resume.
                <a className="fa fa-download" href={Resume} target="_blank">Resume</a>
                </p>    
            </div>
        </div>
    )
}

export default Skills
