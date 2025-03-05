import BreadCrumbs from "@/components/BreadCrumbs"
import EventDetailsArea from "./EventDetailsArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function EventModules(singleEvent) {
	return (
		<main>
			<BreadCrumbs
				Title="Event Details"
				subTitle="Event"
			/>
			<EventDetailsArea item={singleEvent.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
