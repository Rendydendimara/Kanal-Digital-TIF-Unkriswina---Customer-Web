import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const TeacherModules = dynamic(() => import('@/modules/Teacher'), {
  loading: () => <Preloader />,
});

export default function Teacher() {
	return (
		<main>
			<HeaderTwo />

			<TeacherModules />

			<Footer />
		</main>
	)
}
