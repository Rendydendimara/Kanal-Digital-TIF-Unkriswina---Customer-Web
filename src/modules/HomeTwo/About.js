import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div id="it-about" className="it-about-2-area p-relative pt-120 pb-120">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="FdrNFEbcsRs"
        onClose={() => {
          openModal();
        }}
      />
      <div className="it-about-2-shape-2 d-none d-xxl-block">
        <Image src="/img/about/shape-2-2.png" width={84} height={89} alt="" />
      </div>
      <div className="it-about-2-big-text">
        <h6>ABOUT US</h6>
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
            <div className="it-about-2-thumb-wrap d-flex justify-content-between">
              <div className="it-about-2-thumb p-relative mt-95">
                <Image
                  src="/img/about/thumb-2-1.jpg"
                  width={303}
                  height={550}
                  alt=""
                  style={{ height: 'auto' }}
                />
                <div className="it-about-2-shape-1 d-none d-xxl-block">
                  <Image
                    src="/img/about/shape-2-1.png"
                    width={84}
                    height={89}
                    alt=""
                    style={{ height: 'auto' }}
                  />
                </div>
              </div>
              <div className="it-about-2-thumb">
                <Image
                  src="/img/about/thumb-2-2.jpg"
                  width={312}
                  height={550}
                  alt=""
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
            <div className="it-about-2-right">
              <div className="it-about-2-title-box pb-25">
                <span className="it-section-subtitle-2">our about us</span>
                <h4 className="it-section-title">
                  We Are High School Since <br />
                  10 Years Experience
                </h4>
              </div>
              <div className="it-about-2-text pb-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut <br />
                  enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
              <div className="it-about-2-text-2 mb-30">
                <span>
                  Standard dummy text ever since the unknown scramble make a
                  type specimen book
                </span>
              </div>
              <div className="it-about-2-bottom d-flex justify-content-between align-items-end">
                <div className="it-about-2-icon-wrap">
                  <div className="it-about-2-icon mb-25 d-flex align-items-center">
                    <Image
                      src="/img/about/icon-1-1.png"
                      width={40}
                      height={40}
                      alt=""
                    />
                    <span>Flexible Classes</span>
                  </div>
                  <div className="it-about-2-icon mb-35 d-flex align-items-center">
                    <Image
                      src="/img/about/icon-1-2.png"
                      width={40}
                      height={40}
                      alt=""
                    />
                    <span>Learn From Anywhere</span>
                  </div>
                  <Link className="it-btn-white sky-bg" href="/about-us">
                    <span>
                      More About Us
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
                </div>
                <div className="it-about-2-video p-relative">
                  <div className="it-about-2-thumb-sm">
                    <Image
                      src="/img/about/thumb-sm.png"
                      width={262}
                      height={215}
                      alt=""
                      style={{ height: 'auto' }}
                    />
                  </div>
                  <div className="it-about-2-video-icon">
                    <button
                      className="popup-video play"
                      onClick={() => {
                        openModal();
                      }}
                    >
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
