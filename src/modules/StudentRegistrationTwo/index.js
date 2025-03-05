import BreadCrumbs from "@/components/BreadCrumbs"
import RegistrationArea from "./RegistrationArea"
import Newsletter from "@/components/Newsletter"

export default function StudentRegistrationTwoModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Student Registration Two"
				subTitle="Registration"
			/>
			<RegistrationArea />
			<Newsletter />
		</main>
	)
}
