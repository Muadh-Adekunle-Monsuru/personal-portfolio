import { useEffect } from 'react';

type PageMeta = {
	title: string;
	description: string;
	image?: string;
	url?: string;
	type?: string;
};

function upsertMeta(
	attr: 'name' | 'property',
	key: string,
	content: string,
) {
	const selector = `meta[${attr}="${key}"]`;
	let el = document.head.querySelector(selector) as HTMLMetaElement | null;
	if (!el) {
		el = document.createElement('meta');
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute('content', content);
}

export function usePageMeta({
	title,
	description,
	image,
	url,
	type = 'website',
}: PageMeta) {
	useEffect(() => {
		const previousTitle = document.title;
		document.title = title;

		upsertMeta('name', 'description', description);
		upsertMeta('property', 'og:title', title);
		upsertMeta('property', 'og:description', description);
		upsertMeta('property', 'og:type', type);
		upsertMeta('name', 'twitter:card', 'summary_large_image');
		upsertMeta('name', 'twitter:title', title);
		upsertMeta('name', 'twitter:description', description);

		if (image) {
			upsertMeta('property', 'og:image', image);
			upsertMeta('name', 'twitter:image', image);
		}
		if (url) {
			upsertMeta('property', 'og:url', url);
		}

		return () => {
			document.title = previousTitle;
		};
	}, [title, description, image, url, type]);
}
