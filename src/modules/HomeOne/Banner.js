import { useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';

export default function Banner() {
  const [state, setState] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div className="it-hero-2-area it-hero-2-bg fix p-relative">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="FdrNFEbcsRs"
        onClose={() => {
          openModal();
        }}
      />
      <div className="it-hero-2-shape-4">
        <Image src="/img/hero/shape-2-7.png" width={501} height={333} alt="" />
      </div>
      <div className="it-hero-2-shape-5 d-xl-block">
        <Image src="/img/hero/shape-2-3.png" width={113} height={42} alt="" />
      </div>
      <div className="it-hero-2-shape-6 d-none d-xl-block">
        <Image src="/img/hero/shape-2-2.png" width={77} height={85} alt="" />
      </div>
      <div className="it-hero-2-shape-7 d-xl-block">
        <Image src="/img/hero/shape-2-1.png" width={21} height={20} alt="" />
      </div>
      <div className="it-hero-2-funfact text-center d-none d-xl-block">
        <span className="theme">
          <CountUp
            start={state ? 0 : 30}
            end={30}
            duration={10}
            onEnd={() => setState(false)}
          />
          k+
        </span>
        <span>Total Student</span>
        <Image src="/img/hero/shape-2-8.png" width={162} height={44} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="it-hero-2-content">
              <h1 className="it-hero-2-title">
                Develop
                <span className="p-relative">
                  Your
                  <span className="title-shape">
                    <svg
                      width="168"
                      height="65"
                      viewBox="0 0 168 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M73.3761 8.49147C78.4841 6.01353 82.5722 4.25154 88.8933 3.3035C94.2064 2.50664 99.6305 2.0701 104.981 1.94026C120.426 1.56549 135.132 4.90121 146.506 9.70405C158.628 14.8228 166.725 22.5638 166.074 31.6501C165.291 42.5779 151.346 51.7039 133.508 56.8189C110.253 63.4874 81.7065 63.8025 58.5605 60.8285C37.5033 58.123 11.6304 51.7165 3.58132 40.0216C-3.43085 29.8337 12.0728 18.1578 27.544 11.645C40.3656 6.24763 55.7082 2.98328 70.8043 4.08403C81.9391 4.89596 93.2164 6.87822 102.462 9.99561C112.874 13.5066 120.141 18.5932 127.862 23.6332"
                        stroke="#0AB99D"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>{' '}
                skills <br />
                with online courses <br />
                From A Pro
              </h1>
              <div className="it-hero-2-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="it-hero-2-btn-box d-flex align-items-center">
                  <Link className="it-btn" href="/course">
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
          <div className="col-xl-4 col-lg-4">
            <div className="it-hero-2-thumb-box p-relative">
              <div className="it-hero-2-thumb p-relative">
                <Image
                  src="/img/hero/hero-2.png"
                  width={635}
                  height={807}
                  alt=""
                  style={{ height: 'auto' }}
                />
                <div className="it-hero-2-shape-1 d-none d-xl-block">
                  <Image
                    src="/img/hero/shape-2-6.png"
                    width={637}
                    height={637}
                    alt=""
                  />
                </div>
                <div className="it-hero-2-shape-2 d-none d-xl-block">
                  <Image
                    src="/img/hero/shape-2-4.png"
                    width={127}
                    height={95}
                    alt=""
                  />
                </div>
                <div className="it-hero-2-shape-3 d-none d-xl-block">
                  <Image
                    src="/img/hero/shape-2-5.png"
                    width={103}
                    height={51}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
