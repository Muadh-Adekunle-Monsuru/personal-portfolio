export default function Education() {
	const experiences = [
		{
			school: 'Fountain University, Osogbo',
			location: 'Osun State, Nigeria',
			duration: '2022 - 2025',
			description: 'Graduated with First-Class Honors',
		},
		{
			school: 'Baseerah International School',
			location: 'Kuala Lumpur, Malaysia',
			duration: '2014 - 2022',
			description:
				'Earned both Junior and Senior Secondary School Certificates (JSCE & SSCE) and Cambridge IGCSE & A-Level qualifications.',
		},
	];
	return (
		<div className='flex flex-col gap-1 w-full max-w-2xl '>
			<p className='text-xl geist-500'>Education</p>
			<div>
				{experiences.map((experience, index) => (
					<div key={index} className='p-4  rounded-lg backdrop-blur-md my-3'>
						<div className='flex justify-between items-center '>
							<h2 className='text-sm font-semibold'>{experience.school}</h2>
							<p className='text-xs text-gray-500'>{experience.duration}</p>
						</div>
						<p className='text-sm text-gray-500'>{experience.location}</p>
						<p className='mt-2 text-sm  manrope-300'>
							{experience.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
