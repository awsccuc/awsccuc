import { Metadata } from 'next';

export const metatags: Metadata = {
	metadataBase: new URL('https://aws.amazon.com'),
	title: 'AWS Cloud Club - University of Cabuyao',
	description: `Explore the vast jungle of opportunities and innovation within the AWS ecosystem!`,
	applicationName: 'awsccuc',
	generator: 'typescript, react, nextjs, tailwindcss',
	keywords: `awsccuc`,
	referrer: 'origin',
	themeColor: 'dark',
	colorScheme: 'dark',
	creator: 'AWS Cloud Club - University of Cabuyao',
	publisher: 'AWS Cloud Club - University of Cabuyao',
	robots: 'index, follow',
	alternates: {
		canonical: 'https://aws.amazon.com',
	},
	icons: '/images/aws-hebi.png',
	openGraph: {
		type: 'website',
		url: '',
		title: 'AWS Cloud Club - University of Cabuyao',
		description:
			'Explore the vast jungle of opportunities and innovation within the AWS ecosystem!',
		siteName: 'awsccuc',
		images: [
			{
				url: '/images/aws-cover.png',
			},
		],
	},
	twitter: {
		site: 'awsccuc',
		siteId: '',
		creator: 'AWS Cloud Club - University of Cabuyao',
		creatorId: '',
		description:
			'Explore the vast jungle of opportunities and innovation within the AWS ecosystem!',
		title: 'AWS Cloud Club - University of Cabuyao',
		images: [
			{
				url: '/images/aws-cover.png',
			},
		],
	},
	appleWebApp: {
		capable: true,
		title: 'AWS Cloud Club - University of Cabuyao',
		statusBarStyle: 'black-translucent',
	},
	formatDetection: {
		telephone: false,
	},
	abstract: 'AWS Cloud Club - University of Cabuyao',
	category: 'Cloud Computing',
	classification: 'AWS Cloud Club - University of Cabuyao',
};

export default metatags;
