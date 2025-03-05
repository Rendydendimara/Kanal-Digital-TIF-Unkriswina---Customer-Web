import BreadCrumbs from "@/components/BreadCrumbs"
import PriceArea from "./PriceArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function PriceModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Price"
				subTitle="Price"
			/>
			<PriceArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
