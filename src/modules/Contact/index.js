import BreadCrumbs from "@/components/BreadCrumbs"
import ContactArea from "./ContactArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ContactModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Contact"
				subTitle="Contact"
			/>
			<ContactArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
