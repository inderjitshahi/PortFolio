// components/Canvas.js

import { ClassNames } from '@emotion/react';
import { useRef, useEffect } from 'react';

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = innerWidth
        canvas.height = 300
        const n = canvas.width;

        // Draw a wave-like shape at the bottom
        context.beginPath();
        context.moveTo(0,150);

        // Bezier curve to create a wave
        context.quadraticCurveTo(200, 300, n/ 3+20, canvas.height);
        context.lineTo(0, canvas.height);
        context.fillStyle = 'black';
        context.fill();
        context.closePath();



        // // Draw a wave-like shape at the bottom
        context.beginPath();
        context.moveTo(canvas.width / 3, canvas.height);

        // // Bezier curve to create a wave
        // context.quadraticCurveTo(n*0.5,300, n*.5, 0);
        // context.quadraticCurveTo(n*0.8,200, n*.5, 0);
        context.fillStyle = 'black';
        context.fill();
        context.closePath();

        return () => {
            // Cleanup code (if needed)
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
        // style={{ border: '1px solid #ccc' }}
        ></canvas>
    );
};

export default Canvas;
