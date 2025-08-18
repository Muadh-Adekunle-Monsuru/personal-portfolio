export default function WorkExperience() {
	const experiences = [
		{
			title: 'Full-Stack Developer Intern',
			company: 'Byaxiom Solutions.',
			location: 'Lagos State, Nigeria',
			duration: 'June 2024 - September 2024',
			description:
				'Developed and implemented full-stack web solutions, directly addressing and meeting client specifications.',
		},
		{
			title: 'Web Development Intern',
			company: ' Dervac Technologies.',
			location: 'Lagos State, Nigeria',
			duration: 'March 2024 - June 2024',
			description:
				'Mentored and instructed students in foundational and advanced concepts of JavaScript and web development.',
		},
		{
			title: 'Industrial Trainee',
			company: ' INTECU, Obafemi Awolowo University.',
			location: 'Osun State, Nigeria',
			duration: 'July 2023 - September 2023',
			description:
				'Acquired hands-on experience in computer networking, IT infrastructure management, and system troubleshooting.',
		},
	];
	return (
		<div className='flex flex-col gap-1 w-full max-w-2xl '>
			<p className='text-xl geist-500'>Work Experience</p>
			<div>
				{experiences.map((experience, index) => (
					<div key={index} className='p-4  rounded-lg backdrop-blur-md my-4'>
						<div className='flex justify-between items-center '>
							<h2 className='text-sm font-semibold'>{experience.title}</h2>
							<p className='text-xs text-gray-500'>{experience.duration}</p>
						</div>
						<p className='text-sm text-gray-600'>{experience.company}</p>
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
