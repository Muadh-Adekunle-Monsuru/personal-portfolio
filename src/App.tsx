import './App.css';
import { ArrowDownIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import Carousel from './Carousel';
function App() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const handleClicks = (id: string) => {
		scrollToSection(id);
	};
	const carouselData = [
		{
			title: 'Employee Management Dashboard',
			img: '/mockups/p1-laptop.png.webp',
			img2: '/mockups/p1-phone.png.webp',
			description: 'An employee management dashboard for Appollonia Dentals',
			stack: [
				'NextJs',
				'MongoDB',
				'Vercel',
				'Tailwind',
				'Appwrite',
				'Framer',
				'Typescript',
			],
			links: {
				github: 'https://github.com/Muadh-Adekunle-Monsuru/empolyee-management',
				vercel: 'https://empolyee-management.vercel.app/',
			},
		},
		{
			title: 'Cinema Seat Reservation',
			img: '/mockups/p2-laptop.png.webp',
			img2: '/mockups/p2-phone.png.webp',
			description: 'Online seat reservation for The Cinema',
			stack: [
				'Vite',
				'React',
				'MongoDB',
				'Vercel',
				'Tailwind',
				'EmailJS',
				'Typescript',
			],
			links: {
				github: 'https://github.com/Muadh-Adekunle-Monsuru/reservations',
				vercel: 'https://reservations-two.vercel.app/',
			},
		},
		{
			title: 'Weather App',
			img: '/mockups/p3-laptop.png.webp',
			img2: '/mockups/p3-mobile.png.webp',
			description: 'Weather Forecast Checker for major European cities',
			stack: [
				'Vite',
				'React',
				'OpenWeaterMap',
				'Vercel',
				'Tailwind',
				'Typescript',
			],
			links: {
				github: 'https://github.com/Muadh-Adekunle-Monsuru/weather',
				vercel: 'https://weather-beryl-mu.vercel.app/',
			},
		},
		{
			title: 'Crypt.Me',
			img: '/mockups/p4-laptop.png.webp',
			img2: '/mockups/p4-mobile.png.webp',
			description: 'Crypto app landing page.',
			stack: ['Vite', 'React', 'Vercel', 'Tailwind'],
			links: {
				github: 'https://github.com/Muadh-Adekunle-Monsuru/crypt.me',
				vercel: 'https://crypt-me.vercel.app/',
			},
		},
		{
			title: 'Where in the world?',
			img: '/mockups/p5-laptop.png.webp',
			img2: '/mockups/p5-mobile.png.webp',
			description: 'Mini encyclopedia for every country.',
			stack: ['Vite', 'React', 'Vercel', 'Tailwind', 'Supabase'],
			links: {
				github: 'https://github.com/Muadh-Adekunle-Monsuru/countries',
				vercel: 'https://countries-kjoa.vercel.app/',
			},
		},
		{
			title: 'Hub QRCode Checker',
			img: '/mockups/p6-laptop.png.webp',
			img2: '/mockups/p6-mobile.png.webp',
			description:
				'Prototype dashboard to check students details using QR Code attached to the ID.',
			stack: ['Vite', 'React', 'Vercel', 'Tailwind', 'Supabase'],
			links: {
				github: 'https://github.com/Muadh-Adekunle-Monsuru/qrcode',
				vercel: 'https://qrcode-steel.vercel.app/',
			},
		},
		{
			title: 'Former Portfolio Page',
			img: '/mockups/p7-laptop.png.webp',
			img2: '/mockups/p7-mobile.png.webp',
			description:
				'My former portfolio page which showcases older web projects.',
			stack: ['Hugo', 'Netlify', 'Bootstrap'],
			links: {
				github: 'https://github.com/Muadh-Adekunle-Monsuru/',
				vercel: 'https://muadhportfolio.netlify.app/',
			},
		},
		{
			title: 'My Landing Page',
			img: '/mockups/p8-laptop.png.webp',
			img2: '/mockups/p8-mobile.png.webp',
			description: 'My landing page.',
			stack: ['Carrd'],
			links: {
				github: 'https://github.com/Muadh-Adekunle-Monsuru/',
				vercel: 'https://muadhmonsur.carrd.co/',
			},
		},
		{
			title: 'LingoQL',
			img: '/mockups/p9-laptop.png.webp',
			img2: '/mockups/p9-mobile.png.webp',
			description: 'Revolutionize your query experience.',
			stack: ['Vite', 'React', 'Appwrite'],
			links: {
				github: 'https://github.com/Klusterthon-Group-105/lingoQL-frontend',
				vercel: 'https://lingoql.onrender.com/',
			},
		},
	];
	return (
		<main className='font-inter text-[#404040] '>
			<div className='lg:h-screen flex items-center justify-center'>
				<div className='lg:px-56 p-11  mx-auto w-auto'>
					<motion.h1
						className='text-4xl  font-semibold mt-10'
						initial={{ y: 10, opacity: 0 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ type: 'tween', delay: 0.1, duration: 1 }}
					>
						Hi, I'm Muadh Monsur
					</motion.h1>
					<motion.p
						className=' py-6 font-light leading-loose'
						initial={{ y: 10, opacity: 0 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ type: 'tween', delay: 0.05, duration: 1 }}
					>
						I am a third-year university student and full-stack developer
						specializing in web and mobile development. Proficient in React
						Native, Tailwind CSS, and TypeScript, with a focus on utilizing
						Supabase and MongoDB for database solutions.
					</motion.p>
					<motion.a
						className='flex lg:w-56 p-2 px-5 font-semibold items-center bg-white my-7 rounded-lg py-4 gap-3 shadow-sm justify-center cursor-pointer select-none'
						initial={{ y: 10, opacity: 0 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ type: 'spring' }}
						whileHover={{ scale: 1.1 }}
						onClick={() => {
							handleClicks('projects');
						}}
					>
						Recent projects
						<ArrowDownIcon className='w-5' />
					</motion.a>
				</div>
			</div>
			<div className='h-screen lg:p-10 p-3 py-10 lg:px-36' id='projects'>
				<div
					className='container border-2 rounded-3xl w-full h-full shadow-lg'
					id='main'
				>
					<Carousel data={carouselData} />
				</div>
			</div>
		</main>
	);
}

export default App;
