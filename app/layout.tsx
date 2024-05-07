import './globals.css';

import Content from '@/containers/Content/Content';
import type { Metadata } from 'next';
import Nav from '@/layouts/Nav/Nav';
import Providers from '@/containers/Providers/Providers';
import metatags from '@/configurations/metatags';
import { primaryFont } from '@/configurations/fonts';

export const metadata: Metadata = metatags;

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className='select-none no-scrollbar duration-1000 ease-linear transition'
		>
			<body className={primaryFont.className}>
				<Providers>
					<Content>
						<Nav />

						<main className='min-h-screen'>{children}</main>
					</Content>
				</Providers>
			</body>
		</html>
	);
}

export default RootLayout;
