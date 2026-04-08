import { type ReactNode } from 'react';

export default function BentoCard({
	title,
	children,
	className = '',
}: {
	title?: string;
	children: ReactNode;
	className?: string;
}) {
	return (
		<section
			className={[
				'rounded-2xl border border-neutral-200/80 bg-white/70 shadow-sm',
				'backdrop-blur-sm',
				'p-5 md:p-6',
				className,
			].join(' ')}
		>
			{title ? <h2 className='text-sm font-semibold text-neutral-800'>{title}</h2> : null}
			<div className={title ? 'mt-4' : ''}>{children}</div>
		</section>
	);
}

