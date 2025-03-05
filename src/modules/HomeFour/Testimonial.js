import SingleTestimonialThree from '@/components/Testimonial/Three';
import Image from 'next/image';
import Slider from 'react-slick';
import Testimonials from '@/data/testimonials';

export default function Testimonial() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    margin: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div
      id="it-testimonial"
      className="it-testimonial-3-area it-testimonial-4-style theme-bg-3"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-4 d-none d-lg-block">
            <div className="it-testimonial-3-thumb">
              <Image
                src="/img/testimonial/thumb-2.png"
                alt=""
                width={649}
                height={800}
                style={{ height: 'auto' }}
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className="it-testimonial-3-box z-index p-relative">
              <div className="it-testimonial-3-shape-1">
                <Image
                  src="/img/testimonial/shape-3-1.png"
                  alt=""
                  width={314}
                  height={296}
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-testimonial-3-wrapper white-bg p-relative">
                <div className="it-testimonial-3-quote">
                  <Image
                    src="/img/testimonial/quot.png"
                    alt=""
                    width={23}
                    height={23}
                  />
                </div>
                <div className="swiper-container it-testimonial-3-active">
                  <Slider {...sliderSettings} className="swiper-wrapper">
                    {Testimonials.map((testimonial) => {
                      return (
                        <div key={testimonial.id} className="swiper-slide">
                          <SingleTestimonialThree
                            Slug={testimonial.slug}
                            authorName={testimonial.title}
                            authorImg={testimonial.image}
                            designation={testimonial.designation}
                            description={testimonial.description}
                          />
                        </div>
                      );
                    }).slice(0, 6)}
                  </Slider>
                </div>
                <div className="test-slider-dots"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
