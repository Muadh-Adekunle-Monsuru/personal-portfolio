import BentoCard from '../BentoCard';

const education = [
	{
		school: 'Fountain University, Osogbo',
		location: 'Osun State, Nigeria',
		duration: '2022 – 2025',
		description: 'B.Sc. Computer Science — First-Class Honors',
	},
	{
		school: 'Baseerah International School',
		location: 'Kuala Lumpur, Malaysia',
		duration: '2014 – 2022',
		description: 'JSCE & SSCE, Cambridge IGCSE & A‑Levels',
	},
] as const;

export default function EducationBento({ className = '' }: { className?: string }) {
	return (
		<BentoCard title='Education' className={className}>
			<ul className='space-y-4'>
				{education.map((e) => (
					<li key={e.school} className='flex gap-4'>
						<div className='mt-1 h-2 w-2 rounded-full bg-neutral-300 shrink-0' />
						<div className='min-w-0'>
							<div className='flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1'>
								<p className='text-sm font-semibold text-neutral-900 truncate'>
									{e.school}
								</p>
								<p className='text-xs text-neutral-500'>{e.duration}</p>
							</div>
							<p className='text-xs text-neutral-600'>{e.location}</p>
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

