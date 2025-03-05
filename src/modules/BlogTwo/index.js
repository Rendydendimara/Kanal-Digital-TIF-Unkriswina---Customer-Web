import BreadCrumbs from "@/components/BreadCrumbs"
import BlogArea from "./BlogArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function BlogTwoModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Blog Two"
				subTitle="Blog"
			/>
			<BlogArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
