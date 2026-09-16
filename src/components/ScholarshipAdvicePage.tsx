import { useEffect, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
	AGGREGATORS,
	COMMUNITIES,
	ERASMUS_CATALOGUE,
	ERASMUS_HANDBOOK,
	IELTS_RESOURCES,
	PERSONAL_LINKS,
	PROOF_OF_RESIDENCY,
	TOC_SECTIONS,
	TOEFL_RESOURCES,
	TRACKING_TOOLS,
	TRANSCRIPT_SAMPLE,
	VETTING_CHECKLIST,
	WEBINARS,
	type AdviceLink,
} from './ScholarshipAdviceData';

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noreferrer'
			className='text-sky-300 underline underline-offset-4 decoration-sky-300/40 hover:text-white hover:decoration-white transition-colors break-words'
		>
			{children}
		</a>
	);
}

function LinkRow({ link }: { link: AdviceLink }) {
	return (
		<a
			href={link.href}
			target='_blank'
			rel='noreferrer'
			className='group flex flex-col gap-1 border border-zinc-700 bg-zinc-900/80 px-4 py-3.5 hover:border-zinc-500 hover:bg-zinc-800/80 transition-colors duration-200'
		>
			<span className='text-base text-zinc-100 group-hover:text-white transition-colors'>{link.label}</span>
			{link.note && <span className='text-sm text-zinc-400 leading-relaxed'>{link.note}</span>}
		</a>
	);
}

function LinkGrid({ links }: { links: AdviceLink[] }) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4'>
			{links.map((link) => (
				<LinkRow key={link.href} link={link} />
			))}
		</div>
	);
}

function SectionHeading({ children }: { children: ReactNode }) {
	return (
		<h2 className='text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6'>
			{children}
		</h2>
	);
}

function SubHeading({ children }: { children: ReactNode }) {
	return (
		<h3 className='text-lg md:text-xl font-medium tracking-tight text-zinc-100 mt-10 mb-3'>
			{children}
		</h3>
	);
}

function ResourceLabel({ children }: { children: ReactNode }) {
	return (
		<p className='text-sm font-medium tracking-wide text-zinc-400 mt-6 mb-1 uppercase'>
			{children}
		</p>
	);
}

function Prose({ children }: { children: ReactNode }) {
	return (
		<div className='space-y-5 text-lg md:text-xl text-zinc-200 leading-[1.75]'>
			{children}
		</div>
	);
}

function BulletList({ items }: { items: string[] }) {
	return (
		<ul className='mt-4 space-y-3 text-lg md:text-xl text-zinc-200 leading-[1.75]'>
			{items.map((item) => (
				<li key={item} className='flex gap-3'>
					<span className='text-sky-400 shrink-0 mt-1'>•</span>
					<span>{item}</span>
				</li>
			))}
		</ul>
	);
}

