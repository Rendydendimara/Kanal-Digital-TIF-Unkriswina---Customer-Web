import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div id="it-about" className="it-about-area p-relative pt-185 pb-185">
      <div className="it-about-shape-4 d-none d-md-block">
        <Image src="/img/about/shape-1-4.png" width={63} height={63} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-thumb-box p-relative">
              <div className="it-about-thumb-1 d-none d-xl-block">
                <Image
                  src="/img/about/thumb-1.jpg"
                  width={236}
                  height={350}
                  alt=""
                />
              </div>
              <div className="it-about-thumb-2 d-none d-xl-block">
                <Image
                  src="/img/about/thumb-2.jpg"
                  width={236}
                  height={350}
                  alt=""
                />
              </div>
              <div className="it-about-main-thumb text-xl-end text-center">
                <Image
                  src="/img/about/thumb-3.jpg"
                  width={304}
                  height={600}
                  alt=""
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-about-shape-1 d-none d-md-block">
                <Image
                  src="/img/about/shape-1-1.png"
                  width={190}
                  height={186}
                  alt=""
                />
              </div>
              <div className="it-about-shape-2 d-none d-md-block">
                <Image
                  src="/img/about/shape-1-2.png"
                  width={85}
                  height={24}
                  alt=""
                />
              </div>
              <div className="it-about-shape-3 d-none d-md-block">
                <Image
                  src="/img/about/shape-1-3.png"
                  width={266}
                  height={266}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-right-box">
              <div className="it-about-title-box mb-20">
                <span className="it-section-subtitle">OUr about us</span>
                <h4 className="it-section-title">
                  Learn & Grow your
                  <span className="p-relative z-index">
                    skills
                    <svg
                      className="title-shape-2"
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
                  <br /> From anywhere
                </h4>
              </div>
              <div className="it-about-text pb-10">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris..
                </p>
              </div>
              <div className="it-about-content-wrapper d-flex align-items-center justify-content-between pb-15">
                <div className="it-about-content">
                  <h5>Flexible Classes</h5>
                  <p>
                    Suspendisse ultrice gravida dictum fusce placerat ultricies
                    integer quis auctor elit sed vulputate mi sit.
                  </p>
                </div>
                <div className="it-about-content">
                  <h5>Flexible Classes</h5>
                  <p>
                    Suspendisse ultrice gravida dictum fusce placerat ultricies
                    integer quis auctor elit sed vulputate mi sit.
                  </p>
                </div>
              </div>
              <Link className="it-btn" href="/about-us">
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
          </div>
        </div>
      </div>
    </div>
  );
}
