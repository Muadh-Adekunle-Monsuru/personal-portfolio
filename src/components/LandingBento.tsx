import { Link } from 'react-router-dom';
import BentoCard from './BentoCard';
import CobeGlobe from './CobeGlobe';
import EducationBento from './bento/EducationBento';
import ToolsBento from './bento/ToolsBento';
import WorkExperienceBento from './bento/WorkExperienceBento';
import Githubicon from '../assets/githubicon';
import LinkdinIcon from '../assets/LinkdinIcon';

export default function LandingBento() {
	return (
		<div className='w-full max-w-6xl mx-auto'>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 items-stretch'>
				<BentoCard className='md:col-span-2'>
					<div className='flex items-start justify-between gap-4'>
						<div>
							<p className='text-xs font-medium text-neutral-500'>Portfolio</p>
							<h1 className='mt-2 text-2xl md:text-3xl font-semibold geist-700 text-neutral-900'>
								Muadh Adekunle Monsuru
							</h1>
							<p className='mt-2 text-sm md:text-base text-neutral-700 manrope-300 max-w-prose'>
								Full‑stack developer focused on building clean, reliable web and mobile
								experiences.
							</p>
						</div>

						<div className='flex gap-2 shrink-0'>
							<a
								href='https://www.linkedin.com/in/muadh-monsuru/'
								target='_blank'
								rel='noreferrer'
								className='rounded-xl border border-neutral-200 bg-white/80 p-2 hover:bg-white transition'
								aria-label='LinkedIn'
							>
								<div className='w-5 text-neutral-800'>
									<LinkdinIcon />
								</div>
							</a>
							<a
								href='https://github.com/Muadh-Adekunle-Monsuru'
								target='_blank'
								rel='noreferrer'
								className='rounded-xl border border-neutral-200 bg-white/80 p-2 hover:bg-white transition'
								aria-label='GitHub'
							>
								<div className='w-5 text-neutral-800'>
									<Githubicon />
								</div>
							</a>
						</div>
						
					</div>

					<div className='mt-5 flex flex-wrap items-center gap-3'>
						<Link
							to='/projects'
							className='rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition'
						>
							View projects
						</Link>
						<a
							href='https://www.linkedin.com/in/muadh-monsuru/'
							target='_blank'
							rel='noreferrer'
							className='rounded-xl border border-neutral-200 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-white transition'
						>
							Get in touch
						</a>
					</div>
					<div className='flex justify-center items-center'>
					<img
				src='http://ghchart.rshah.org/muadh-adekunle-monsuru'
				alt=' Github Contribution chart'
				className='mx-auto  grayscale pt-5'
			/>
					</div>
					
				</BentoCard>

				<BentoCard title='Location' className='flex flex-col justify-between'>
					<div className='text-sm text-neutral-700 manrope-300'>
						<p>Lagos, Nigeria</p>
					</div>
					<div className='mt-4 flex justify-center items-center'>
						<CobeGlobe />
					</div>
				</BentoCard>

				<WorkExperienceBento className='xl:col-span-2' />
				<EducationBento />
				<ToolsBento className='md:col-span-2 xl:col-span-3' />
			</div>
		</div>
	);
}