export default function ScholarshipAdvicePage() {
	const navigate = useNavigate();
	const [activeId, setActiveId] = useState(TOC_SECTIONS[0].id);

	useEffect(() => {
		const elements = TOC_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible[0]?.target.id) {
					setActiveId(visible[0].target.id);
				}
			},
			{ rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
		);

		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			setActiveId(id);
		}
	};

	return (
		<div className='min-h-screen bg-[#0a0a0a] text-zinc-100'>
			<div className='w-full min-h-screen overflow-y-auto px-5 py-8 md:px-12 md:py-12'>
				<div className='max-w-6xl mx-auto'>
					{/* Header */}
					<div className='mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 gap-6'>
						<div>
							<button
								onClick={() => navigate('/')}
								className='text-sky-300/90 hover:text-white transition-colors mb-6 text-base'
							>
								← Back to home
							</button>
							<h1 className='text-3xl md:text-5xl font-semibold tracking-tight text-white'>
								Scholarship advice
							</h1>
							<p className='mt-4 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed'>
								A postgraduate roadmap from an Erasmus Mundus CyberMACS journey.
							</p>
						</div>
						<div className='text-left md:text-right text-sm text-zinc-500 space-y-1'>
							<p>{TOC_SECTIONS.length} sections</p>
							<p>Fully funded pathway guide</p>
						</div>
					</div>

					{/* Mobile TOC */}
					<nav
						aria-label='Section navigation'
						className='lg:hidden mb-10 -mx-1 px-1 overflow-x-auto flex gap-2 pb-2'
					>
						{TOC_SECTIONS.map((s) => (
							<button
								key={s.id}
								onClick={() => scrollTo(s.id)}
								className={`shrink-0 text-sm px-3.5 py-2 border transition-colors duration-200 ${
									activeId === s.id
										? 'border-zinc-500 text-white bg-zinc-800'
										: 'border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
								}`}
							>
								{s.short}
							</button>
						))}
					</nav>

					<div className='flex gap-10 xl:gap-14'>
						{/* Desktop sticky TOC */}
						<aside className='hidden lg:block w-60 shrink-0'>
							<nav
								aria-label='Table of contents'
								className='sticky top-8 space-y-0.5 border border-zinc-800 bg-zinc-900/60 p-4'
							>
								<p className='text-xs font-medium tracking-wide text-zinc-500 mb-4 uppercase'>
									Contents
								</p>
								{TOC_SECTIONS.map((s) => (
									<button
										key={s.id}
										onClick={() => scrollTo(s.id)}
										className={`w-full text-left text-sm leading-snug px-2.5 py-2.5 border-l-2 transition-colors duration-200 ${
											activeId === s.id
												? 'border-sky-400 text-white bg-zinc-800/80'
												: 'border-transparent text-zinc-500 hover:text-zinc-200 hover:border-zinc-600'
										}`}
									>
										{s.label}
									</button>
								))}
							</nav>
						</aside>

						{/* Main prose column */}
						<main className='flex-1 min-w-0 max-w-3xl space-y-20 pb-24'>
							{/* INTRO */}
							<motion.section
								id='intro'
								className='scroll-mt-8'
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-80px' }}
								transition={{ duration: 0.45 }}
							>
								<SectionHeading>Start here</SectionHeading>
								<Prose>
									<p>
										Welcome to my complete roadmap for securing a fully-funded postgraduate scholarship.
										After navigating the application process and securing my spot in the Erasmus Mundus
										CyberMACS (Applied Cyber Security) programme, I realized how overwhelming the journey
										can feel when you don't know where to start. I spent years gathering tips, making
										mistakes, and refining my strategy, and I built this page so you don't have to figure it
										all out the hard way.
									</p>
									<p>
										<strong className='text-white'>Who this is for.</strong> Final-year students planning
										early, recent graduates assembling documents, and applicants rebuilding after
										rejections. If you're dreaming of studying abroad on a fully-funded award, this guide
										is for you.
									</p>
									<p>
										<strong className='text-white'>How to use this page.</strong> Don't try to do everything
										in one day. Skim it once for the big picture, bookmark it, then return section by
										section, passport, English, SOP, CV, referees, as you hit each stage. Treat it as a
										checklist and reference manual.
									</p>
								</Prose>
							</motion.section>

							{/* CORE DOCS */}
							<section id='core-docs' className='scroll-mt-8'>
								<SectionHeading>1) Core application documents</SectionHeading>

								<SubHeading>Passport ,  start early</SubHeading>
								<Prose>
									<p>
										Before you draft a statement of purpose or polish your CV, secure a valid international
										passport. Processing can take weeks or months. Plenty of strong candidates get
										disqualified simply because they don't have one ready. A passport is also required to
										register for TOEFL or IELTS.
									</p>
									<p>
										Once you have it: keep at least six months of validity beyond your intended travel dates;
										make glare-free scans of the data pages; name files clearly (e.g.{' '}
										<code className='text-sky-300 text-base md:text-lg bg-zinc-900 px-1.5 py-0.5 rounded-sm'>
											Lastname_Firstname_Passport.pdf
										</code>); and store
										everything in a dedicated Drive folder so you can share a link instantly.
									</p>
								</Prose>

								<SubHeading>English requirement (IELTS / TOEFL / English letter)</SubHeading>
								<Prose>
									<p>
										Most Erasmus Mundus and international programmes need proof of English. Many accept an
										official letter from your university stating your degree was taught entirely in
										English, this can save stress and exam fees when applications open soon.
									</p>
									<p>
										Still: if you can, sit TOEFL or IELTS. A strong score helps you stand out and opens more
										programmes that refuse institution letters. Thankfully, as Nigerians we already operate
										in English, but don't get complacent. Practice the format for at least a month. Booking,
										prep, the exam, and results can take up to two months.
									</p>
									<p>
										While each programme sets its own minimum, a solid benchmark is{' '}
										<strong className='text-white'>80+ / 120 on TOEFL</strong>, roughly{' '}
										<strong className='text-white'>IELTS 6.5</strong>.
									</p>
								</Prose>
								<ResourceLabel>TOEFL resources</ResourceLabel>
								<LinkGrid links={TOEFL_RESOURCES} />
								<ResourceLabel>IELTS resources</ResourceLabel>
								<LinkGrid links={IELTS_RESOURCES} />

								<SubHeading>Motivation letter / Statement of Purpose (SOP)</SubHeading>
								<Prose>
									<p>
										Your SOP is your voice, often the first real impression the committee gets. Show how your
										passion and academic work bridge a real knowledge gap. The{' '}
										<strong className='text-white'>STAR</strong> method helps: Situation (a national or
										global problem), Task (what you've already done), Action (how the master's fits), Result
										(outcomes and post-study impact).
									</p>
									<p>
										Structure that keeps reviewers engaged: open with motivation and the problem (stats or a
										short personal story), bridge past academics/work/leadership to skills the programme
										needs, spell out short- and long-term goals and how the consortium helps, research
										partner universities concretely, and close with a clear “why me” summary.
									</p>
									<p>
										Respect word limits. Use simple active language, no arrogance. Don't echo your CV, play
										the pity card, or plagiarize; authenticity is easier to defend in interviews. Career
										changers: explain the switch (passion, situation, or gap) and prove readiness with
										courses, internships, or transferable skills. Get a sharp review from trusted friends or
										scholars before you submit.
									</p>
								</Prose>

								<SubHeading>CV (Europass / academic CV)</SubHeading>
								<Prose>
									<p>
										An academic CV can run two to three pages, more room than a short professional resume.
										Many European programmes expect Europass-style structure: short profile, education,
										work and volunteering, skills, publications, awards.
									</p>
									<p>
										Lead with a tight profile paragraph. List education reverse-chronologically (skip
										primary/secondary unless highly relevant). Curate experience for impact, research
										internships, assisting lecturers, meaningful volunteering, and use strong action verbs
										(“Facilitated,” “Improved”). Leadership, publications, exchanges, and extracurriculars
										are boosters; put them where they're easy to find.
									</p>
								</Prose>

								<SubHeading>Reference letters</SubHeading>
								<Prose>
									<p>
										Choose referees who know you well, can speak specifically about your abilities, and won't
										miss deadlines. Send a clear email with your achievements, experiences, leadership, and
										skills. You may share a short guide of points, but never draft the full letter yourself;
										that's unethical.
									</p>
									<p>
										Strong letters give relationship context, concrete examples (a paper, a project), and
										link past performance to your proposed study. Quantitative ranking (“top 5% of students
										I've taught”) lands hard. Weak praise, faint compliments, or outdated stories hurt.
										Ask for official letterhead, a date, proper address, and a signed title.
									</p>
									<p>
										Manage the process: update referees politely, watch deadlines, thank them sincerely. If
										someone declines because they can't be emphatically positive, respect that, find someone
										who can champion you.
									</p>
								</Prose>
							</section>

							{/* PROFILE BOOSTERS */}
							<section id='profile-boosters' className='scroll-mt-8'>
								<SectionHeading>2) Profile boosters</SectionHeading>

								<SubHeading>Grades & transcripts</SubHeading>
								<Prose>
									<p>
										First Class and Second Class Upper give a strong edge, but Second Class Lower applicants
										should not be discouraged. Regardless of class, get a student copy of your transcript
										early, plus your degree certificate or a statement of results if the certificate isn't
										ready. Almost every portal needs transcript uploads. Scan cleanly with something like
										Microsoft Lens and keep one “final upload” version ready.
									</p>
								</Prose>
								<div className='mt-4'>
									<LinkRow link={TRANSCRIPT_SAMPLE} />
								</div>

								<SubHeading>Volunteering & leadership</SubHeading>
								<Prose>
									<p>
										Don't overlook how much volunteering and leadership boost your profile. Committees want
										to see community impact, not just grades. Teaching locally, helping an NGO with tech, or
										leading a team in a tough innovation challenge shows you apply knowledge in the real
										world.
									</p>
									<p>
										Choose meaningful roles with real outcomes (impact &gt; title). On your CV, write “action
										→ result” bullets with numbers where you can. Feature your strongest examples
										prominently, they're unique selling points, not afterthoughts.
									</p>
								</Prose>

								<SubHeading>Research & publications</SubHeading>
								<Prose>
									<p>
										Undergrads aren't usually expected to publish, but it can set you apart. Start with your
										faculty or departmental journal: don't let a strong final-year project sit unused. Ask
										your supervisor how to turn findings into an article. Other avenues: undergrad
										conferences, student journals, poster symposiums, or assisting a lecturer toward a
										co-author credit.
									</p>
									<p>
										Once you have an output, put it on your CV and link the paper, repo, or poster clearly.
									</p>
								</Prose>
							</section>

							{/* ONLINE PRESENCE */}
							<section id='online-presence' className='scroll-mt-8'>
								<SectionHeading>3) Online presence (digital footprint)</SectionHeading>
								<Prose>
									<p>
										Committees and supervisors may look you up. A polished digital footprint builds trust
										fast.
									</p>
								</Prose>

								<SubHeading>LinkedIn</SubHeading>
								<Prose>
									<p>
										Treat LinkedIn as an extended, public CV, network with alumni, catch scholarship news.
									</p>
								</Prose>
								<BulletList
									items={[
										'Clear professional headshot, customized URL, complete education and experience',
										'Headline that states value (not just “Student”); About that tells your story',
										'Featured section: papers, repos, certificates, hackathon or volunteer wins',
									]}
								/>
								<p className='mt-5 text-base md:text-lg text-zinc-400'>
									Mine:{' '}
									<ExternalLink href={PERSONAL_LINKS.linkedin}>{PERSONAL_LINKS.linkedin}</ExternalLink>
								</p>

								<SubHeading>Portfolio (recommended for CS)</SubHeading>
								<Prose>
									<p>
										If you're in tech, a personal site lets reviewers verify skills beyond a language list.
										Aim for 3–6 strong projects with a demo and short write-up each. I showcase full-stack
										work (e.g. SmartSpend, LinkParty), hackathons, academics, and volunteer web development.
										You can use free templates on Vercel, GitHub Pages, or Netlify, no need to overcomplicate
										it.
									</p>
								</Prose>
								<p className='mt-5 text-base md:text-lg text-zinc-400'>
									Mine:{' '}
									<ExternalLink href={PERSONAL_LINKS.portfolio}>{PERSONAL_LINKS.portfolio}</ExternalLink>
								</p>

								<SubHeading>Professional email + signature</SubHeading>
								<Prose>
									<p>
										Use a clean address like{' '}
										<code className='text-sky-300 text-base md:text-lg bg-zinc-900 px-1.5 py-0.5 rounded-sm'>
											firstname.lastname@…
										</code>
										. Set a signature with your name, degree, school, and one or two links so every
										outreach looks consistent.
									</p>
								</Prose>
								<div className='mt-5 border border-zinc-700 bg-zinc-900/80 px-5 py-4 text-base md:text-lg text-zinc-200 space-y-1'>
									<p className='text-white font-medium'>Muadh Adekunle Monsuru</p>
									<p>BSc Computer Science | Fountain University</p>
									<p>Software Developer</p>
									<p>
										<ExternalLink href={PERSONAL_LINKS.linkedin}>LinkedIn</ExternalLink>
										{' · '}
										<ExternalLink href={PERSONAL_LINKS.portfolio}>Portfolio</ExternalLink>
									</p>
								</div>
							</section>

							{/* INFO SOURCES */}
							<section id='info-sources' className='scroll-mt-8'>
								<SectionHeading>4) Information sources</SectionHeading>
								<ResourceLabel>Communities</ResourceLabel>
								<LinkGrid links={COMMUNITIES} />
								<ResourceLabel>Webinars ,  watch when you need the topic</ResourceLabel>
								<LinkGrid links={WEBINARS} />
							</section>

							{/* DISCOVERY */}
							<section id='discovery' className='scroll-mt-8'>
								<SectionHeading>5) Scholarship discovery + tracking</SectionHeading>
								<Prose>
									<p>
										<strong className='text-white'>Start here:</strong> open the official Erasmus Mundus
										Catalogue and scan for programmes that match, or are only tangentially related to, your
										field. Many people miss good fits because the title doesn't perfectly match their
										background.
									</p>
								</Prose>
								<div className='mt-4'>
									<LinkRow link={ERASMUS_CATALOGUE} />
								</div>

								<SubHeading>Where I searched</SubHeading>
								<Prose>
									<p>
										I constantly check aggregators (and subscribe to mailing lists), then vet each
										opportunity on the official programme site, note requirements and deadlines, and add
										them to a personal tracker. Build your own list, don't rely on open tabs forever.
									</p>
								</Prose>
								<LinkGrid links={AGGREGATORS} />

								<SubHeading>Vetting checklist</SubHeading>
								<BulletList items={[...VETTING_CHECKLIST]} />

								<SubHeading>Track your scholarships</SubHeading>
								<LinkGrid links={TRACKING_TOOLS} />
							</section>

							{/* ERASMUS */}
							<section id='erasmus' className='scroll-mt-8'>
								<SectionHeading>6) Erasmus Mundus (quick explainer)</SectionHeading>
								<BulletList
									items={[
										'2-year joint master (usually 120 ECTS)',
										'Study in 2+ countries (mobility)',
										'Scholarship typically covers: tuition + travel + installation + monthly stipend',
										'Two broad categories: Programme country vs Partner country',
									]}
								/>
								<div className='mt-4'>
									<LinkRow link={ERASMUS_HANDBOOK} />
								</div>
								<div className='mt-6 border border-zinc-600 bg-zinc-900 px-5 py-5 text-base md:text-lg text-zinc-200 leading-relaxed'>
									<strong className='text-white'>CyberMACS note:</strong> My cohort is the last planned
									intake for CyberMACS for now, unless the consortium's funding is renewed. Don't fixate on
									that one programme, use the catalogue and this roadmap to find other strong Erasmus Mundus
									and fully-funded options in tech, engineering, and cybersecurity.
								</div>
							</section>

							{/* TIPS */}
							<section id='tips' className='scroll-mt-8'>
								<SectionHeading>7) Tips & advice (high-signal)</SectionHeading>
								<BulletList
									items={[
										'Career / course changers: explain why the switch, then prove readiness (transferable skills + plan).',
										'Interviews: be confident, know your SOP and mobility path; ask thoughtful questions (not financial).',
										'Video SOP (if required): script it, keep it 2–3 minutes; clear audio matters most.',
										'After submitting: apply broadly; use rejections as feedback to improve.',
									]}
								/>
							</section>

							{/* RESIDENCY */}
							<section id='residency' className='scroll-mt-8'>
								<SectionHeading>8) Proof of residency</SectionHeading>
								<Prose>
									<p>
										Some programmes ask for proof of residency. Here's a shared folder of reference
										materials:
									</p>
								</Prose>
								<div className='mt-4'>
									<LinkRow link={PROOF_OF_RESIDENCY} />
								</div>
							</section>

							{/* CLOSING */}
							<section id='closing' className='scroll-mt-8'>
								<SectionHeading>Closing note</SectionHeading>
								<Prose>
									<p>
										Take it easy, step by step. Looking at every requirement at once can feel daunting, but
										you don't have to finish today. The tips and resources here took me years to gather. I
										started planning during SIWES at INTECU, Obafemi Awolowo University, in my 300L. Be glad
										someone has already walked the path and laid a roadmap; follow it deliberately.
									</p>
									<p>
										Don't let rejections crush you. I faced many before CyberMACS clicked. Every “no” is a
										step toward a “yes.” Most successful applicants aren't perfect, they're consistent.
									</p>
									<p>
										If you get stuck or need clarification, reach out at{' '}
										<ExternalLink href={PERSONAL_LINKS.emailHref}>{PERSONAL_LINKS.email}</ExternalLink>. I
										may not reply immediately, but I will when I can.
									</p>
									<p>
										Do your best, organize your documents, practice for your exams, and place the outcome in
										Allah's hands. It is not by our handwork alone.
									</p>
								</Prose>
								<blockquote className='mt-10 border-l-2 border-zinc-600 pl-5 py-1'>
									<p className='text-lg md:text-xl text-zinc-100 italic leading-relaxed'>
										“And whoever relies upon Allah – then He is sufficient for him. Indeed, Allah will
										accomplish His purpose. Allah has already set for everything a [decreed] extent.”
									</p>
									<footer className='mt-4 text-sm text-zinc-500'>
										,  Surah At-Talaq 65:3
									</footer>
								</blockquote>
								<p className='mt-8 text-lg md:text-xl text-zinc-400'>
									Keep pushing, keep praying, and your time will come.
								</p>
							</section>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
}
