import Banner from './Banner';
import Category from './Category';
import Course from './Course';
import About from './About';
import Video from './Video';
import Service from './Service';
import Funfact from './Funfact';
import Testimonial from './Testimonial';
import Team from './Team';
import Career from './Career';
import Blog from './Blog';
import Newsletter from '@/components/Newsletter';
import ScrollTop from '@/components/ScrollTop';

export default function HomeOneModules() {
  return (
    <main>
      <Banner />
      <Category />
      <Course />
      <About />
      <Video />
      <Service />
      <Funfact />
      <Testimonial />
      <Team />
      <Career />
      <Blog />
      <Newsletter />
      <ScrollTop />
    </main>
  );
}
