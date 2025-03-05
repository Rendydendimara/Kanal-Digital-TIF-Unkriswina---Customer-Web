import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceTwoModules = dynamic(() => import('@/modules/ServiceTwo'), {
  loading: () => <Preloader />,
});

export default function ServiceTwo() {
	return (
		<main>
			<HeaderTwo />

			<ServiceTwoModules />

			<Footer />
		</main>
	)
}
