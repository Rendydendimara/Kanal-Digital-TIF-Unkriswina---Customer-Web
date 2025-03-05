import Banner from '../HomeFive/Banner';
import Feature from '../HomeFive/Feature';
import About from '../HomeFive/About';
import Funfact from '../HomeFive/Funfact';
import ClassArea from '../HomeFive/ClassArea';
import Video from '../HomeFive/Video';
import Testimonial from '../HomeFive/Testimonial';
import Team from '../HomeFive/Team';
import Faq from '../HomeFive/Faq';
import Contact from '../HomeFive/Contact';
import Gallery from '../HomeFive/Gallery';
import Blog from '../HomeFive/Blog';
import ScrollTop from '@/components/ScrollTop';

export default function OnepageHomeFiveModules() {
  return (
    <main>
      <Banner />
      <Feature />
      <About />
      <Funfact />
      <ClassArea />
      <Video />
      <Testimonial />
      <Team />
      <Faq />
      <Contact />
      <Gallery />
      <Blog />
      <ScrollTop />
    </main>
  );
}
