import BentoCard from '../BentoCard';

const experiences = [
	{
		title: 'Full-Stack Developer Intern',
		company: 'Byaxiom Solutions',
		location: 'Lagos State, Nigeria',
		duration: 'Jun 2024 – Sep 2024',
		description:
			'Built and shipped full-stack web solutions based on client requirements.',
	},
	{
		title: 'Web Development Intern',
		company: 'Dervac Technologies',
		location: 'Lagos State, Nigeria',
		duration: 'Mar 2024 – Jun 2024',
		description:
			'Taught JavaScript and web fundamentals; mentored students through projects.',
	},
	{
		title: 'Industrial Trainee',
		company: 'INTECU (OAU)',
		location: 'Osun State, Nigeria',
		duration: 'Jul 2023 – Sep 2023',
		description:
			'Hands-on networking, IT infrastructure, and system troubleshooting.',
	},
] as const;

export default function WorkExperienceBento({ className = '' }: { className?: string }) {
	return (
		<BentoCard title='Work' className={className}>
			<ul className='space-y-4'>
				{experiences.slice(0, 3).map((e) => (
					<li key={`${e.title}-${e.company}`} className='flex gap-4'>
						<div className='mt-1 h-2 w-2 rounded-full bg-neutral-300 shrink-0' />
						<div className='min-w-0'>
							<div className='flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1'>
								<p className='text-sm font-semibold text-neutral-900 truncate'>
									{e.title}
								</p>
								<p className='text-xs text-neutral-500'>{e.duration}</p>
							</div>
							<p className='text-xs text-neutral-600'>
								{e.company} · {e.location}
							</p>
							<p className='mt-1 text-sm text-neutral-700 manrope-300'>
								{e.description}
							</p>
						</div>
					</li>
				))}
			</ul>
		</BentoCard>
	);
}

