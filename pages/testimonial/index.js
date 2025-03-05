import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic';
 
const TestimonialModules = dynamic(() => import('@/modules/Testimonial'), {
  loading: () => <Preloader />,
});

export default function Testimonial() {
	return (
		<main>
			<HeaderTwo />

			<TestimonialModules />

			<Footer />
		</main>
	)
}
