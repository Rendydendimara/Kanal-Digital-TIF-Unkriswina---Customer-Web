import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  const videoStyle = {
    backgroundImage: `url('/img/video/bg-1-1.jpg')`,
  };

  return (
    <div
      className="it-video-area it-video-style-4 it-video-bg p-relative fix pt-100 pb-95"
      style={videoStyle}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="FdrNFEbcsRs"
        onClose={() => {
          openModal();
        }}
      />
      <div className="it-video-shape-1 d-none d-lg-block">
        <Image src="/img/video/shape-4-1.png" alt="" width={347} height={211} />
      </div>
      <div className="it-video-shape-2 d-none d-lg-block">
        <Image src="/img/video/shape-1-2.png" alt="" width={325} height={238} />
      </div>
      <div className="it-video-shape-3 d-none d-xl-block">
        <Image src="/img/video/shape-1-4.png" alt="" width={49} height={49} />
      </div>
      <div className="it-video-shape-5 d-none d-lg-block">
        <Image src="/img/video/shape-1-5.png" alt="" width={85} height={24} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
            <div className="it-video-content">
              <span>are you ready for this offer</span>
              <h3 className="it-video-title">40% offer for very first 100</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi.
              </p>
              <div className="it-video-button">
                <Link className="it-btn-blue" href="/contact">
                  <span>
                    Join With us
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
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-3 col-sm-3">
            <div className="it-video-play-wrap d-flex justify-content-start justify-content-md-end align-items-center">
              <div className="it-video-play text-center">
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
  );
}
