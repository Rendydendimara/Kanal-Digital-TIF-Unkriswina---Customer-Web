import BreadCrumbs from "@/components/BreadCrumbs"
import CourseTwoArea from "./CourseTwoArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function CourseTwoModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Course Two"
				subTitle="Course"
			/>
			<CourseTwoArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
