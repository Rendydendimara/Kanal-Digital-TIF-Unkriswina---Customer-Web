
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const BlogSidebarModules = dynamic(() => import('@/modules/BlogSidebar'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<HeaderTwo />

			<BlogSidebarModules />

			<Footer />
		</main>
	)
}
