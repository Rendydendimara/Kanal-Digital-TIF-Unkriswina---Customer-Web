import BreadCrumbs from "@/components/BreadCrumbs"
import CourseArea from "./CourseArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function CourseModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Course"
				subTitle="Course"
			/>
			<CourseArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
