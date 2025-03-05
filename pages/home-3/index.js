
import Footer from '@/components/Footer';
import HeaderThree from '@/components/Header/HeaderThree';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const HomeThreeModules = dynamic(() => import('@/modules/HomeThree'), {
  loading: () => <Preloader />,
});

export default function HomeThree() {
	return (
		<main>
			<HeaderThree />

			<HomeThreeModules />

			<Footer 
				footerLogo="logo-yellow.png"
			/>
		</main>
	)
}
