import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LinkdinIcon from '../assets/LinkdinIcon';
import Githubicon from '../assets/githubicon';

export default function Introduction() {
	return (
		<div className='flex flex-col gap-6 '>
			<div className='flex justify-end sticky top-0 z-20'>
				<Link
					to='/projects'
					className='mt-2 rounded-md p-2 font-medium  backdrop-blur-sm'
				>
					Projects
					<ArrowRightIcon className='w-5 inline-block ml-2 ' />
				</Link>
			</div>

			<div className='flex items-center gap-4'>
				<div className='w-20 h-20 rounded-full overflow-hidden border-[10px]'>
					<img
						src='/mockups/profile.webp'
						alt='my-profil-picture'
						className=' outline-[20px] outline-white'
					/>
				</div>
				<div className='flex gap-4'>
					<a href='https://www.linkedin.com/in/muadh-monsuru/' target='_blank'>
						<div
							className={`text-sm  border rounded-lg p-2  select-none hover:scale-105 hover:shadow-sm bg-neutral-100`}
						>
							<div className='w-5'>
								<LinkdinIcon />
							</div>
						</div>
					</a>
					<a href='https://github.com/Muadh-Adekunle-Monsuru' target='_blank'>
						<div
							className={`text-sm  border rounded-lg p-2  select-none hover:scale-105 hover:shadow-sm bg-neutral-100 `}
						>
							<div className='w-5'>
								<Githubicon />
							</div>
						</div>
					</a>
				</div>
			</div>
			<motion.h1
				className='text-2xl  font-semibold geist-700'
				initial={{ y: 10, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ type: 'tween', delay: 0.1, duration: 1 }}
			>
				Hi, I'm Muadh Adekunle Monsuru
			</motion.h1>

			<motion.p
				className=' font-light text-justify max-w-2xl manrope-200'
				initial={{ y: 10, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ type: 'tween', delay: 0.05, duration: 1 }}
			>
				I am a first-class Computer Science graduate and a driven full-stack
				developer with a strong foundation in web and mobile development. My
				practical experience extends to cloud computing and IT infrastructure
				management. I'm passionate about innovation and I'm eager to use my
				technical expertise to contribute to impactful projects.
			</motion.p>
			<img
				src='http://ghchart.rshah.org/muadh-adekunle-monsuru'
				alt=' Github Contribution chart'
				className='mx-auto  grayscale'
			/>
			{/* <motion.a
				className='flex lg:w-56 p-2 px-5 font-semibold items-center bg-white rounded-lg py-4 gap-3 shadow-sm justify-center cursor-pointer select-none'
				initial={{ y: 10, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ type: 'spring' }}
				whileHover={{ scale: 1.1 }}
				onClick={() => {}}
			>
				Recent projects
				<ArrowDownIcon className='w-5' />
			</motion.a> */}
		</div>
	);
}
