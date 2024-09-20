import 'swiper/css/bundle';
import 'swiper/css/scrollbar';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Githubicon from './assets/githubicon';
import { ProjectData } from './ProjectData';

export default function SwiperComponent() {
	function generateGradientColor(index: number, totalRows: number) {
		const hue = (160 / totalRows) * index;
		return `hsl(${hue}deg 70% 95%)`;
	}
	return (
		<div className='w-full h-full '>
			<style>
				{`
                .mySwiper .swiper-button-next,
                .mySwiper .swiper-button-prev {
                    width: 50px; /* Adjust width */
                    height: 50px; /* Adjust height */
                    font-size: 10px; /* Adjust font size for icons or text */
                    
                    color: #4b5563 ; /* Adjust color of the icon */

                }
                .mySwiper .swiper-button-next {
                    right: 10px; /* Adjust right position */
                    top: 50%; /* Center vertically */
                    transform: translateY(-50%); /* Adjust for centering */
                }

                .mySwiper .swiper-button-prev {
                    left: 10px; /* Adjust left position */
                    top: 50%; /* Center vertically */
                      transform: translateY(-50%); /* Adjust for centering */
                }

                .mySwiper .swiper-pagination {
                    bottom: -5px; /* Adjust bottom position */
                    left: 50%; /* Center horizontally */
                    transform: translateX(-50%); /* Adjust for centering */
                    z-index:40;
                    position:absolute;
                }

                /* Change pagination bullet color */
                .mySwiper .swiper-pagination-bullet {
                    background-color: #e5e7eb; /* Adjust color */
                    opacity: 1; /* Ensure bullets are fully opaque */
                }

                /* Change active pagination bullet color */
                .mySwiper .swiper-pagination-bullet-active {
                    background-color: #000; /* Adjust active color */
                }

                `}
			</style>
			<Swiper
				modules={[EffectCards]}
				spaceBetween={0}
				slidesPerView={'auto'}
				className='h-full mySwiper cursor-grab'
				effect='cards'
				cardsEffect={{ slideShadows: false, perSlideOffset: 5 }}
			>
				{ProjectData.map((project) => (
					<SwiperSlide key={project.title} className='rounded-3xl shadow-2xl'>
						<div
							className=' h-full w-full flex flex-col items-between justify-between  text-xl bg-neutral-200 rounded-3xl shadow-2xl'
							id='main'
						>
							<div className='h-1/2 md:h-3/4 w-full  object-contain flex items-center justify-center px-4'>
								<img
									src={project.img}
									className='h-60  object-contain ease-in-out transition duration-500 drop-shadow-lg hover:drop-shadow-2xl'
								/>
								<img
									src={project.img2}
									className='-ml-[100px] h-40 md:h-60 object-contain  ease-in-out transition duration-500 z-20 drop-shadow-lg hover:drop-shadow-2xl'
								/>
							</div>
							<div className='flex flex-col h-1/2 md:h-1/4 p-3 px-4'>
								<div className='w-full flex flex-col md:flex-row gap-3 md:items-center justify-between'>
									<div>
										<h1 className='font-semibold text-3xl '>{project.title}</h1>
										<p className='text-sm font-light md:line-clamp-2'>
											{project.description}
										</p>
									</div>
									<div className='flex gap-3'>
										<a href={project.links.github} target='_blank'>
											<div className='w-7'>
												<Githubicon />
											</div>
										</a>
										<a
											href={project.links.vercel}
											target='_blank'
											className='px-8 bg-black text-white text-xs font-medium p-3 rounded-lg h-9'
										>
											{/* <Globe /> */}Visit
										</a>
									</div>
								</div>
								<div className='flex gap-2 md:pt-1 pt-3 flex-wrap w-full'>
									{project.stack.map((val: String, index: number) => {
										const color = generateGradientColor(index, 5);
										console.log(color);
										const google = 'https://www.google.com/search?q=';
										return (
											<a href={`${google}${val}`} target='_blank' key={index}>
												<p
													className={`text-sm border rounded-3xl px-1  select-none hover:scale-105 hover:shadow-sm `}
													style={{ backgroundColor: color }}
												>
													{val}
												</p>
											</a>
										);
									})}
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
