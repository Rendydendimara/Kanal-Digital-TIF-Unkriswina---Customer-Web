
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CourseModules = dynamic(() => import('@/modules/Course'), {
  loading: () => <Preloader />,
});

export default function Course() {
	return (
		<main>
			<HeaderTwo />

			<CourseModules />

			<Footer />
		</main>
	)
}
