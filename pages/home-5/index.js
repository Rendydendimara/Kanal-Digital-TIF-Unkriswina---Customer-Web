
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const HomeFiveModules = dynamic(() => import('@/modules/HomeFive'), {
  loading: () => <Preloader />,
});

export default function HomeFive() {
	return (
		<main>
			<HeaderFive />

			<HomeFiveModules />

			<Footer 
				footerLogo="logo-yellow.png"
			/>
		</main>
	)
}
