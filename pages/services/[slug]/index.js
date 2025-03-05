import { useRouter } from 'next/router';
import Services from "@/data/services"

import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';	
import dynamic from 'next/dynamic'
 
const ServiceDetailsModules = dynamic(() => import('@/modules/ServiceDetails'), {
  loading: () => <Preloader />,
});

export default function ServiceDetails() {
	const router = useRouter();
	const { asPath } = router;
	const serviceSlug = asPath.split('/')[2];

	const singleService = Services.filter((service) => {
        return service.slug === serviceSlug;
    });

	return (
		<main>
			<HeaderTwo />

			<ServiceDetailsModules item={singleService[0]} />

			<Footer />
		</main>
	)
}
