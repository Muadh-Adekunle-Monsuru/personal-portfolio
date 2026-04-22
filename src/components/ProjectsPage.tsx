import { ProjectData } from './ProjectData';
import Githubicon from '../assets/githubicon';
import Globe from '../assets/globe';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function ProjectsPage() {
	const navigate = useNavigate();

	return (
		<div className='relative min-h-screen bg-black font-mono text-white overflow-hidden select-none'>
			{/* 3D Canvas Background */}
			<div className='fixed inset-0 z-0 pointer-events-none'>
				<Canvas camera={{ position: [0, 0, 1] }}>
					<Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1.5} />
				</Canvas>
			</div>

			{/* Foreground Content */}
			<div className='relative z-10 w-full min-h-screen overflow-y-auto p-6 md:p-12'>
				<div className='max-w-7xl mx-auto'>
					{/* Header */}
					<div className='mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-[#0ff]/30 pb-6 gap-6'>
						<div>
							<button 
								onClick={() => navigate('/')}
								className='flex items-center gap-2 text-[#0ff] hover:text-white transition-colors group mb-6 tracking-widest text-sm'
							>
								<span className='group-hover:-translate-x-2 transition-transform duration-300'>[ &lt; RETURN TO MAIN_STREAM ]</span>
							</button>
							<h1 className='text-3xl md:text-5xl font-bold tracking-widest text-[#0ff] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] uppercase'>
								PROJECT_ARCHIVE
							</h1>
							<p className='mt-3 text-violet-400 text-sm md:text-base tracking-widest'>
								A CURATED SELECTION OF EXECUTED DIGITAL SECTORS.
							</p>
						</div>
						<div className='text-left md:text-right text-xs md:text-sm text-gray-400 tracking-widest space-y-1'>
							<p>STATUS: <span className='text-[#0ff]'>[ONLINE]</span></p>
							<p>RECORDS: <span className='text-white'>[{ProjectData.length}]</span></p>
						</div>
					</div>

					{/* Project Grid */}
					<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
						{ProjectData.map((project, idx) => (
							<div 
								key={idx}
								className='flex flex-col group bg-black/50 backdrop-blur-md border border-[#0ff]/20 hover:border-[#0ff]/70 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:-translate-y-2 cursor-default'
							>
								{/* Image Matrix */}
								<div 
									onClick={() => window.open(project.links.vercel, '_blank')}
									className='relative w-full h-48 md:h-56 border-b border-[#0ff]/20 overflow-hidden bg-black flex justify-center items-center p-4 group-hover:bg-[#0ff]/5 cursor-pointer'
								>
									{/* Cyan overlay for aesthetic */}
									<div className='absolute inset-0 bg-[#0ff]/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500'></div>
									<img
										src={project.img}
										alt={project.title}
										className='w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500'
										loading='lazy'
									/>
									{/* Subtle inner shadow effect on hover */}
									<div className='absolute inset-0 shadow-[inset_0_0_30px_rgba(0,255,255,0.2)] opacity-0 group-hover:opacity-100 z-20 pointer-events-none transition-opacity'></div>
								</div>

								{/* Info Core */}
								<div className='p-6 flex-1 flex flex-col'>
									<div className='flex justify-between items-start gap-4 mb-4'>
										<h2 className='text-xl md:text-2xl font-bold text-white uppercase tracking-wider group-hover:text-[#0ff] transition-colors'>
											{project.title}
										</h2>
										<div className='flex gap-3 z-30'>
											<a
												href={project.links.github}
												target='_blank'
												rel='noreferrer'
												className='text-gray-400 hover:text-white transition-colors cursor-pointer'
												aria-label='GitHub Repository'
											>
												<div className='w-5 h-5'>
													<Githubicon />
												</div>
											</a>
											<a
												href={project.links.vercel}
												target='_blank'
												rel='noreferrer'
												className='text-gray-400 hover:text-white transition-colors cursor-pointer'
												aria-label='Live Deployment'
											>
												<div className='w-5 h-5'>
													<Globe />
												</div>
											</a>
										</div>
									</div>

									<p className='text-xs md:text-sm text-gray-400 mb-6 flex-1 leading-relaxed lowercase'>
										&gt; {project.description}
									</p>

									{/* Tech Stack */}
									<div className='mt-auto border-t border-white/10 pt-4'>
										<div className='text-[10px] text-violet-400 tracking-widest mb-3'>TECHNOLOGY_MATRIX</div>
										<div className='flex flex-wrap gap-2 text-xs'>
											{project.stack.slice(0, 6).map((s) => (
												<span
													key={`${project.title}-${s}`}
													className='border border-violet-500/30 bg-violet-500/10 text-violet-200 px-2 py-1 uppercase tracking-wider text-[10px]'
												>
													{s}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
