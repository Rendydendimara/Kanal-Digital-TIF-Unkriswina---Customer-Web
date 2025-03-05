import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const StudentRegistrationTwoModules = dynamic(() => import('@/modules/StudentRegistrationTwo'), {
  loading: () => <Preloader />,
});

export default function StudentRegistrationTwo() {
	return (
		<main>
			<HeaderTwo />

			<StudentRegistrationTwoModules />

			<Footer />
		</main>
	)
}
