
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CourseTwoModules = dynamic(() => import('@/modules/CourseTwo'), {
  loading: () => <Preloader />,
});

export default function Course() {
	return (
		<main>
			<HeaderTwo />

			<CourseTwoModules />

			<Footer />
		</main>
	)
}
