import Image from 'next/image';
import Slider from 'react-slick';
import SingleTestimonialTwo from '@/components/Testimonial/Two';
import Testimonials from '@/data/testimonials';

export default function Testimonial() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    margin: 30,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="it-testimonial-5-area it-testimonial-style-2 p-relative pt-120 pb-120">
      <div className="it-testimonial-5-shape-5 d-none d-xl-block">
        <Image
          src="/img/testimonial/shape-5-6.png"
          width={63}
          height={63}
          alt=""
        />
      </div>
      <div className="it-testimonial-5-shape-6 d-none d-xl-block">
        <Image
          src="/img/testimonial/shape-5-7.png"
          width={176}
          height={168}
          alt=""
        />
      </div>
      <div className="it-testimonial-5-shape-7 d-none d-xl-block">
        <Image
          src="/img/testimonial/shape-5-8.png"
          width={102}
          height={50}
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-testimonial-5-title-box text-center mb-60">
              <span className="it-section-subtitle-2">Testimonial</span>
              <h4 className="it-section-title-5">
                Creating A Community Of <br />
                Life Long Learners.
              </h4>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="it-testimonial-5-wrapper p-relative">
              <div className="slider-container it-testimonial-5-active">
                <Slider {...sliderSettings}>
                  {Testimonials.map((testimonial) => {
                    return (
                      <div key={testimonial.id} className="single-slide">
                        <SingleTestimonialTwo
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
