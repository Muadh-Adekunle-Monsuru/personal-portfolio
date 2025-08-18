import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { ProjectData } from './ProjectData';

export default function ProjectsPage() {
	return (
		<div className=' text-[#404040] '>
			<div className='lg:min-h-screen p-5 md:p-11 w-auto  max-w-4xl mx-auto'>
				<div
					className='flex items-center gap-2 mb-6 cursor-pointer backdrop-blur-sm'
					onClick={() => window.history.back()}
				>
					<ChevronLeftIcon className='h-6 w-6 text-gray-500 cursor-pointer' />
					<p>Home</p>
				</div>
				<h1 className='text-3xl font-bold mb-1 geist-700'>Projects</h1>
				<p className='mb-6 manrope-300'>
					Here are some of the projects I've worked on:
				</p>
				{ProjectData.map((project) => (
					<div
						key={project.title}
						className='flex flex-col  md:flex-row gap-5 group my-20 cursor-pointer backdrop-blur-sm'
						onClick={() => window.open(`${project.links.vercel}`, '_blank')}
					>
						<div className='w-full bg-neutral-200/50 p-5 rounded-md group-hover:drop-shadow-xl group-hover:border border-black'>
							<img
								src={project.img}
								className='w-full object-contain ease-in-out transition duration-500 '
							/>
						</div>
						<div className='w-full'>
							<p className='geist-500 text-2xl group-hover:underline'>
								{project.title}
							</p>
							<p className='manrope-300 mt-2'>{project.description}</p>
							<div className='manrope-200 mt-3'>{project.stack.join(', ')}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
