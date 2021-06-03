import React from 'react'
import './Main.css'
import Project from './Project'
import MultiplyIt from '../Pics/MultiplyIt.png'
import Wikiclone from '../Pics/Wikiclone.png'
import GoogleHome from '../Pics/GoogleHome.png'

function Main() {
    return (
        <div className = "Main">
            <Project
                title="MultiplyIt"
                image={MultiplyIt}
                link="https://bajajgirik.github.io/ReactMultiply/"
                desc="This project was made for people who struggle doing multiplication problems. This website generates 10 random questions and gives your final score after completion. It has got 4 difficulty modes in which you can practice. Built using React.js"
            />
            <Project
                title="WikiClone"
                image={Wikiclone}
                link="https://github.com/BajajGirik/WikiClone"
                desc="This project is a Wikipedia clone built using Django. It covers many features like creating a new article, editing an already existing article, fetching a random article, a dedicated content page. This project uses Sqlite as its database."
            />
            <Project
                title="GoogleHomepage"
                image={GoogleHome}
                link="https://bajajgirik.github.io/GoogleHomepage/"
                desc="This is a clone of Google Home Page in which I pass an action to google.com after you search for something. I tried to give it a very original look. It was my first front-end website."
            />
        </div>
    )
}

export default Main
