import accounts from '@/sources/accounts';
import Link from 'next/link';
import { RiSparkling2Fill } from 'react-icons/ri';

function HeroSection() {
	return (
		<section className='min-h-screen w-screen bg-nature bg-center bg-no-repeat bg-cover'>
			<div className='flex flex-col items-center justify-center sm:p-8 md:p-16 lg:p-24 min-h-screen gap-10 md:gap-12'>
				<div className='flex items-center gap-2 backdrop-blur-sm bg-white/90 rounded-xl py-3 sm:py-2 px-8 drop-shadow-md'>
					<span>
						<RiSparkling2Fill />
					</span>
					<Link
						href={
							'https://www.facebook.com/awsccpnc/posts/pfbid06JLpassZuGMngWR8R6GdTkHRzyJGdtaNxDoWASwgKTs7bv2EpnnwuHs3gRHeWjZal'
						}
						className='text-lg md:text-xl font-bold tracking-tight text-center leading-none'
					>
						Skill Builders out now
					</Link>
					<span>
						<RiSparkling2Fill />
					</span>
				</div>
				<div className='sm:w-9/12'>
					<h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight uppercase text-center text-balance drop-shadow-md'>
						A Cloud Club From Cabuyao
					</h1>
				</div>
				<div className='w-10/12 sm:w-9/12'>
					<p className='text-xl font-light text-white tracking-tight text-center text-balance drop-shadow-md'>
						A passionate club in the vast jungle of opportunities within the AWS
						ecosystem
					</p>
				</div>
				<div className='flex gap-6 sm:gap-8 md:gap-10 py-2 px-8'>
					{accounts.map((account) => {
						return (
							<Link
								key={account.url}
								href={account.url}
								target='_blank'
								className={`text-3xl sm:text-4xl md:text-5xl hover:text-[#01E58B] text-white`}
							>
								<account.icon />
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
