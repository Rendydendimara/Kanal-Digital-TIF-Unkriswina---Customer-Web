import BreadCrumbs from "@/components/BreadCrumbs"
import SignInArea from "./SignInArea"
import Newsletter from "@/components/Newsletter"

export default function SignInModules() {
	return (
		<main>
			<BreadCrumbs
				Title="SignIn"
				subTitle="SignIn"
			/>
			<SignInArea />
			<Newsletter />
		</main>
	)
}
