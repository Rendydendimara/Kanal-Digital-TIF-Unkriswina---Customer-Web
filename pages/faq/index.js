
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const FaqModules = dynamic(() => import('@/modules/Faq'), {
  loading: () => <Preloader />,
});

export default function Faq() {
	return (
		<main>
			<HeaderTwo />

			<FaqModules />

			<Footer />
		</main>
	)
}
