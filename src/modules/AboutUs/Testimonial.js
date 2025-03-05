import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import SingleTestimonial from '@/components/Testimonial';
import Testimonials from '@/data/testimonials';

const Testimonial = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const sliderSettings = {
    asNavFor: nav2,
    ref: slider1,
    dots: false,
    arrows: false,
    infinite: true,
    margin: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderNavSettings = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    margin: 10,
    vertical: true,
    arrows: true,
    focusOnSelect: true,
    centerPadding: '0',
    verticalSwiping: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          vertical: false,
          centerMode: false,
        },
      },
    ],
  };

  const testimonialStyle = {
    backgroundImage: `url('/img/testimonial/testimonial-bg.jpg')`,
  };

  return (
    <div
      className="it-testimonial-area it-testimonial-ptb it-testimonial-bg fix p-relative"
      style={testimonialStyle}
    >
      <div className="it-testimonial-shape-1 d-none d-xl-block">
        <Image
          src="/img/testimonial/shape-2-1.png"
          width={641}
          height={610}
          alt=""
          style={{ height: 'auto' }}
        />
      </div>
      <div className="container">
        <div className="it-testimonial-title-wrap mb-60">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-8 col-md-9 col-sm-8">
              <div className="it-testimonial-title-box">
                <span className="it-section-subtitle">testimonial</span>
                <h4 className="it-section-title">
                  Creating A Community Of Life Long
                  <span className="p-relative z-index">
                    {' '}
                    Learners.
                    <svg
                      className="title-shape-3"
                      width="169"
                      height="65"
                      viewBox="0 0 169 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M73.9865 8.52241C79.0935 6.03398 83.1809 4.26476 89.5018 3.31494C94.8148 2.51659 100.239 2.08052 105.59 1.95274C121.035 1.5839 135.743 4.94481 147.12 9.7789C159.246 14.931 167.348 22.7171 166.701 31.8511C165.923 42.8363 151.983 52.0035 134.146 57.1364C110.893 63.8284 82.3457 64.1305 59.197 61.1289C38.1374 58.3982 12.2599 51.9446 4.20444 40.1836C-2.8133 29.9382 12.6851 18.2085 28.1538 11.6691C40.9733 6.24978 56.315 2.97602 71.4123 4.09034C82.5481 4.91227 93.8269 6.91079 103.074 10.0494C113.489 13.5844 120.759 18.7016 128.482 23.7722"
                        stroke="#0AB99D"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-3 col-sm-4">
              <div className="it-testimonial-arrow text-end"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-testimonial-slide-wrap p-relative">
              <div className="it-testimonial-slide-quote d-none d-xl-block">
                <i className="fa-sharp fa-solid fa-quote-right"></i>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <Slider
                    {...sliderNavSettings}
                    className="it-testimonial-slide-nav-active text-center"
                  >
                    <div className="it-testimonial-nav-item">
                      <div className="it-testimonial-nav-thumb">
                        <Image
                          src="/img/avatar/avatar-1.png"
                          width={60}
                          height={60}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="it-testimonial-nav-item">
                      <div className="it-testimonial-nav-thumb">
                        <Image
                          src="/img/avatar/avatar-1.png"
                          width={60}
                          height={60}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="it-testimonial-nav-item">
                      <div className="it-testimonial-nav-thumb">
                        <Image
                          src="/img/avatar/avatar-1.png"
                          width={60}
                          height={60}
                          alt=""
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <Slider
                    {...sliderSettings}
                    className="it-testimonial-slide-active"
                  >
                    {Testimonials.map((testimonial) => {
                      return (
                        <SingleTestimonial
                          Slug={testimonial.slug}
                          authorName={testimonial.title}
                          authorImg={testimonial.image}
                          designation={testimonial.designation}
                          description={testimonial.description}
                        />
                      );
                    }).slice(0, 6)}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
