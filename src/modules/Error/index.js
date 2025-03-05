import BreadCrumbs from "@/components/BreadCrumbs"
import ErrorArea from "./ErrorArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ErrorModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Error"
				subTitle="Error"
			/>
			<ErrorArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
