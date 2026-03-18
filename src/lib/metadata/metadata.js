export const baseMetadata = {
	title: "Next.js starter kit",
	description: "Next.js starter kit by Vladyslav Dubinin",

	metadataBase: new URL("https://vladyslav-dubin.in"),

	applicationName: "Next.js starter kit",
	creator: "Vladyslav Dubinin",
	authors: [
		{
			name: "Vladyslav Dubinin",
			url: "https://vladyslav-dubin.in",
		},
	],

	keywords: ["Next.js", "React", "Frontend", "Starter Kit", "Vladyslav Dubinin"],

	category: "technology",

	alternates: {
		canonical: "https://vladyslav-dubin.in",
		languages: {
			uk: "https://vladyslav-dubin.in",
			en: "https://vladyslav-dubin.in/en",
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
		title: "Next.js starter kit",
		description: "Next.js starter kit by Vladyslav Dubinin",
		url: "https://vladyslav-dubin.in",
		siteName: "Next.js starter kit",
		locale: "uk_UA",
		type: "website",
		images: [
			{
				url: "/media/metadata/banner.png",
				width: 768,
				height: 768,
				alt: "Next.js starter kit by Vladyslav Dubinin",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Next.js starter kit",
		description: "Next.js starter kit by Vladyslav Dubinin",
		images: ["/media/metadata/banner.png"],
	},

	themeColor: "#ffffff",

	icons: {
		icon: [
			{
				url: "/media/metadata/faviconMedium.png",
				sizes: "64x64",
				type: "image/png",
			},
		],
		apple: [
			{
				url: "/media/metadata/banner.png",
				sizes: "768x768",
			},
		],
		shortcut: "/media/metadata/favicon.png",
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
