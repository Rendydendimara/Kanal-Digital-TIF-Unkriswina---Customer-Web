import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div className="it-hero-2-area it-hero-2-bg it-hero-5-style fix p-relative">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="FdrNFEbcsRs"
        onClose={() => {
          openModal();
        }}
      />
      <Image
        src="/img/hero/hero-bg-5.jpg"
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className="it-hero-5-shape-1">
        <Image src="/img/hero/shape-5-1.png" alt="" width={21} height={21} />
      </div>
      <div className="it-hero-5-shape-2 d-none d-lg-block">
        <Image src="/img/hero/shape-5-2.png" alt="" width={35} height={32} />
      </div>
      <div className="it-hero-5-shape-3">
        <Image src="/img/hero/shape-5-3.png" alt="" width={100} height={100} />
      </div>
      <div className="it-hero-5-shape-4">
        <Image src="/img/hero/shape-5-4.png" alt="" width={77} height={35} />
      </div>
      <div className="it-hero-5-shape-7">
        <Image src="/img/hero/shape-5-5.png" alt="" width={59} height={14} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="it-hero-2-content">
              <h1 className="it-hero-2-title">
                Develop Your skills <br />
                with online courses <br />
                From A Pro
              </h1>
              <div className="it-hero-2-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="it-hero-2-btn-box d-flex align-items-center">
                  <Link
                    className="it-btn-yellow radius mr-30 mb-20"
                    href="/course"
                  >
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
                  <div className="it-hero-2-play mb-20">
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
          <div className="col-xxl-4 col-xl-6 col-lg-6">
            <div className="it-hero-2-thumb-box p-relative">
              <div className="it-hero-2-thumb p-relative">
                <Image
                  src="/img/hero/hero-5.png"
                  alt=""
                  width={800}
                  height={788}
                  style={{ height: 'auto' }}
                />
                <div className="it-hero-5-shape-5">
                  <Image
                    src="/img/hero/shape-5-1.png"
                    alt=""
                    width={21}
                    height={21}
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="it-hero-5-shape-6">
                  <Image
                    src="/img/hero/shape-5-6.png"
                    alt=""
                    width={184}
                    height={184}
                    style={{ height: 'auto' }}
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
