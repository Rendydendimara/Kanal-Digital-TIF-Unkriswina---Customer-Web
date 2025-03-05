
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const AboutUsModules = dynamic(() => import('@/modules/AboutUs'), {
  loading: () => <Preloader />,
});

export default function About() {
	return (
		<main>
			<HeaderTwo />

			<AboutUsModules />

			<Footer />
		</main>
	)
}
