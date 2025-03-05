import BreadCrumbs from "@/components/BreadCrumbs"
import CheckoutArea from "./CheckoutArea"
import Newsletter from "@/components/Newsletter"
import Cupon from "./Cupon"
import ScrollTop from "@/components/ScrollTop"

export default function CheckoutModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Checkout"
				subTitle="Checkout"
			/>
			<Cupon />
			<CheckoutArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
