"use client";
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

		const particleCount = Math.max(Math.floor((width * height) / 50000), 25);
		const particles: { x: number; y: number; vx: number; vy: number; r: number; hue: number; alpha: number }[] = [];

		function rand(min: number, max: number) {
			return Math.random() * (max - min) + min;
		}

		for (let i = 0; i < particleCount; i++) {
			particles.push({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: rand(-0.2, 0.2),
				vy: rand(-0.15, 0.15),
				r: rand(0.6, 3.5),
				hue: rand(240, 280),
				alpha: rand(0.08, 0.28),
			});
		}

		let raf = 0;

		function resize() {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		}

		window.addEventListener('resize', resize);

		function draw() {
			if (!ctx) return;
			ctx.clearRect(0, 0, width, height);

			// soft glow overlay
			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;

				if (p.x < -50) p.x = width + 50;
				if (p.x > width + 50) p.x = -50;
				if (p.y < -50) p.y = height + 50;
				if (p.y > height + 50) p.y = -50;

				const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 12);
				grd.addColorStop(0, `hsla(${p.hue},80%,70%,${p.alpha})`);
				grd.addColorStop(0.4, `hsla(${p.hue},70%,55%,${p.alpha * 0.45})`);
				grd.addColorStop(1, `rgba(0,0,0,0)`);

				ctx.fillStyle = grd as unknown as string;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
				ctx.fill();
			}

			raf = requestAnimationFrame(draw);
		}

		raf = requestAnimationFrame(draw);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', resize);
		};
	}, []);

	return (
		<div className="particles-root">
			<canvas ref={ref} className="w-full h-full" />
		</div>
	);
}

