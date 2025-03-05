import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const OnepageHomeOneModules = dynamic(() => import('@/modules/OnepageHomeOne'), {
  loading: () => <Preloader />,
});

export default function OnepageHomeOne() {
	return (
		<main>
			<Header menuFormat="onepage1" />

			<OnepageHomeOneModules />

			<Footer />
		</main>
	)
}
