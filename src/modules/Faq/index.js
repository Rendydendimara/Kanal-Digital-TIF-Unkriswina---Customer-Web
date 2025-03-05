import BreadCrumbs from "@/components/BreadCrumbs"
import FaqArea from "./FaqArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function FaqModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Faq"
				subTitle="Faq"
			/>
			<FaqArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
