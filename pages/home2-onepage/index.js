import HeaderTwo from '@/components/Header/HeaderTwo';
import FooterTwo from '@/components/Footer/FooterTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const OnepageHomeTwoModules = dynamic(() => import('@/modules/OnepageHomeTwo'), {
  loading: () => <Preloader />,
});

export default function OnepageHomeTwo() {
	return (
		<main>
			<HeaderTwo menuFormat="onepage2" />

			<OnepageHomeTwoModules />

			<FooterTwo />
		</main>
	)
}
