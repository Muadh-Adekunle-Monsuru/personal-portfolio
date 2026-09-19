export type AdviceLink = {
	label: string;
	href: string;
	note?: string;
};

export type TocSection = {
	id: string;
	label: string;
	short: string;
};

export const TOC_SECTIONS: TocSection[] = [
	{ id: 'intro', label: 'Start here', short: '01 Intro' },
	{ id: 'core-docs', label: 'Core application documents', short: '02 Docs' },
	{ id: 'profile-boosters', label: 'Profile boosters', short: '03 Boosters' },
	{ id: 'online-presence', label: 'Online presence', short: '04 Presence' },
	{ id: 'info-sources', label: 'Information sources', short: '05 Sources' },
	{ id: 'discovery', label: 'Scholarship discovery + tracking', short: '06 Hunt' },
	{ id: 'erasmus', label: 'Erasmus Mundus explainer', short: '07 Erasmus' },
	{ id: 'tips', label: 'High-signal tips', short: '08 Tips' },
	{ id: 'residency', label: 'Proof of residency', short: '09 Residency' },
	{ id: 'closing', label: 'Closing note', short: '10 Close' },
];

export const PERSONAL_LINKS = {
	linkedin: 'https://www.linkedin.com/in/muadh-monsuru/',
	portfolio: 'https://www.muadh.com.ng/',
	email: 'muadhmon@proton.me',
	emailHref: 'mailto:muadhmon@proton.me',
} as const;

export const TOEFL_RESOURCES: AdviceLink[] = [
	{
		label: 'The Official Guide to the TOEFL iBT Test',
		href: 'https://www.ets.org/toefl/test-takers/ibt/prepare/official-guide.html',
		note: 'ETS — authentic practice tests and scoring criteria',
	},
	{
		label: 'TOEFL iBT Test Prep Planner',
		href: 'https://www.ets.org/toefl/test-takers/ibt/prepare/tips.html',
		note: 'Free ETS 8-week study schedule PDF',
	},
	{
		label: 'TOEFL iBT Quick Prep & practice questions',
		href: 'https://www.ets.org/toefl/test-takers/ibt/prepare/quick-prep.html',
		note: 'Free past-test questions from ETS',
	},
	{
		label: "Magoosh's Guide to the TOEFL iBT",
		href: 'https://magoosh.com/toefl/toefl-ebook/',
		note: 'Free eBook — strategies, vocab, study plans',
	},
];

export const IELTS_RESOURCES: AdviceLink[] = [
	{
		label: 'The Official Cambridge Guide to IELTS',
		href: 'https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/official-cambridge-guide-ielts',
		note: 'Definitive all-in-one Cambridge guide',
	},
	{
		label: 'Cambridge IELTS Authentic Practice Tests',
		href: 'https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts',
		note: 'Gold-standard retired exam papers',
	},
	{
		label: 'The Key to IELTS Success (Pauline Cullen)',
		href: 'https://keytoielts.com/',
		note: 'Free PDF — myths and Writing scoring',
	},
	{
		label: 'IELTS Trainer 2 (Academic)',
		href: 'https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/ielts-trainer-2',
		note: 'Six practice tests with coaching',
	},
	{
		label: "Magoosh's Guide to the Whole IELTS Exam",
		href: 'https://magoosh.com/ielts/ielts-ebook/',
		note: 'Free eBook — sections, quizzes, vocab',
	},
];

export const COMMUNITIES: AdviceLink[] = [
	{
		label: 'African Student Summit (TASS)',
		href: 'https://www.linkedin.com/company/tassafrica/posts/?feedView=all',
	},
	{
		label: 'EMA Nigeria',
		href: 'https://www.facebook.com/erasmusmundusnigeria',
	},
	{
		label: 'The Scholarship Room',
		href: 'https://www.youtube.com/@TheScholarshiproom',
	},
	{
		label: 'Taofeeq Ahmad (YouTube)',
		href: 'https://www.youtube.com/@tahmed_010/videos',
	},
	{
		label: 'McGill Mastercard form',
		href: 'https://docs.google.com/forms/d/e/1FAIpQLScBtragqc_aMNWjCxvCEj2uGj2rO2v_Wiuu1-4XpTK7-hGYpQ/viewform',
	},
	{
		label: 'WhatsApp group',
		href: 'https://chat.whatsapp.com/E8Cz9h6UDlmLwH8rxxJohT?mode=gi_t',
	},
];

