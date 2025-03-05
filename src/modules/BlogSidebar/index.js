import BreadCrumbs from "@/components/BreadCrumbs"
import BlogArea from "./BlogArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function BlogSidebarModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Blog Sidebar"
				subTitle="Blog"
			/>
			<BlogArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
