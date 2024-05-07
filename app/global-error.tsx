'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';

function GlobalError() {
	return (
		<section className='min-h-screen duration-300 bg-[#5CB253]'>
			<div className='flex flex-col justify-center items-center min-h-screen backdrop-blur-sm bg-white/10 gap-16'>
				<div className='flex flex-col'>
					<h1 className='text-white drop-shadow-xl text-6xl sm:text-8xl md:text-9xl lg:text-heading-one-large text-center leading-none font-extrabold tracking-tighter text-balance'>
						Error
					</h1>
				</div>

				<div className='flex justify-center'>
					<Button
						as={Link}
						href='/'
						className='text-2xl p-8 font-extrabold bg-white'
					>
						Go Back Home
					</Button>
				</div>
			</div>
		</section>
	);
}

export default GlobalError;
