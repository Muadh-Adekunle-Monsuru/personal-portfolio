import { motion } from 'framer-motion';
import BentoCard from '../BentoCard';
import { ToolsData } from '../ToolsData';

export default function ToolsBento({ className = '' }: { className?: string }) {
	return (
		<BentoCard title='Tools' className={className}>
			<div className='flex flex-wrap gap-2'>
				{ToolsData.map((tool) => (
					<motion.a
						key={tool.name}
						href={tool.link}
						target='_blank'
						rel='noopener noreferrer'
						className={[
							'rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5',
							'text-xs font-medium text-neutral-800 font-mono',
							'hover:bg-white transition',
						].join(' ')}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						{tool.name}
					</motion.a>
				))}
			</div>
		</BentoCard>
	);
}

