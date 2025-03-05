
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const PriceModules = dynamic(() => import('@/modules/Price'), {
  loading: () => <Preloader />,
});

export default function Price() {
	return (
		<main>
			<HeaderTwo />

			<PriceModules />

			<Footer />
		</main>
	)
}
