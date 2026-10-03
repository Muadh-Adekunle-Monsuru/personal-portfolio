import { Link } from 'react-router-dom';
import SiteHeader from './SiteHeader';

function InlineLink({
	to,
	href,
	children,
}: {
	to?: string;
	href?: string;
	children: string;
}) {
	const className = 'link-btn';
	if (to) {
		return (
			<Link to={to} className={className}>
				{children}
			</Link>
		);
	}
	return (
		<a href={href} className={className} target={href?.startsWith('http') ? '_blank' : undefined} rel='noreferrer'>
			{children}
		</a>
	);
}

export default function MinimalLanding() {
	return (
		<div className='min-h-screen w-full bg-white text-[#222] dark:bg-[#0d0d10] dark:text-[#e8e8e8]'>
			<SiteHeader />
			<main className='w-full'>
				<article className='mx-auto max-w-[75ch] px-5 pb-28 pt-12 font-geist text-[15px] leading-7'>
					<h1 className='flex flex-wrap items-baseline text-3xl font-semibold tracking-tight'>
						Hey, I&apos;m{' '}
						<ruby className='ml-1.5'>
							Muadh
							<rt className='text-[11px] font-normal tracking-normal text-neutral-500 dark:text-neutral-400'>
								معاذ
							</rt>
						</ruby>
					</h1>
					<small className='mt-2 block text-neutral-500 dark:text-neutral-400'>
						My name is pronounced as &quot;MOO-adh&quot;
					</small>

					<div className='mx-auto mt-8 max-w-md'>
						<figure className='polaroid mx-auto w-full max-w-sm'>
							<img
								src='/my-photo.jpg'
								alt='Portrait of Muadh Adekunle Monsuru'
								className='block h-auto w-full object-cover'
							/>
						</figure>
					</div>

					<div className='mt-10 space-y-5 text-[15.5px] leading-[1.75] text-neutral-800 dark:text-neutral-300'>
						<p>
							I am a software engineer based in Istanbul. I recently graduated
							with first-class honours in Computer Science, and I am currently
							studying{' '}
							<InlineLink href='https://cybermacs.eu/'>
								Applied Cybersecurity
							</InlineLink>{' '}
							in the Erasmus Mundus CyberMACS programme.
						</p>
						<p>
							This website is my humble abode on the internet, where I keep a
							record of things I build{' '}
							<InlineLink to='/projects'>here</InlineLink> and notes on
							scholarships and study abroad{' '}
							<InlineLink to='/scholarship-advice'>here</InlineLink>. I care
							about web, mobile, and making software that holds up in production.
						</p>
						<p>
							If you want to see more of the work, my{' '}
							<InlineLink href='https://github.com/Muadh-Adekunle-Monsuru'>
								GitHub
							</InlineLink>{' '}
							is the best place to look. You can also read my{' '}
							<InlineLink href='https://drive.google.com/file/d/1k0aLZju9n7dx8DOXgmDWuaeFQyHvG22v/view?usp=sharing'>
								resume
							</InlineLink>
							. If you want to connect and get a quick response from me, reach
							out on{' '}
							<InlineLink href='https://www.linkedin.com/in/muadh-monsuru/'>
								LinkedIn
							</InlineLink>
							.
						</p>
					</div>

					<h2 id='contact' className='mb-3 mt-12 text-xl font-semibold tracking-tight'>
						Contact
					</h2>
					<p className='text-[15.5px] leading-[1.75] text-neutral-800 dark:text-neutral-300'>
						Feel free to reach me at{' '}
						<InlineLink href='mailto:muadhmon@proton.me?subject=Hey%20Muadh'>
							muadhmon@proton.me
						</InlineLink>
						.
					</p>
				</article>
			</main>
		</div>
	);
}
