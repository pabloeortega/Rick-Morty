import { useEffect } from 'react';

export const useEyeMovement = (eyeLeftRef, eyeRightRef, anchorRef, transform, aX, aY, rDeg, mortyRef) => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (anchorRef.current||mortyRef.current) {

            const rekt = anchorRef.current.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / aX;
            const anchorY = rekt.top + rekt.height / aY;

            [eyeLeftRef.current, eyeRightRef.current].forEach((eye) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
                eye.style.transform = `${transform}(${rDeg + angleDeg}deg)`;
                eye.style.transformOrigin = `${anchorX}px ${anchorY}px`;
                if(rDeg=== 200){
                    anchorRef.current.style.filter = `hue-rotate(${angleDeg}deg)`                
                    mortyRef.current.style.filter = `hue-rotate(${angleDeg}deg)`                
                }
            });
        }
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
    }, [eyeLeftRef, eyeRightRef, anchorRef, transform, aX, aY, rDeg]);
}