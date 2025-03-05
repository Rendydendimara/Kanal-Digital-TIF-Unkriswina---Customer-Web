import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const StudentRegistrationModules = dynamic(() => import('@/modules/StudentRegistration'), {
  loading: () => <Preloader />,
});

export default function StudentRegistration() {
	return (
		<main>
			<HeaderTwo />

			<StudentRegistrationModules />

			<Footer />
		</main>
	)
}
