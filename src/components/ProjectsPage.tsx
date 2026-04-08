import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { ProjectData } from './ProjectData';
import BentoCard from './BentoCard';
import Githubicon from '../assets/githubicon';
import Globe from '../assets/globe';

export default function ProjectsPage() {
	return (
		<div className='text-[#404040]'>
			<div className='lg:min-h-screen p-5 md:p-11 w-auto max-w-6xl mx-auto'>
				<div
					className='flex items-center gap-2 mb-6 cursor-pointer backdrop-blur-sm'
					onClick={() => window.history.back()}
				>
					<ChevronLeftIcon className='h-6 w-6 text-gray-500 cursor-pointer' />
					<p>Home</p>
				</div>

				<BentoCard className='mb-6'>
					<h1 className='text-2xl md:text-3xl font-semibold geist-700 text-neutral-900'>
						Projects
					</h1>
					<p className='mt-2 text-sm md:text-base text-neutral-700 manrope-300'>
						A curated selection of things I’ve built. Click a card to view the
						live demo.
					</p>
				</BentoCard>

				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
					{ProjectData.map((project) => (
						<button
							key={project.title}
							type='button'
							onClick={() => window.open(project.links.vercel, '_blank')}
							className='text-left'
						>
							<BentoCard className='h-full hover:shadow-md transition'>
								<div className='flex items-start justify-between gap-4'>
									<div className='min-w-0'>
										<p className='text-base font-semibold text-neutral-900 truncate'>
											{project.title}
										</p>
										<p className='mt-1 text-sm text-neutral-700 manrope-300 line-clamp-3'>
											{project.description}
										</p>
									</div>
									<div className='flex gap-2 shrink-0'>
										<a
											href={project.links.github}
											target='_blank'
											rel='noreferrer'
											className='rounded-xl border border-neutral-200 bg-white/80 p-2 hover:bg-white transition'
											aria-label='GitHub'
											onClick={(e) => e.stopPropagation()}
										>
											<div className='w-5 text-neutral-800'>
												<Githubicon />
											</div>
										</a>
										<a
											href={project.links.vercel}
											target='_blank'
											rel='noreferrer'
											className='rounded-xl border border-neutral-200 bg-white/80 p-2 hover:bg-white transition'
											aria-label='Live demo'
											onClick={(e) => e.stopPropagation()}
										>
											<div className='w-5 text-neutral-800'>
												<Globe />
											</div>
										</a>
									</div>
								</div>

								<div className='mt-4 rounded-xl border border-neutral-200 bg-neutral-50/60 p-3'>
									<img
										src={project.img}
										alt={project.title}
										className='w-full h-44 object-contain'
										loading='lazy'
									/>
								</div>

								<div className='mt-4 flex flex-wrap gap-2'>
									{project.stack.slice(0, 6).map((s) => (
										<span
											key={`${project.title}-${s}`}
											className='rounded-full border border-neutral-200 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-neutral-800'
										>
											{s}
										</span>
									))}
								</div>
							</BentoCard>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
