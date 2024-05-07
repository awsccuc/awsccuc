import AboutSection from '@/containers/Section/AboutSection/AboutSection';
import BoardSection from '@/containers/Section/BoardSection/BoardSection';
import HeroSection from '@/containers/Section/HeroSection/HeroSection';

function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<BoardSection />
		</>
	);
}

export default Home;
