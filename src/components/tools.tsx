import { motion } from 'framer-motion';
import { ToolsData } from './ToolsData';

export const Tools = () => {
	return (
		<section className='flex flex-col gap-1 w-full max-w-2xl '>
			<h2 className='text-xl geist-500'>Tools</h2>

			<div className='flex items-center flex-wrap gap-3'>
				{ToolsData.map((tool, index) => (
					<motion.a
						href={tool.link}
						target='_blank'
						rel='noopener noreferrer'
						key={index}
						className='p-1 px-2 rounded-lg bg-neutral-500 transition-all'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<div className='flex flex-col gap-1'>
							<h3 className='text-xs font-medium text-white font-mono'>
								{tool.name}
							</h3>
						</div>
					</motion.a>
				))}
			</div>
		</section>
	);
};

export default Tools;
