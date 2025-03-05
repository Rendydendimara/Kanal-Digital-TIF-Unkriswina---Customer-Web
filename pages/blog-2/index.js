
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const BlogTwoModules = dynamic(() => import('@/modules/BlogTwo'), {
  loading: () => <Preloader />,
});

export default function Blog() {
	return (
		<main>
			<HeaderTwo />

			<BlogTwoModules />

			<Footer />
		</main>
	)
}