export const WEBINARS: AdviceLink[] = [
	{
		label: 'Scholarship webinar 1',
		href: 'https://www.youtube.com/watch?v=r3OMW6mn3ak',
	},
	{
		label: 'Scholarship webinar 2',
		href: 'https://www.youtube.com/watch?v=Vo_dfPe6AH0',
	},
	{
		label: 'Scholarship webinar 3 (live)',
		href: 'https://www.youtube.com/live/_EO3C5lFSY0',
	},
	{
		label: 'Scholarship webinar 4',
		href: 'https://www.youtube.com/watch?v=x1LL05abPRI',
	},
	{
		label: 'Scholarship webinar 5',
		href: 'https://www.youtube.com/watch?v=LW8invKIrSM&t=1s',
	},
];

export const ERASMUS_CATALOGUE: AdviceLink = {
	label: 'Erasmus Mundus Catalogue',
	href: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en',
	note: 'Start here — scan for programmes that match or relate to your field',
};

export const AGGREGATORS: AdviceLink[] = [
	{
		label: 'Opportunities for Africans (OFA)',
		href: 'https://www.opportunitiesforafricans.com/category/scholarships/masters/',
	},
	{
		label: 'After School Africa',
		href: 'http://afterschoolafrica.com',
	},
	{
		label: 'Scholar Africa',
		href: 'http://scholar.africa',
	},
	{
		label: 'Advance Africa',
		href: 'http://advance-africa.com',
	},
	{
		label: 'Scholars4Dev',
		href: 'http://scholars4dev.com',
	},
	{
		label: 'Opportunity Desk',
		href: 'https://opportunitydesk.org/category/fellowships-and-scholarships/masters-postgraduate/',
	},
	{
		label: 'Scholastica',
		href: 'http://scholastica.ng',
	},
	{
		label: 'MySchoolGist',
		href: 'https://myschoolgist.com/scholarships/',
	},
	{
		label: 'MySchool Scholarships',
		href: 'https://myschoolscholarships.org/',
	},
	{
		label: 'Scholarship Region',
		href: 'https://www.scholarshipregion.com/',
		note: 'Subscribe to their mailing list',
	},
];

export const TRACKING_TOOLS: AdviceLink[] = [
	{
		label: 'Scholarship tracker template',
		href: 'https://docs.google.com/spreadsheets/d/1uCm2ceOe2DkuKZJ6f_IkTVvqoAcb7yWW/edit?gid=2044393524#gid=2044393524',
		note: 'Copy and customize',
	},
	{
		label: 'Example filled tracker',
		href: 'https://docs.google.com/spreadsheets/d/1XPkcKTpumhNZZRPnNbSwr8foTNpmSjQ9/edit?gid=452379480#gid=452379480',
	},
	{
		label: 'My Comp Sci–heavy list',
		href: 'https://docs.google.com/document/d/1bqz7z7pGHRQ4TvkqYy2-AGgXbQPP_54egMOX0xTBXfM/edit?usp=sharing',
	},
];

export const ERASMUS_HANDBOOK: AdviceLink = {
	label: 'Erasmus Mundus handbook',
	href: 'https://drive.google.com/file/d/1NLcA-bbrTzYlnk-ZzIiBw1cdQQWTwjNn/view',
};

export const PROOF_OF_RESIDENCY: AdviceLink = {
	label: 'Proof of residency folder',
	href: 'https://drive.google.com/drive/u/0/folders/1wVtyoG2FaROGwnozMZZjiN-RjDNXIJFD',
};

export const TRANSCRIPT_SAMPLE: AdviceLink = {
	label: 'Sample transcript / report style',
	href: 'https://www.wes.org/wp-content/uploads/2025/10/Sample_CXC_Report_2025-scaled.png',
};

