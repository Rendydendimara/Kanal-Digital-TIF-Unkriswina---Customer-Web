import BreadCrumbs from "@/components/BreadCrumbs"
import TestimonialArea from "./TestimonialArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function TestimonialModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Testimonial"
				subTitle="Testimonial"
			/>
			<TestimonialArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
