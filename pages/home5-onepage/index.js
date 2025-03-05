
import Footer from '@/components/Footer';
import HeaderFive from '@/components/Header/HeaderFive';
import dynamic from 'next/dynamic'
 
const OnepageHomeFiveModules = dynamic(() => import('@/modules/OnepageHomeFive'), {
  loading: () => <Preloader />,
});

export default function OnepageHomeFive() {
	return (
		<main>
			<HeaderFive menuFormat="onepage5" />

			<OnepageHomeFiveModules />

			<Footer 
				footerLogo="logo-yellow.png"
			/>
		</main>
	)
}
