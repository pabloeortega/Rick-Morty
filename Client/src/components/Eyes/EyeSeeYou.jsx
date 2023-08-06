import React, {useRef } from 'react';
import imageLogo from '../../assets/logoNav.png';
import eyes from '../../assets/eye.png';
import { useEyeMovement } from './useEyeMovement';

const EyeSeeYou = () => {
    const eyeLeftRef = useRef(null);
    const eyeRightRef = useRef(null);
    const anchorRef = useRef(null);

    useEyeMovement(eyeLeftRef, eyeRightRef, anchorRef, 'rotate', 64, 56, 330);


    return (
        <>
            <main>
                <img id='anchor' ref={anchorRef} src={imageLogo} alt="logo rick and morty" style={{  width: '250px', height: '250px', position: 'fixed', top: '0px', left: '0px' }} />
                <div id="eyes">
                    <img ref={eyeLeftRef} src={eyes} alt="left eye" style={{ position: 'fixed', width: '5px', height: '5px', top: '90px', left: '106px' }} />
                    <img ref={eyeRightRef} src={eyes} alt="right eye" style={{ position: 'fixed', width: '5px', height: '5px', top: '90px', left: '130px' }} />
                </div>
            </main>
        </>
    )
}

export default EyeSeeYou;