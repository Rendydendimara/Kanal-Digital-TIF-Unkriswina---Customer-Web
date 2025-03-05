import { useRouter } from 'next/router';
import Teachers from "@/data/teachers"
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const TeacherDetailsModules = dynamic(() => import('@/modules/TeacherDetails'), {
  loading: () => <Preloader />,
});

export default function TeacherDetails() {
	const router = useRouter();
	const { asPath } = router;
	const teacherSlug = asPath.split('/')[2];

	const singleTeacher = Teachers.filter((teacher) => {
        return teacher.slug === teacherSlug;
    });

	return (
		<main>
			<HeaderTwo />

			<TeacherDetailsModules item={singleTeacher[0]} />

			<Footer />
		</main>
	)
}
