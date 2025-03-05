import BreadCrumbs from "@/components/BreadCrumbs"
import CartArea from "./CartArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function CartModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Cart"
				subTitle="Cart"
			/>
			<CartArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
