import BreadCrumbs from "@/components/BreadCrumbs"
import SignUpArea from "./SignUpArea"
import Newsletter from "@/components/Newsletter"

export default function SignUpModules() {
	return (
		<main>
			<BreadCrumbs
				Title="SignUp"
				subTitle="SignUp"
			/>
			<SignUpArea />
			<Newsletter />
		</main>
	)
}
