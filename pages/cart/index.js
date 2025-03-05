import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Preloader from '@/components/Preloader';
import dynamic from 'next/dynamic';

const CartModules = dynamic(() => import('@/modules/Cart'), {
  loading: () => <Preloader />,
});

export default function Cart() {
  return (
    <main>
      <HeaderTwo />

      <CartModules />

      <Footer />
    </main>
  );
}
