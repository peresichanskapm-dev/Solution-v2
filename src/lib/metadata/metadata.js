const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solution-site.com";

export const baseMetadata = {
	title: "SOLUTION | State Shift Audio Programs",
	description: "SOLUTION - state-shift audio programs for a gentle psycho-spiritual reset in 5-12 minutes.",

	metadataBase: new URL(siteUrl),

	applicationName: "SOLUTION",
	creator: "Olena Tretyak",
	authors: [
		{
			name: "Olena Tretyak",
			url: "https://www.instagram.com/elenatretyakova/",
		},
	],

	keywords: [
		"SOLUTION",
		"state shift",
		"audio program",
		"guided audio",
		"focus reset",
		"somatic reset",
		"mental clarity",
		"stress recovery",
		"wellbeing",
	],

	category: "health",

	alternates: {
		canonical: "/",
		languages: {
			uk: "/",
		},
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},

	openGraph: {
		title: "SOLUTION | State Shift Audio Programs",
		description: "State-shift audio programs to restore energy, inner center, and clarity in 5-12 minutes.",
		url: "/",
		siteName: "SOLUTION",
		locale: "uk_UA",
		type: "website",
		images: [
			{
				url: "/media/home/heroPhoto.png",
				width: 1390,
				height: 1390,
				alt: "SOLUTION - state-shift audio programs",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "SOLUTION | State Shift Audio Programs",
		description: "SOLUTION audio programs for a gentle reset in 5-12 minutes.",
		images: ["/media/home/heroPhoto.png"],
	},

	icons: {
		icon: [
			{
				url: "/media/home/favicon.png",
				sizes: "128x128",
				type: "image/png",
			},
		],
		apple: [
			{
				url: "/media/home/favicon.png",
				sizes: "128x128",
				type: "image/png",
			},
		],
		shortcut: "/media/home/favicon.png",
	},
};

export function buildMetadata(overrides = {}) {
	const { openGraph, twitter, icons, alternates, robots, ...rest } = overrides;

	return {
		...baseMetadata,
		...rest,

		alternates: {
			...baseMetadata.alternates,
			...alternates,
		},

		robots: {
			...baseMetadata.robots,
			...robots,
		},

		openGraph: {
			...baseMetadata.openGraph,
			...openGraph,
			images: openGraph?.images ?? baseMetadata.openGraph.images,
		},

		twitter: {
			...baseMetadata.twitter,
			...twitter,
			images: twitter?.images ?? baseMetadata.twitter.images,
		},

		icons: {
			...baseMetadata.icons,
			...icons,
		},
	};
}
