import { useRouter } from 'next/router';
import Courses from "@/data/courses"

import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const CourseDetailsModules = dynamic(() => import('@/modules/CourseDetails'), {
  loading: () => <Preloader />,
});

export default function CourseDetails() {
	const router = useRouter();
	const { asPath } = router;
	const courseSlug = asPath.split('/')[2];

	const singleCourse = Courses.filter((course) => {
        return course.slug === courseSlug;
    });

	return (
		<main>
			<HeaderTwo />

			<CourseDetailsModules item={singleCourse[0]} />

			<Footer />
		</main>
	)
}
