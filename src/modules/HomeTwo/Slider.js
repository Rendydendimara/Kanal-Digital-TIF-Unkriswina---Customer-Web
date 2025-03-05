import React, { useState, useEffect, useRef } from 'react';
import ModalVideo from 'react-modal-video';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

function SliderArea() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

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
    arrows: false,
  };

  const sliderNavSettings = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className="it-slider-area fix">
      <div className="it-slider-wrap p-relative">
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="FdrNFEbcsRs"
          onClose={() => {
            openModal();
          }}
        />
        <Slider {...sliderSettings} className="it-slider-active">
          <div className="it-slider-bg it-slider-overlay d-flex align-items-center it-slider-height p-relative">
            <Image
              src="/img/slider/slider-1.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
            <div className="it-slider-shape-1 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-2.png"
                width={535}
                height={656}
                alt=""
              />
            </div>
            <div className="it-slider-shape-2 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-1.png"
                width={507}
                height={685}
                alt=""
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8">
                  <div className="it-hero-2-content z-index-5">
                    <h1 className="it-hero-2-title">
                      Page welcome to Horeb private University
                    </h1>
                    <div className="it-hero-2-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="it-hero-2-btn-box d-flex align-items-center">
                    <Link className="it-btn-white sky-bg mr-30" href="/course">
                      <span>
                        Explore all Courses
                        <svg
                          width="17"
                          height="14"
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1.24023L16 7.24023L11 13.2402"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 7.24023H16"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className="it-hero-2-play">
                      <button
                        className="popup-video"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fas fa-play"></i>
                      </button>
                      <span>Watch Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-slider-bg it-slider-overlay d-flex align-items-center it-slider-height p-relative">
            <Image
              src="/img/slider/slider-2.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
            <div className="it-slider-shape-1 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-2.png"
                width={535}
                height={656}
                alt=""
              />
            </div>
            <div className="it-slider-shape-2 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-1.png"
                width={507}
                height={685}
                alt=""
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8">
                  <div className="it-hero-2-content z-index-5">
                    <h1 className="it-hero-2-title">
                      Page welcome to Horeb private University
                    </h1>
                    <div className="it-hero-2-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="it-hero-2-btn-box d-flex align-items-center">
                    <Link className="it-btn-white sky-bg mr-30" href="/course">
                      <span>
                        Explore all Courses
                        <svg
                          width="17"
                          height="14"
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1.24023L16 7.24023L11 13.2402"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 7.24023H16"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className="it-hero-2-play">
                      <button
                        className="popup-video"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fas fa-play"></i>
                      </button>
                      <span>Watch Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-slider-bg it-slider-overlay d-flex align-items-center it-slider-height p-relative">
            <Image
              src="/img/slider/slider-3.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
            <div className="it-slider-shape-1 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-2.png"
                width={535}
                height={656}
                alt=""
              />
            </div>
            <div className="it-slider-shape-2 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-1.png"
                width={507}
                height={685}
                alt=""
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8">
                  <div className="it-hero-2-content z-index-5">
                    <h1 className="it-hero-2-title">
                      Page welcome to Horeb private University
                    </h1>
                    <div className="it-hero-2-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="it-hero-2-btn-box d-flex align-items-center">
                    <Link className="it-btn-white sky-bg mr-30" href="/course">
                      <span>
                        Explore all Courses
                        <svg
                          width="17"
                          height="14"
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1.24023L16 7.24023L11 13.2402"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 7.24023H16"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className="it-hero-2-play">
                      <button
                        className="popup-video"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fas fa-play"></i>
                      </button>
                      <span>Watch Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-slider-bg it-slider-overlay d-flex align-items-center it-slider-height p-relative">
            <Image
              src="/img/slider/slider-4.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
            <div className="it-slider-shape-1 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-2.png"
                width={535}
                height={656}
                alt=""
              />
            </div>
            <div className="it-slider-shape-2 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-1.png"
                width={507}
                height={685}
                alt=""
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8">
                  <div className="it-hero-2-content z-index-5">
                    <h1 className="it-hero-2-title">
                      Page welcome to Horeb private University
                    </h1>
                    <div className="it-hero-2-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="it-hero-2-btn-box d-flex align-items-center">
                    <Link className="it-btn-white sky-bg mr-30" href="/course">
                      <span>
                        Explore all Courses
                        <svg
                          width="17"
                          height="14"
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1.24023L16 7.24023L11 13.2402"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 7.24023H16"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className="it-hero-2-play">
                      <button
                        className="popup-video"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fas fa-play"></i>
                      </button>
                      <span>Watch Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-slider-bg it-slider-overlay d-flex align-items-center it-slider-height p-relative">
            <Image
              src="/img/slider/slider-1.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
            <div className="it-slider-shape-1 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-2.png"
                width={535}
                height={656}
                alt=""
              />
            </div>
            <div className="it-slider-shape-2 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-1.png"
                width={507}
                height={685}
                alt=""
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8">
                  <div className="it-hero-2-content z-index-5">
                    <h1 className="it-hero-2-title">
                      Page welcome to Horeb private University
                    </h1>
                    <div className="it-hero-2-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="it-hero-2-btn-box d-flex align-items-center">
                    <Link className="it-btn-white sky-bg mr-30" href="/course">
                      <span>
                        Explore all Courses
                        <svg
                          width="17"
                          height="14"
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1.24023L16 7.24023L11 13.2402"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 7.24023H16"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className="it-hero-2-play">
                      <button
                        className="popup-video"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fas fa-play"></i>
                      </button>
                      <span>Watch Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-slider-bg it-slider-overlay d-flex align-items-center it-slider-height p-relative">
            <Image
              src="/img/slider/slider-2.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
            <div className="it-slider-shape-1 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-2.png"
                width={535}
                height={656}
                alt=""
              />
            </div>
            <div className="it-slider-shape-2 d-none d-xl-block">
              <Image
                src="/img/slider/slider-shape-1.png"
                width={507}
                height={685}
                alt=""
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8">
                  <div className="it-hero-2-content z-index-5">
                    <h1 className="it-hero-2-title">
                      Page welcome to Horeb private University
                    </h1>
                    <div className="it-hero-2-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="it-hero-2-btn-box d-flex align-items-center">
                    <Link className="it-btn-white sky-bg mr-30" href="/course">
                      <span>
                        Explore all Courses
                        <svg
                          width="17"
                          height="14"
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1.24023L16 7.24023L11 13.2402"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 7.24023H16"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className="it-hero-2-play">
                      <button
                        className="popup-video"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fas fa-play"></i>
                      </button>
                      <span>Watch Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="it-slider-nav-wrap z-index-5">
          <Slider
            {...sliderNavSettings}
            className="it-slider-nav-active d-none d-lg-block"
          >
            <div className="it-slider-nav-thumb">
              <Image
                src="/img/slider/slider-1-sm.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="it-slider-nav-thumb">
              <Image
                src="/img/slider/slider-2-sm.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="it-slider-nav-thumb">
              <Image
                src="/img/slider/slider-3-sm.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="it-slider-nav-thumb">
              <Image
                src="/img/slider/slider-1-sm.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="it-slider-nav-thumb">
              <Image
                src="/img/slider/slider-2-sm.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="it-slider-nav-thumb">
              <Image
                src="/img/slider/slider-3-sm.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderArea;
