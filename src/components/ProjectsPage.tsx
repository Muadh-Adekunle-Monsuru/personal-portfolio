import { ProjectData } from './ProjectData';
import SiteHeader from './SiteHeader';

export default function ProjectsPage() {
	return (
		<div className='min-h-screen w-full bg-white text-[#222] dark:bg-[#0d0d10] dark:text-[#e8e8e8]'>
			<SiteHeader maxWidthClass='max-w-4xl' />
			<main className='w-full'>
				<article className='mx-auto max-w-4xl px-5 pb-28 pt-12 font-geist'>
					<h1 className='text-3xl font-semibold tracking-tight'>Projects</h1>
					<p className='mt-3 max-w-2xl text-[15.5px] leading-[1.75] text-neutral-600 dark:text-neutral-400'>
						A selection of things I&apos;ve built across web, mobile, and product
						work. {ProjectData.length} projects.
					</p>

					<ul className='mt-12 divide-y divide-neutral-200 dark:divide-neutral-800'>
						{ProjectData.map((project) => {
							const liveUrl = project.links.vercel;
							const githubUrl = project.links.github;

							return (
								<li key={project.title} className='py-10 first:pt-0'>
									<div className='grid gap-6 sm:grid-cols-[220px_1fr] sm:gap-8'>
										<a
											href={liveUrl || githubUrl}
											target='_blank'
											rel='noreferrer'
											className='block overflow-hidden bg-neutral-100 dark:bg-neutral-900'
										>
											<img
												src={project.img}
												alt={project.title}
												className='aspect-[16/10] h-full w-full object-cover object-top transition-opacity hover:opacity-90'
												loading='lazy'
											/>
										</a>

										<div className='flex min-w-0 flex-col'>
											<div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2'>
												<h2 className='text-xl font-semibold tracking-tight'>
													{project.title}
												</h2>
												<div className='flex items-center gap-3 text-sm'>
													{githubUrl && (
														<a
															href={githubUrl}
															target='_blank'
															rel='noreferrer'
															className='link-btn'
														>
															GitHub
														</a>
													)}
													{liveUrl && (
														<a
															href={liveUrl}
															target='_blank'
															rel='noreferrer'
															className='link-btn'
														>
															Live
														</a>
													)}
												</div>
											</div>

											<p className='mt-3 text-[15.5px] leading-[1.75] text-neutral-700 dark:text-neutral-300'>
												{project.description}
											</p>

											<p className='mt-4 text-sm text-neutral-500 dark:text-neutral-500'>
												{project.stack.join(' · ')}
											</p>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</article>
			</main>
		</div>
	);
}
