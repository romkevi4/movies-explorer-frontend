import React, { useState, useEffect } from 'react';

export default function useCurrentWidthScreen() {
    const [ width, setWidth ] = useState(window.innerWidth);

    useEffect(() => {
        let timeoutId = null;

        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, []);

    return width;
}