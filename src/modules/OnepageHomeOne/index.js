import Banner from '../HomeOne/Banner';
import Category from '../HomeOne/Category';
import Course from '../HomeOne/Course';
import About from '../HomeOne/About';
import Video from '../HomeOne/Video';
import Service from '../HomeOne/Service';
import Funfact from '../HomeOne/Funfact';
import Testimonial from '../HomeOne/Testimonial';
import Team from '../HomeOne/Team';
import Career from '../HomeOne/Career';
import Blog from '../HomeOne/Blog';
import Newsletter from '@/components/Newsletter';
import ScrollTop from '@/components/ScrollTop';

export default function OnepageHomeOneModules() {
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
