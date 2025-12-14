// components/visuals/Particles.tsx
'use client';
import { useEffect, useRef } from 'react';

export default function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic particle count based on screen size
    const particleCount = Math.max(Math.floor((width * height) / 20000), 40);
    
    // Explicitly type the particle array
    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
      targetAlpha: number;
    };
    
    const particles: Particle[] = [];

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: rand(-0.2, 0.2), // Slower, more cinematic speed
        vy: rand(-0.2, 0.2),
        r: rand(1, 2.5),
        alpha: rand(0.1, 0.3),
        targetAlpha: rand(0.1, 0.3),
      });
    }

    let raf = 0;

    function resize() {
      // FIX: We check canvas again here to satisfy TypeScript
      if (!canvas) return;
      
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);

    function draw() {
      if (!ctx || !canvas) return; // Extra safety check
      
      // Clear with a slight fade trail for cinematic feel
      ctx.clearRect(0, 0, width, height);
      
      ctx.fillStyle = "rgba(124, 92, 255, 0.5)"; // Violet tint

      for (const p of particles) {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <canvas ref={ref} className="w-full h-full opacity-60" />
    </div>
  );
}