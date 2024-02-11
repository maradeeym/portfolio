"use client"
import React, { useEffect, useRef } from 'react';

const DotsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (!context) return;

      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

      canvas.width = vw;
      canvas.height = vh;

      const r = 2, cw = 30, ch = 30;
      for (let x = 20; x < vw; x += cw) {
        for (let y = 20; y < vh; y += ch) {
          context.fillStyle = '#fff';
          context.fillRect(x - r / 2, y - r / 2, r, r);
        }
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />;
};

export default DotsBackground;



