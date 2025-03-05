import SliderArea from '../HomeTwo/Slider';
import Feature from '../HomeTwo/Feature';
import About from '../HomeTwo/About';
import CTA from '../HomeTwo/CTA';
import Course from '../HomeTwo/Course';
import ChooseUs from '../HomeTwo/ChooseUs';
import Testimonial from '../HomeTwo/Testimonial';
import Video from '../HomeTwo/Video';
import Contact from '../HomeTwo/Contact';
import Brand from '../HomeTwo/Brand';
import Faq from '../HomeTwo/Faq';
import Blog from '../HomeTwo/Blog';
import Event from '../HomeTwo/Event';
import ScrollTop from '@/components/ScrollTop';

export default function OnepageHomeTwoModules() {
  return (
    <main>
      <SliderArea />
      <Feature />
      <About />
      <CTA />
      <Course />
      <ChooseUs />
      <Testimonial />
      <Video />
      <Contact />
      <Event />
      <Brand />
      <Faq />
      <Blog />
      <ScrollTop />
    </main>
  );
}
