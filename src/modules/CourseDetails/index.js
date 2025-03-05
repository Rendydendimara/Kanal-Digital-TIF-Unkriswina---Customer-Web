import Newsletter from "@/components/Newsletter"
import BreadCrumbs from "@/components/BreadCrumbs"
import CourseDetailsArea from "./CourseDetailsArea"
import ScrollTop from "@/components/ScrollTop"

export default function CourseDetailsModules(singleCourse) {
	return (
		<main>
			<BreadCrumbs
				Title="Course Details"
				subTitle="Course"
			/>
			<CourseDetailsArea item={singleCourse.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
