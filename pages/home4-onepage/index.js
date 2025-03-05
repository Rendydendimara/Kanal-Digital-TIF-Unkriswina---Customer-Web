
import Footer from '@/components/Footer';
import HeaderFour from '@/components/Header/HeaderFour';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const OnepageHomeFourModules = dynamic(() => import('@/modules/OnepageHomeFour'), {
  loading: () => <Preloader />,
});

export default function OnepageHomeFour() {
	return (
		<main>
			<HeaderFour menuFormat="onepage4" />

			<OnepageHomeFourModules />

			<Footer 
				footerLogo="logo-yellow.png"
			/>
		</main>
	)
}
