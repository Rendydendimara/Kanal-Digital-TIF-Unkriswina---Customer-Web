import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div id="it-about" className="it-about-3-area pt-120 pb-120 p-relative">
      <div className="it-about-3-left-shape-4 d-none d-lg-block">
        <Image
          src="/img/about/about-3-shap-4.png"
          width={278}
          height={218}
          alt=""
        />
      </div>
      <div className="it-about-3-left-shape-5 d-none d-lg-block">
        <Image
          src="/img/about/about-3-shap-5.png"
          width={307}
          height={290}
          alt=""
        />
      </div>
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-3-left-box text-end p-relative">
              <div className="it-about-3-left-shape-1 d-none d-lg-block">
                <Image
                  src="/img/about/about-3-shap-1.png"
                  width={41}
                  height={37}
                  alt=""
                />
              </div>
              <div className="it-about-3-left-shape-2 d-none d-lg-block">
                <Image
                  src="/img/about/about-3-shap-2.png"
                  width={307}
                  height={290}
                  alt=""
                />
              </div>
              <div className="it-about-3-thumb">
                <Image
                  src="/img/about/about-3-img.png"
                  width={565}
                  height={688}
                  alt=""
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-3-title-box">
              <span className="it-section-subtitle-3">
                <Image src="/img/about/bg.svg" width={23} height={17} alt="" />{' '}
                about us
              </span>
              <h2 className="it-section-title-3 pb-30">
                Benefit from our online learning expertise earn{' '}
                <span>professional</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
                <br /> eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className="it-about-3-mv-box">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="it-about-3-mv-item">
                    <span className="it-about-3-mv-title">OUR MISSION:</span>
                    <p>
                      Suspendisse ultrice gravida dictum fusce placerat
                      ultricies integer quis auctor elit sed vulputate mi sit.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="it-about-3-mv-item">
                    <span className="it-about-3-mv-title">OUR VISSION:</span>
                    <p>
                      Suspendisse ultrice gravida dictum fusce placerat
                      ultricies integer quis auctor elit sed vulputate mi sit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-about-3-btn-box p-relative">
              <Link className="it-btn-yellow" href="/about-us">
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
              <div className="it-about-3-left-shape-3 d-none d-md-block">
                <Image
                  src="/img/about/about-3-shap-3.png"
                  width={266}
                  height={52}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
