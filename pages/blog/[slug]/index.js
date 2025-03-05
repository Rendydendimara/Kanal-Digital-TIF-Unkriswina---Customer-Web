
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Blogs from "@/data/blogs"
import { useRouter } from 'next/router';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const BlogDetailsModules = dynamic(() => import('@/modules/BlogDetails'), {
  loading: () => <Preloader />,
});

export default function BlogDetails() {
	const router = useRouter();
	const { asPath } = router;
	const blogSlug = asPath.split('/')[2];

	const singleBlog = Blogs.filter((blog) => {
        return blog.slug === blogSlug;
    });

	return (
		<main>
			<HeaderTwo />

			<BlogDetailsModules item={singleBlog[0]} />

			<Footer />
		</main>
	)
}
