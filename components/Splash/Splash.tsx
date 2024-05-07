'use client';

import React from 'react';
import anime from 'animejs';

const Splash = ({ finishLoading }: { finishLoading: () => void }) => {
	const [mounted, setMounted] = React.useState(false);

	const handleAnimate = () => {
		const loader = anime.timeline({
			complete: () => finishLoading(),
		});

		loader.add({
			targets: '#splash-container',
			delay: 0,
			scale: 1,
			duration: 3000,
			easing: 'easeInOutExpo',
		});
	};

	React.useEffect(() => {
		const timeout = setTimeout(() => setMounted(true), 3000);
		handleAnimate();
		return () => clearTimeout(timeout);
	});

	return (
		<div className='min-h-screen duration-300 bg-[#5CB253]'>
			<div
				className='flex flex-col justify-center items-center min-h-screen backdrop-blur-sm bg-white/10 gap-16'
				id='splash-container'
			>
				<div className='flex flex-col'>
					<h1 className='text-white drop-shadow-xl text-6xl sm:text-8xl md:text-9xl lg:text-heading-one-large text-center leading-none font-extrabold tracking-tighter text-balance'>
						AWSCC University of Cabuyao
					</h1>
				</div>

				<div className='flex justify-center w-9/12'>
					<div className='flex items-center gap-2 backdrop-blur-sm bg-white/90 rounded-xl py-2 px-16 drop-shadow-md'>
						<p className='text-2xl font-bold tracking-tight'>Loading</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Splash;
