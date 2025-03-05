
import Footer from '@/components/Footer';
import HeaderThree from '@/components/Header/HeaderThree';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const OnepageHomeThreeModules = dynamic(() => import('@/modules/OnepageHomeThree'), {
  loading: () => <Preloader />,
});

export default function OnepageHomeThree() {
	return (
		<main>
			<HeaderThree menuFormat="onepage3" />

			<OnepageHomeThreeModules />

			<Footer 
				footerLogo="logo-yellow.png"
			/>
		</main>
	)
}
