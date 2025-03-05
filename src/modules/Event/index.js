import BreadCrumbs from "@/components/BreadCrumbs"
import EventArea from "./EventArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function EventModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Event"
				subTitle="Event"
			/>
			<EventArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
