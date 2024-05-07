'use client';

import React from 'react';
import Splash from '@/components/Splash/Splash';

function Content({ children }: { children: React.ReactNode }) {
	const [loading, setLoading] = React.useState(true);

	return (
		<>
			{loading && <Splash finishLoading={() => setLoading(false)} />}

			{!loading && <>{children}</>}
		</>
	);
}

export default Content;
