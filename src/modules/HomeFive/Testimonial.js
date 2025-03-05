import SingleTestimonialFour from '@/components/Testimonial/Four';
import Image from 'next/image';
import Slider from 'react-slick';
import Testimonials from '@/data/testimonials';

export default function Testimonial() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    margin: 0,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      id="it-testimonial"
      className="it-testimonial-5-area p-relative pt-120 pb-120"
    >
      <div className="it-testimonial-5-shape-1 d-none d-xxl-block">
        <Image
          src="/img/testimonial/shape-5-2.png"
          alt=""
          width={124}
          height={122}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-testimonial-5-shape-2 d-none d-xl-block">
        <Image
          src="/img/testimonial/shape-5-3.png"
          alt=""
          width={100}
          height={72}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-testimonial-5-shape-3 d-none d-xl-block">
        <Image
          src="/img/testimonial/shape-5-4.png"
          alt=""
          width={121}
          height={96}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-testimonial-5-shape-4 d-none d-xxl-block">
        <Image
          src="/img/testimonial/shape-5-5.png"
          alt=""
          width={212}
          height={132}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-testimonial-5-title-box text-center mb-60">
              <span className="it-section-subtitle-5">
                <i className="fa-light fa-book"></i> Testimonial{' '}
                <i className="fa-light fa-book"></i>
              </span>
              <h4 className="it-section-title-5">what parents say</h4>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="it-testimonial-5-wrapper p-relative">
              <div className="swiper-container it-testimonial-5-active">
                <Slider {...sliderSettings} className="swiper-wrapper">
                  {Testimonials.map((testimonial) => {
                    return (
                      <div key={testimonial.id} className="swiper-slide">
                        <SingleTestimonialFour
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
