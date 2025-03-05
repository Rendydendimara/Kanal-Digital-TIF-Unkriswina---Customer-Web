import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CheckoutModules = dynamic(() => import('@/modules/Checkout'), {
  loading: () => <Preloader />,
});

export default function Checkout() {
	return (
		<main>
			<HeaderTwo />

			<CheckoutModules />

			<Footer />
		</main>
	)
}
