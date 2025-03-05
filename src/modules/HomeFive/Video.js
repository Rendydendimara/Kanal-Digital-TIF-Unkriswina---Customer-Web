import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Image from 'next/image';
import Link from 'next/link';

export default function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  const videoStyle = { backgroundImage: `url('/img/video/bg-5-1.jpg')` };

  return (
    <div
      className="it-video-2-area it-video-2-bg p-relative pt-120 pb-120"
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
      <div className="it-video-2-shape-1 d-none d-lg-block">
        <Image src="/img/video/shape-5-2.png" alt="" width={65} height={57} />
      </div>
      <div className="it-video-2-shape-2 d-none d-lg-block">
        <Image src="/img/video/shape-5-1.png" alt="" width={100} height={72} />
      </div>
      <div className="it-video-2-shape-3 d-none d-lg-block">
        <Image src="/img/video/shape-5-3.png" alt="" width={144} height={96} />
      </div>
      <div className="it-video-2-shape-4 d-none d-lg-block">
        <Image src="/img/video/shape-5-4.png" alt="" width={76} height={35} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-video-2-left">
              <div className="it-video-2-title-box mb-10">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i> On Going Classes
                </span>
                <h4 className="it-section-title-5">new approach to fun</h4>
              </div>
              <div className="it-video-2-text mb-30">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do <br />
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                  <br /> Ut enim ad minim veniam, quis nostrud..
                </p>
              </div>
              <div className="it-video-2-button">
                <Link className="it-btn-yellow radius" href="/event">
                  <span>
                    Find Events
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
          <div className="col-xl-6 col-lg-6">
            <div className="it-video-2-thumb p-relative">
              <Image
                src="/img/video/thumb-5.jpg"
                alt=""
                width={648}
                height={454}
                style={{ height: 'auto' }}
              />
              <div className="it-video-2-play ">
                <button
                  className="popup-video"
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
  );
}
