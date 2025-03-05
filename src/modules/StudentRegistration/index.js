import Image from "next/image"
import BreadCrumbs from "@/components/BreadCrumbs"
import RegistrationArea from "./RegistrationArea"
import Newsletter from "@/components/Newsletter"

export default function StudentRegistrationModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Student Registration"
				subTitle="Registration"
			/>
			<RegistrationArea />
			<Newsletter />
		</main>
	)
}
