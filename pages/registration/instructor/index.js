import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const InstructorRegistrationModules = dynamic(() => import('@/modules/InstructorRegistration'), {
  loading: () => <Preloader />,
});

export default function InstructorRegistration() {
	return (
		<main>
			<HeaderTwo />

			<InstructorRegistrationModules />

			<Footer />
		</main>
	)
}
