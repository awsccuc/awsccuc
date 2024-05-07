import Image from 'next/image';

function AboutSection() {
	return (
		<section
			className='min-h-screen w-screen p-8 sm:p-12 md:p-16 lg:p-24 flex items-center bg-[#DBEF3B]'
			id='about'
		>
			<div className='flex flex-col gap-8 sm:gap-12 md:gap-16 pt-6 sm:pt-12 md:pt-16'>
				<div>
					<h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-md text-center tracking-tight text-balance'>
						Fueled by passion, we embark on an exhilarating journey through the
						expansive jungle of possibilities
					</h2>
				</div>

				<div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-8'>
					<Image
						className='w-full aspect-auto shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-adviser.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-mascot.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-auto shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-abstract-light-green.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-core-values.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-labor-day.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-auto shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-stickers.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-inauguration.png'
						width={1000}
						height={1000}
						alt=''
					/>

					<Image
						className='w-full aspect-auto shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-cover.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-auto shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-laptop.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-auto shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-header.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-quality-policy.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-lunar-new-year.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-mission-vision.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-skill-builders-dp-blast.jpg'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-auto shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-abstract-green-white.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-logo.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-valentines.png'
						width={1000}
						height={1000}
						alt=''
					/>

					<Image
						className='w-full aspect-video shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-abstract-moss.png'
						width={1000}
						height={1000}
						alt=''
					/>
					<Image
						className='w-full aspect-square shadow-lg pointer-events-none mb-4 sm:mb-8 rounded-3xl md:rounded-xl'
						src='/images/aws-quality-objectives.png'
						width={1000}
						height={1000}
						alt=''
					/>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
