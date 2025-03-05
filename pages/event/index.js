
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const EventModules = dynamic(() => import('@/modules/Event'), {
  loading: () => <Preloader />,
});

export default function Event() {
	return (
		<main>
			<HeaderTwo />

			<EventModules />

			<Footer />
		</main>
	)
}
