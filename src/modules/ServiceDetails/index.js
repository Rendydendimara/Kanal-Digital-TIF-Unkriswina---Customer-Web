import BreadCrumbs from "@/components/BreadCrumbs"
import ServiceDetailsArea from "./ServiceDetailsArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ServiceDetailsModules(singleService) {
	return (
		<main>
			<BreadCrumbs
				Title="Service Details"
				subTitle="Service"
			/>
			<ServiceDetailsArea item={singleService.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
