import { useEffect, useMemo, useRef } from 'react';
import createGlobe from 'cobe';

type Rgb = [number, number, number];
type LatLng = [number, number];

type Marker = {
	location: LatLng;
	size: number;
	color?: Rgb;
};

type Arc = {
	from: LatLng;
	to: LatLng;
	color?: Rgb;
};

export default function CobeGlobe() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const markers = useMemo<Marker[]>(
		() => [
			// Lagos, Nigeria
			{ location: [6.5244, 3.3792], size: 0.08, color: [0.95, 0.35, 0.35] },
		],
		[],
	);

	const arcs = useMemo<Arc[]>(
		() => [],
		[],
	);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		let phi = 0;
		const devicePixelRatio = Math.min(2, window.devicePixelRatio || 1);

		const getSize = () => Math.max(1, Math.floor(canvas.getBoundingClientRect().width));
		let size = getSize();

		const globe = createGlobe(canvas, {
			devicePixelRatio,
			width: size,
			height: size,
			phi: 0,
			theta: 0,
			dark: 0,
			diffuse: 1.2,
			scale: 1,
			mapSamples: 16000,
			mapBrightness: 9,
			baseColor: [0.82, 0.82, 0.82],
			markerColor: [0.95, 0.35, 0.35],
			glowColor: [0.9, 0.9, 0.9],
			offset: [0, 0],
			markers,
			arcs,
			arcColor: [0.95, 0.35, 0.35],
			arcWidth: 0.5,
			arcHeight: 0.3,
			markerElevation: 0.02,
		});

		canvas.style.opacity = '1';

		let raf = 0;
		const tick = () => {
			phi += 0.01;
			globe.update({ phi, width: size, height: size });
			raf = window.requestAnimationFrame(tick);
		};
		raf = window.requestAnimationFrame(tick);

		const ro = new ResizeObserver(() => {
			size = getSize();
		});
		ro.observe(canvas);

		return () => {
			window.cancelAnimationFrame(raf);
			ro.disconnect();
			globe.destroy();
		};
	}, [arcs, markers]);

	return (
		<div className='w-full flex justify-center items-center'>
			<canvas
				ref={canvasRef}
				className='block mx-auto w-[240px] h-[240px] md:w-[320px] md:h-[320px] select-none'
				style={{ maxWidth: '100%', aspectRatio: '1 / 1', opacity: 0, transition: 'opacity 400ms ease' }}
				aria-label='Rotating globe'
			/>
		</div>
	);
}

