import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceThreeModules = dynamic(() => import('@/modules/ServiceThree'), {
  loading: () => <Preloader />,
});

export default function ServiceThree() {
	return (
		<main>
			<HeaderTwo />

			<ServiceThreeModules />

			<Footer />
		</main>
	)
}
