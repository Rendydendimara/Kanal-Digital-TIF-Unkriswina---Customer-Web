import BreadCrumbs from "@/components/BreadCrumbs"
import BlogDetailsArea from "./BlogDetailsArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function BlogDetailsModules(singleBlog) {
	return (
		<main>
			<BreadCrumbs
				Title="Blog Details"
				subTitle="Blog"
			/>
			<BlogDetailsArea item={singleBlog.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
