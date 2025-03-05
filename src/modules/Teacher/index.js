import BreadCrumbs from "@/components/BreadCrumbs"
import TeacherArea from "./TeacherArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function TeacherModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Teacher"
				subTitle="Teacher"
			/>
			<TeacherArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
