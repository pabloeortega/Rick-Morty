import React, { useEffect, useRef } from 'react';
import imageLogo from '../../assets/logoNav.png';
import eyes from '../../assets/eye.png';

const EyeSeeYou = () => {
    const eyeLeftRef = useRef(null);
    const eyeRightRef = useRef(null);
    const anchorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rekt = anchorRef.current.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / 59;
            const anchorY = rekt.top + rekt.height / 50;

            [eyeLeftRef.current, eyeRightRef.current].forEach((eye) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
                eye.style.transform = `rotate(${330+ angleDeg}deg)`;
                eye.style.transformOrigin = `${anchorX}px ${anchorY}px`; // Add this line
            });
        };

        function angle(cx, cy, ex, ey) {
            const dy = ey - cy;
            const dx = ex - cx;
            const rad = Math.atan2(dy, dx);
            const deg = rad * 180 / Math.PI;
            return deg;
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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