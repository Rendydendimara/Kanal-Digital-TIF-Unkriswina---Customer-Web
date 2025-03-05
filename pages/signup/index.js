
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const SignUpModules = dynamic(() => import('@/modules/Signup'), {
  loading: () => <Preloader />,
});

export default function SignUp() {
	return (
		<main>
			<HeaderTwo />

			<SignUpModules />

			<Footer />
		</main>
	)
}
