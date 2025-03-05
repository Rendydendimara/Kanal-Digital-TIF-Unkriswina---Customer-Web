import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const HomeOneModules = dynamic(() => import('@/modules/HomeOne'), {
  loading: () => <Preloader />,
});


export default function Home() {

	return (
		<main>
			<Header />
			
			<HomeOneModules />
			
			<Footer />
		</main>
	)
}
