
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const SignInModules = dynamic(() => import('@/modules/Signin'), {
  loading: () => <Preloader />,
});

export default function SignIn() {
	return (
		<main>
			<HeaderTwo />

			<SignInModules />

			<Footer />
		</main>
	)
}
