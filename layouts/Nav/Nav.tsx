import { FaHome, FaNewspaper, FaSignal } from 'react-icons/fa';

import Link from 'next/link';
import { FaUserGroup } from 'react-icons/fa6';

function Nav() {
	return (
		<nav className='fixed pt-6 w-full z-10'>
			<div className='flex justify-evenly items-center rounded-xl w-[92%] md:w-[75%] mx-auto py-4 px-2 backdrop-blur-sm bg-white/90 shadow-sm'>
				<Link href='/'>
					<span className='text-center font-extrabold text-2xl hover:text-[#01E58B]'>
						<span className='hidden sm:block'>home</span>
						<span className='block sm:hidden'>
							<FaHome />
						</span>
					</span>
				</Link>
				<Link href='#about'>
					<span className='text-center font-extrabold text-2xl hover:text-[#01E58B]'>
						<span className='hidden sm:block'>about</span>
						<span className='block sm:hidden'>
							<FaUserGroup />
						</span>
					</span>
				</Link>
				<Link href='/'>
					<span className='text-center font-extrabold text-2xl hover:text-[#01E58B]'>
						<span className='hidden sm:block'>news</span>
						<span className='block sm:hidden'>
							<FaNewspaper />
						</span>
					</span>
				</Link>
				<Link href='/'>
					<span className='text-center font-extrabold text-2xl hover:text-[#01E58B]'>
						<span className='hidden sm:block'>connect</span>
						<span className='block sm:hidden'>
							<FaSignal />
						</span>
					</span>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
