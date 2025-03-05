import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ContactModules = dynamic(() => import('@/modules/Contact'), {
  loading: () => <Preloader />,
});

export default function Contact() {
	return (
		<main>
			<HeaderTwo />

			<ContactModules />

			<Footer />
		</main>
	)
}
