import React, { useEffect, useRef } from 'react';

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function StarBackground() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars() {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 5000);
      starsRef.current = Array.from({ length: count }, () => ({
        x: randomBetween(0, canvas.width),
        y: randomBetween(0, canvas.height),
        r: randomBetween(0.3, 2.5),
        alpha: randomBetween(0.2, 1),
        speed: randomBetween(0.002, 0.008),
        phase: randomBetween(0, Math.PI * 2),
        color: Math.random() > 0.85 ? '#d4af37' : Math.random() > 0.7 ? '#a78bfa' : '#f0e6d3',
      }));
    }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        const alpha = star.alpha * (0.5 + 0.5 * Math.sin(time * star.speed + star.phase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    createStars();
    animRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      createStars();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
