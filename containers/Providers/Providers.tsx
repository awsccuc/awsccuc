'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute='class' defaultTheme='light'>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export default Providers;
