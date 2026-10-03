/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'ui-sans-serif'],
				geist: ['Geist', 'ui-sans-serif', 'system-ui'],
			},
			colors: {
				ink: {
					DEFAULT: '#111111',
					muted: '#525252',
				},
				night: {
					DEFAULT: '#0d0d10',
					muted: '#a1a1aa',
				},
			},
		},
	},
	plugins: [],
};
