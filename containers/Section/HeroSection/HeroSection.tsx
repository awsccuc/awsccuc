import Link from 'next/link';
import { RiSparkling2Fill } from 'react-icons/ri';
import accounts from '@/sources/accounts';

function HeroSection() {
	return (
		<section className='min-h-screen w-screen bg-nature bg-center bg-no-repeat bg-cover'>
			<div className='flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 lg:p-24 outline min-h-screen gap-8'>
				<div className='flex items-center gap-2 backdrop-blur-sm bg-white/90 rounded-xl py-2 px-8 drop-shadow-md'>
					<span>
						<RiSparkling2Fill />
					</span>
					<Link
						href={
							'https://www.facebook.com/awsccpnc/posts/pfbid06JLpassZuGMngWR8R6GdTkHRzyJGdtaNxDoWASwgKTs7bv2EpnnwuHs3gRHeWjZal'
						}
						className='text-xl font-bold tracking-tight'
					>
						Skill Builders out now
					</Link>
					<span>
						<RiSparkling2Fill />
					</span>
				</div>
				<div>
					<h1 className='text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight uppercase text-center text-balance drop-shadow-xl'>
						A passionate club in the vast jungle of opportunities within the AWS
						ecosystem
					</h1>
				</div>
				<div className='flex gap-8 md:gap-10 py-2 px-8'>
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