import BlogArea from "./BlogArea"
import Newsletter from "@/components/Newsletter"
import BreadCrumbs from "@/components/BreadCrumbs"
import ScrollTop from "@/components/ScrollTop"

export default function BlogModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Blog"
				subTitle="Blog"
			/>
			<BlogArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
