import React, { useRef } from 'react';
import style from './About.module.css'
import imageLogo from "../../assets/mortyAnchor.png"
import morty from '../../assets/morty.png'
import rick from '../../assets/rick1.png'

import { useEyeMovement } from "../Eyes/useEyeMovement.js"


const About = () => {

    const mortyRef = useRef(null);
    const anchorRef = useRef(null);
    const eyeLeftRef = useRef(null)
    const eyeRightRef = useRef(null)


    useEyeMovement(eyeLeftRef, eyeRightRef, anchorRef, 'rotate', 3,3,200, mortyRef);


    return (
        <>
            <main>
                <div id="ankChars">
                <img id='morty' src={morty} ref={mortyRef} alt="morty" style={{  width: '250px', height: '300px', position: 'fixed', bottom: '-10px', left: '-5px' }} />
                <img id='rick' src={rick} ref={anchorRef} alt=" rick" style={{  width: '250px', height: '360px', position: 'fixed', bottom: '-10px', right: '-5px' }} />
                </div>
                <div id="eyes">
                    <img ref={eyeLeftRef} src={imageLogo} alt="mouseOverRef" style={{ }} />
                    <img ref={eyeRightRef} src={imageLogo} alt="MouseOverRef" style={{ }} />
                </div>
                <h2 className={style.title}>About me...</h2>
                 <p className={style.text}>Hello! My name is Pablo, and I am  passionate about technology and currently studying JavaScript, React and Express. 
                 I am 36 years old and currently looking to change careers into the tech industry. 
                 I reside in Mexico and I am bilingual, fluent in both English and Spanish.

                I am dedicated to expanding my knowledge and skills in JavaScript and React, as I believe they are essential tools for building modern and interactive web applications. <br>

                </br><p></p>I am constantly seeking new challenges and opportunities to grow as a developer.

                With my strong determination and enthusiasm, I am confident in my ability to adapt to the ever-evolving tech landscape. I am excited to contribute to the tech industry and make a positive impact through my work. If you have any questions or need assistance, feel free to reach out to me. I am always eager to collaborate and help others in their learning journey.

                Happy coding!</p>

         
            </main>
        </>
    )
}

export default About