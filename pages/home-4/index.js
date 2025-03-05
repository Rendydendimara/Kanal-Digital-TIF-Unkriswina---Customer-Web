
import Footer from '@/components/Footer';
import HeaderFour from '@/components/Header/HeaderFour';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const HomeFourModules = dynamic(() => import('@/modules/HomeFour'), {
  loading: () => <Preloader />,
});

export default function HomeFour() {
	return (
		<main>
			<HeaderFour />

			<HomeFourModules />

			<Footer 
				footerLogo="logo-yellow.png"
			/>
		</main>
	)
}
