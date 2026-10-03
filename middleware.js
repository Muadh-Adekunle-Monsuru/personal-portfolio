const SCHOLARSHIP_PATH = '/scholarship-advice';
const OG_IMAGE =
	'https://res.cloudinary.com/dzrkcnt5h/image/upload/v1791057766/Screenshot_from_2026-10-03_23-02-19_hkfdgn.png';
const OG_TITLE = 'Scholarship advice | Muadh Monsur';
const OG_DESCRIPTION =
	'A postgraduate roadmap from an Erasmus Mundus CyberMACS journey — documents, English tests, SOPs, discovery tips, and fully-funded pathway guidance.';
const SITE_URL = 'https://www.muadh.com.ng';

const BOT_UA =
	/facebookexternalhit|Facebot|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|TelegramBot|Pinterest|Googlebot|bingbot|Baiduspider|Embedly|Quora Link Preview|Showyoubot|outbrain|vkShare|W3C_Validator|redditbot|Applebot|DuckDuckBot/i;

export const config = {
	matcher: ['/scholarship-advice', '/scholarship-advice/'],
};

export default function middleware(request) {
	const ua = request.headers.get('user-agent') || '';
	if (!BOT_UA.test(ua)) {
		return;
	}

	const canonical = `${SITE_URL}${SCHOLARSHIP_PATH}`;

	const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${OG_TITLE}</title>
<meta name="description" content="${OG_DESCRIPTION}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Muadh Monsur" />
<meta property="og:title" content="${OG_TITLE}" />
<meta property="og:description" content="${OG_DESCRIPTION}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${OG_IMAGE}" />
<meta property="og:image:alt" content="Scholarship advice page preview" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${OG_TITLE}" />
<meta name="twitter:description" content="${OG_DESCRIPTION}" />
<meta name="twitter:image" content="${OG_IMAGE}" />
<link rel="canonical" href="${canonical}" />
</head>
<body>
<p><a href="${canonical}">${OG_TITLE}</a></p>
<p>${OG_DESCRIPTION}</p>
</body>
</html>`;

	return new Response(html, {
		headers: {
			'content-type': 'text/html; charset=utf-8',
			'cache-control': 'public, max-age=0, must-revalidate',
		},
	});
}