export const SOP_EXAMPLES: AdviceLink[] = [
	{
		label: 'My motivation letter',
		href: 'https://docs.google.com/document/d/1znRdtmRG58B8gOGtTJOgQ5kkxmr_1sbC4a73vVYbAz0/edit?usp=sharing',
		note: 'Sample from my application',
	},
	{
		label: 'SOP example document',
		href: 'https://docs.google.com/document/d/1iQcW2DFOD_06In55bEIh6if4zJrYtT3ZKIC4FQCyb0A/edit?tab=t.0',
	},
	{
		label: 'SOP sample (Drive)',
		href: 'https://drive.google.com/file/d/17JZXbSUaYXdVTnnYQwq-cze3MtoqNS27/view',
	},
	{
		label: 'SOP example document 2',
		href: 'https://docs.google.com/document/d/1OxJnOOpn7BXjwz2Q6ETOsZmGKqJiKwBs7HBxrlz5Pcs/edit?tab=t.0',
	},
	{
		label: 'SOP sample (Drive) 2',
		href: 'https://drive.google.com/file/d/1xyi5Yx28yY-MqPEIw0WbLF1CoWVhdAtY/view',
	},
	{
		label: 'SOP sample (Drive) 3',
		href: 'https://drive.google.com/file/d/1KknGlrKg4JKt8uo81XvgzgCHjL8xN1SI/view',
	},
	{
		label: 'SOP sample (Drive) 4',
		href: 'https://drive.google.com/file/d/1Xa4RAaI5zZ3HTmDPl8S1TcbXGApZpR7H/view',
	},
	{
		label: 'YouTube — motivation letter guide',
		href: 'https://www.youtube.com/watch?v=N7YZYWm-RYw',
	},
	{
		label: 'SOP sample (Drive) 5',
		href: 'https://drive.google.com/file/d/1D59aLrXqc074dB5fYsof5iCm1HDHPPJn/view',
	},
	{
		label: 'YouTube — motivation letter guide 2',
		href: 'https://www.youtube.com/watch?v=2EjbwAcksrc',
	},
];

export const CV_TEMPLATES: AdviceLink[] = [
	{
		label: 'My CV',
		href: 'https://drive.google.com/file/d/11mcTvVGDbjtRZWE6AwBjsPfKUWBlaLbh/view?usp=sharing',
		note: 'Sample from my application',
	},
	{
		label: 'Europass CV builder',
		href: 'https://europass.europa.eu/en/create-europass-cv',
		note: 'Official EU CV format used by many programmes',
	},
	{
		label: 'CV sample (Drive)',
		href: 'https://drive.google.com/file/d/1AxwFeXLPhe2EtolKMdfO3_O84xP64i7E/view',
	},
	{
		label: 'CV sample (Drive) 2',
		href: 'https://drive.google.com/file/d/1ehNUnGbBj_g8jIfbgmbsrjqgqoikJkGH/view',
	},
	{
		label: 'CV sample (Drive) 3',
		href: 'https://drive.google.com/file/d/1cB8emwY3JbbApxlrMZXEj7VkVLERaL6-/view?usp=sharing',
	},
	{
		label: 'Illinois Grad College — CV tips & samples',
		href: 'https://grad.illinois.edu/document/student-success/curriculum-vitae-tips-and-samples',
	},
	{
		label: 'YouTube — CV tips',
		href: 'https://www.youtube.com/watch?v=owiejvTlZko&t=1s',
	},
	{
		label: 'YouTube — CV tips 2',
		href: 'https://www.youtube.com/watch?v=3bk96aEu0pA&t=1s',
	},
];

export const REFERENCE_GUIDES: AdviceLink[] = [
	{
		label: 'Recommendation letter guide',
		href: 'https://docs.google.com/document/d/1Mi7c37loGehwfZN3j09-QVs_TWlMjJcK/edit',
	},
	{
		label: 'Recommendation letter guide 2',
		href: 'https://docs.google.com/document/d/1ANVVR8QgAtuCqxCE4amBlUrh78v2W2qu/edit#bookmark=id.gjdgxs',
	},
	{
		label: 'Recommendation sample (Drive)',
		href: 'https://drive.google.com/file/d/1Y-1trO_FT7HsSuKb7ytBpMaweRxCNd8M/view?usp=sharing',
	},
	{
		label: 'Recommendation sample (Drive) 2',
		href: 'https://drive.google.com/file/d/1llnwZQ6fzh1Qe3sJf3NLXY_qn03tmLSJ/view?usp=sharing',
	},
];

export const VETTING_CHECKLIST = [
	'Eligibility',
	'Coverage (tuition / stipend / travel / insurance)',
	'Documents + deadlines',
	"Proof it's real (official site, past cohorts, verifiable contacts)",
] as const;
