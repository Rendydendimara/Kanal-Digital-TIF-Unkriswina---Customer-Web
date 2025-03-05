import Image from "next/image"
import BreadCrumbs from "@/components/BreadCrumbs"
import InstructorRegistrationArea from "./InstructorRegistrationArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function InstructorRegistrationModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Instruction Registration"
				subTitle="Registration"
			/>
			<InstructorRegistrationArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
