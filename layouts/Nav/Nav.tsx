import Link from 'next/link';

function Nav() {
	return (
		<nav className='fixed pt-6 w-full z-10'>
			<div className='flex justify-evenly items-center rounded-xl w-[85%] md:w-[75%] mx-auto p-4 backdrop-blur-sm bg-white/90 shadow-sm'>
				<Link href='/'>
					<span className='text-center font-extrabold text-xl sm:text-2xl hover:text-[#01E58B]'>
						home
					</span>
				</Link>
				<Link href='#about'>
					<span className='text-center font-extrabold text-xl sm:text-2xl hover:text-[#01E58B]'>
						about
					</span>
				</Link>
				<Link href='/'>
					<span className='text-center font-extrabold text-xl sm:text-2xl hover:text-[#01E58B]'>
						news
					</span>
				</Link>
				<Link href='/'>
					<span className='text-center font-extrabold text-xl sm:text-2xl hover:text-[#01E58B]'>
						connect
					</span>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
