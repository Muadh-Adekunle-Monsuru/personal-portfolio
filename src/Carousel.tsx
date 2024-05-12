import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	ArrowLeftCircleIcon,
	ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

import Githubicon from './assets/githubicon';
import Globe from './assets/globe';
const slideVariants = {
	hiddenRight: {
		x: '100%',
		opacity: 0,
		scale: 0.8,
		transition: {
			duration: 1.5,
			type: 'tween',
		},
	},
	hiddenLeft: {
		x: '-100%',
		opacity: 0,
		scale: 0.8,
		transition: {
			duration: 1.5,
			type: 'tween',
		},
	},
	visible: {
		x: '0',
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.8,
			type: 'tween',
		},
	},
	exit: {
		opacity: 0,
		y: '-4%',
		scale: 0.9,
		transition: {
			duration: 0.2,
			type: 'tween',
		},
	},
};
const slidersVariants = {
	hover: {
		scale: 1.2,
	},
};

type input = {
	data: any;
};
export default function Carousel({ data }: input) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState('right');
	const handleNext = () => {
		setDirection('right');
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === data.length ? 0 : prevIndex + 1
		);
	};

	const handlePrevious = () => {
		setDirection('left');

		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
		);
	};
	function generateGradientColor(index: number, totalRows: number) {
		const hue = (160 / totalRows) * index;
		return `hsl(${hue}deg 70% 95%)`;
	}
	return (
		<div className='h-full w-full lg:p-2 relative'>
			<div className='rounded-xl h-full  overflow-hidden   flex flex-col'>
				<AnimatePresence mode='wait'>
					<motion.div
						className='h-full overflow-hidden flex flex-col'
						key={currentIndex}
						initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
						animate='visible'
						exit={'exit'}
						variants={slideVariants}
						whileInView='visible'
					>
						<div className='h-3/4 w-full object-contain flex items-center justify-center'>
							<img
								src={data[currentIndex].img}
								className='h-72 object-contain hover:scale-105 ease-in-out transition duration-500 drop-shadow-lg hover:drop-shadow-2xl'
							/>
							<img
								src={data[currentIndex].img2}
								className='-ml-[100px] h-72 object-contain hover:scale-105 ease-in-out transition duration-500 z-20 drop-shadow-lg hover:drop-shadow-2xl'
							/>
						</div>
						<div className='grid lg:flex justify-between backdrop-blur-sm h-1/4 p-3'>
							<div>
								<h1 className='font-semibold lg:text-3xl '>
									{data[currentIndex].title}
								</h1>
								<p className='text-xs lg:text-sm font-light'>
									{data[currentIndex].description}
								</p>
								<div className='flex gap-3 pt-2'>
									{data[currentIndex].stack.map(
										(val: String, index: number) => {
											const color = generateGradientColor(index, 5);
											console.log(color);
											const google = 'https://www.google.com/search?q=';
											return (
												<a href={`${google}${val}`} target='_blank'>
													<p
														className={`text-xs  border rounded-3xl p-2  select-none hover:scale-105 hover:shadow-sm `}
														style={{ backgroundColor: color }}
														key={index}
													>
														{val}
													</p>
												</a>
											);
										}
									)}
								</div>
							</div>
							<div className='flex gap-3'>
								<a href={data[currentIndex].links.github} target='_blank'>
									<Githubicon />
								</a>
								<a href={data[currentIndex].links.vercel} target='_blank'>
									<Globe />
								</a>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
				<div className='flex gap-5 justify-end absolute right-5 bottom-6'>
					<motion.div
						variants={slidersVariants}
						whileHover='hover'
						className='left'
						onClick={handlePrevious}
					>
						<ArrowLeftCircleIcon className='w-10' />
					</motion.div>
					<motion.div
						variants={slidersVariants}
						whileHover='hover'
						className='right'
						onClick={handleNext}
					>
						<ArrowRightCircleIcon className='w-10' />
					</motion.div>
				</div>
			</div>
		</div>
	);
}
