import './App.css';
import { ArrowDownIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import Githubicon from './assets/githubicon';
import LinkdinIcon from './assets/LinkdinIcon';
import SwiperComponent from './SwiperComponent';
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

	return (
		<main className='font-inter text-[#404040] '>
			<div className='lg:h-screen flex items-center justify-center'>
				<div className='lg:px-56 p-11  mx-auto w-auto'>
					<div className='flex items-center gap-4'>
						<div className='w-20 h-20 rounded-full overflow-hidden border-[10px]'>
							<motion.img
								initial={{ y: 10, opacity: 0 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ type: 'tween', delay: 0.1, duration: 1 }}
								whileHover={{ y: '90%' }}
								src='/mockups/profile.webp'
								alt='my-profil-picture'
								className=' outline-[20px] outline-white hover:translate-y-20 transition duration-700 ease-in-out'
							/>
						</div>
						<div className='flex gap-4'>
							<a
								href='https://www.linkedin.com/in/muadh-monsuru/'
								target='_blank'
							>
								<div
									className={`text-sm shadow-sm border-2 backdrop-blur-md rounded-3xl p-2  select-none hover:scale-105 hover:shadow-sm flex gap-3 items-center px-4 `}
								>
									<div className='w-4'>
										<LinkdinIcon />
									</div>
									<span>LinkedIn</span>
								</div>
							</a>
							<a
								href='https://github.com/Muadh-Adekunle-Monsuru'
								target='_blank'
							>
								<div
									className={`text-sm shadow-sm border-2 backdrop-blur-md rounded-3xl p-2  select-none hover:scale-105 hover:shadow-sm flex gap-3 items-center px-4 `}
								>
									<div className='w-4'>
										<Githubicon />
									</div>
									<span>Github</span>
								</div>
							</a>
						</div>
					</div>
					<div className='flex gap-3 items-center mt-5'>
						<motion.h1
							className='text-4xl  font-semibold '
							initial={{ y: 10, opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: 'tween', delay: 0.1, duration: 1 }}
						>
							Hi, I'm Muadh Monsur
						</motion.h1>
					</div>

					<motion.p
						className=' py-6 font-light leading-loose'
						initial={{ y: 10, opacity: 0 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ type: 'tween', delay: 0.05, duration: 1 }}
					>
						I am a final-year undergraduate student and full-stack developer
						specializing in web and mobile development. Proficient in React,
						React Native, Tailwind CSS, and TypeScript, with a focus on
						utilizing Supabase and MongoDB for database solutions.
					</motion.p>
					<img
						src='http://ghchart.rshah.org/muadh-adekunle-monsuru'
						alt=' Github Contribution chart'
						className='mx-auto'
					/>

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
			<div className='h-screen md:p-10 p-3 py-10 lg:px-36' id='projects'>
				<div
					className='container border-2 rounded-3xl w-full h-full shadow-lg '
					id='main'
				>
					<SwiperComponent />
				</div>
			</div>
		</main>
	);
}

export default App;
