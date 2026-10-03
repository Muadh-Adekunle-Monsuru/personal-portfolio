import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProjectData } from './ProjectData';
import { useTheme } from '../theme';

function formatIstanbulClock(date: Date) {
	const weekday = new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
		timeZone: 'Europe/Istanbul',
	}).format(date);
	const time = new Intl.DateTimeFormat('en-GB', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
		timeZone: 'Europe/Istanbul',
	}).format(date);
	return `${weekday} ${time}, Istanbul`;
}

function ThemeToggle() {
	const { theme, toggle } = useTheme();
	const isDark = theme === 'dark';

	return (
		<button
			type='button'
			aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
			onClick={toggle}
			className='flex h-5 w-5 items-center justify-center text-current'
		>
			{isDark ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='rotate-[40deg]'
				>
					<mask id='moon-mask'>
						<rect x='0' y='0' width='100%' height='100%' fill='white' />
						<circle cx='12' cy='4' r='9' fill='black' />
					</mask>
					<circle cx='12' cy='12' r='9' fill='currentColor' mask='url(#moon-mask)' />
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<circle cx='12' cy='12' r='5' />
					<line x1='12' y1='1' x2='12' y2='3' />
					<line x1='12' y1='21' x2='12' y2='23' />
					<line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
					<line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
					<line x1='1' y1='12' x2='3' y2='12' />
					<line x1='21' y1='12' x2='23' y2='12' />
					<line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
					<line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
				</svg>
			)}
		</button>
	);
}

type SearchItem = {
	label: string;
	detail: string;
	href: string;
	external?: boolean;
};

export default function SiteHeader() {
	const navigate = useNavigate();
	const [now, setNow] = useState(() => formatIstanbulClock(new Date()));
	const [searchOpen, setSearchOpen] = useState(false);
	const [query, setQuery] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const id = window.setInterval(() => {
			setNow(formatIstanbulClock(new Date()));
		}, 30_000);
		return () => window.clearInterval(id);
	}, []);

	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
				event.preventDefault();
				setSearchOpen(true);
			}
			if (event.key === 'Escape') {
				setSearchOpen(false);
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);

	useEffect(() => {
		if (searchOpen) {
			setQuery('');
			window.requestAnimationFrame(() => inputRef.current?.focus());
		}
	}, [searchOpen]);

	const items = useMemo<SearchItem[]>(
		() => [
			{ label: 'Home', detail: 'Landing page', href: '/' },
			{ label: 'Projects', detail: 'Selected work', href: '/projects' },
			{
				label: 'Scholarship advice',
				detail: 'Erasmus Mundus notes and resources',
				href: '/scholarship-advice',
			},
			{
				label: 'GitHub',
				detail: 'Repositories',
				href: 'https://github.com/Muadh-Adekunle-Monsuru',
				external: true,
			},
			{
				label: 'LinkedIn',
				detail: 'Profile',
				href: 'https://www.linkedin.com/in/muadh-monsuru/',
				external: true,
			},
			...ProjectData.slice(0, 12).map((project) => ({
				label: project.title,
				detail: project.description,
				href: project.links.vercel ?? project.links.github,
				external: true,
			})),
		],
		[],
	);

	const results = items.filter((item) => {
		const haystack = `${item.label} ${item.detail}`.toLowerCase();
		return haystack.includes(query.trim().toLowerCase());
	});

	const openItem = (item: SearchItem) => {
		setSearchOpen(false);
		if (item.external) {
			window.open(item.href, '_blank', 'noopener,noreferrer');
			return;
		}
		navigate(item.href);
	};

	return (
		<>
			<header className='relative h-16 w-full'>
				<div className='fixed z-40 flex h-20 w-full justify-between bg-white/50 backdrop-blur-[20px] backdrop-saturate-150 dark:bg-[#0D0D1050]'>
					<nav className='m-auto flex w-full max-w-[75ch] items-center justify-between px-5'>
						<Link
							to='/'
							title='Home'
							aria-label='Home'
							className='text-sm text-neutral-700 dark:text-neutral-300'
						>
							{now}
						</Link>
						<div className='flex items-center gap-5'>
							<Link
								to='/projects'
								className='text-sm opacity-50 hover:opacity-100'
							>
								projects
							</Link>
							<ThemeToggle />
							<a
								href='https://github.com/Muadh-Adekunle-Monsuru'
								target='_blank'
								rel='noreferrer'
								aria-label='GitHub'
								className='opacity-80 hover:opacity-100'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
								</svg>
							</a>
							<button
								type='button'
								aria-label='Search'
								onClick={() => setSearchOpen(true)}
								className='flex items-center gap-2 rounded-lg border border-neutral-300 bg-white p-1.5 text-sm text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 sm:ml-4 sm:px-3 sm:py-1.5'
							>
								<svg width='16' height='16' viewBox='0 0 20 20' aria-hidden='true'>
									<path
										d='M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z'
										stroke='currentColor'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								<span className='hidden sm:inline'>Search</span>
								<kbd className='hidden rounded border border-neutral-300 px-1 text-[10px] dark:border-neutral-600 sm:inline'>
									⌘K
								</kbd>
							</button>
						</div>
					</nav>
				</div>
			</header>

			{searchOpen && (
				<div
					className='fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 pt-[15vh]'
					onClick={() => setSearchOpen(false)}
				>
					<div
						className='w-full max-w-lg overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-[#16161a]'
						onClick={(event) => event.stopPropagation()}
					>
						<input
							ref={inputRef}
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							placeholder='Search pages, projects…'
							className='w-full border-b border-neutral-200 bg-transparent px-4 py-3 text-sm outline-none dark:border-neutral-800'
						/>
						<ul className='max-h-72 overflow-y-auto py-2'>
							{results.length === 0 && (
								<li className='px-4 py-3 text-sm opacity-60'>No matches</li>
							)}
							{results.map((item) => (
								<li key={`${item.label}-${item.href}`}>
									<button
										type='button'
										onClick={() => openItem(item)}
										className='flex w-full flex-col items-start px-4 py-2.5 text-left hover:bg-neutral-100 dark:hover:bg-white/5'
									>
										<span className='text-sm'>{item.label}</span>
										<span className='text-xs opacity-60'>{item.detail}</span>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</>
	);
}
