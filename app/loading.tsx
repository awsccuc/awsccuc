'use client';

import React from 'react';
import Splash from '@/components/Splash/Splash';

function Loading() {
	const [loading, setLoading] = React.useState(true);

	return (
		<section className='flex flex-col gap-6 px-4'>
			{loading && <Splash finishLoading={() => setLoading(false)} />}
		</section>
	);
}

export default Loading;
