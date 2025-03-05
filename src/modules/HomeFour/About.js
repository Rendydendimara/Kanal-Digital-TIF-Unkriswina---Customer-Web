import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div
      id="it-about"
      className="it-about-4-area it-about-4-style pt-120 pb-120"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-4-thumb-wrap d-flex align-items-center justify-content-center justify-content-lg-end">
              <div className="it-about-4-thumb-double d-flex flex-column">
                <img
                  className="mb-20"
                  src="/img/about/thumb-4-1.jpg"
                  alt=""
                  width={236}
                  height={350}
                  style={{ height: 'auto' }}
                />
                <Image
                  src="/img/about/thumb-4-2.jpg"
                  alt=""
                  width={236}
                  height={350}
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-about-4-thumb-single">
                <Image
                  src="/img/about/thumb-4-3.jpg"
                  alt=""
                  width={304}
                  height={600}
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-3-title-box">
              <span className="it-section-subtitle-4">
                <Image
                  src="/img/category/title.svg"
                  alt=""
                  width={23}
                  height={17}
                />
                about us
              </span>
              <h2 className="it-section-title-3 pb-30">
                we are always ensure best course for your <span>learning</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi.
              </p>
            </div>
            <div className="it-about-3-mv-box">
              <div className="row">
                <div className="col-xl-12">
                  <div className="it-about-4-list-wrap d-flex align-items-start">
                    <div className="it-about-4-list-icon">
                      <span>
                        <i className="flaticon-video-1"></i>
                      </span>
                    </div>
                    <div className="it-about-3-mv-item">
                      <span className="it-about-3-mv-title">
                        Sharing a Screen
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="it-about-4-list-wrap d-flex align-items-start">
                    <div className="it-about-4-list-icon">
                      <span>
                        <i className="flaticon-puzzle"></i>
                      </span>
                    </div>
                    <div className="it-about-3-mv-item">
                      <span className="it-about-3-mv-title">
                        presenter Control
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-about-3-btn-box p-relative">
              <Link className="it-btn-blue" href="/about-us">
                <span>
                  admission open
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
              <div className="it-about-3-left-shape-3 d-none d-xl-block">
                <Image
                  src="/img/about/about-3-shap-3.png"
                  alt=""
                  width={266}
                  height={52}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
