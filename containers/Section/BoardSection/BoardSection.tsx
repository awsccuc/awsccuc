import { Card, Image } from '@nextui-org/react';

import board from '@/sources/board';

function BoardSection() {
	return (
		<section className='min-h-screen w-screen p-8 sm:p-12 md:p-16 lg:p-24 flex items-center bg-[#5CB253]'>
			<div className='flex flex-col gap-6 sm:gap-12 md:gap-16 pt-6 sm:pt-12 md:pt-16'>
				<div>
					<h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-md text-center tracking-tight text-balance'>
						Driven by passion, our board members lead us on an exciting
						expedition through the vast wilderness of opportunities
					</h2>
				</div>
				<div className='flex flex-row justify-center flex-wrap gap-6'>
					{board.map((board) => (
						<Card
							key={board.name}
							isFooterBlurred
							radius='lg'
							className='border-none z-0'
						>
							<Image
								alt='Woman listing to music'
								className='object-cover pointer-events-none'
								src={`/images/aws-${board.name}.png`}
								width={500}
								height={500}
							/>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

export default BoardSection;
