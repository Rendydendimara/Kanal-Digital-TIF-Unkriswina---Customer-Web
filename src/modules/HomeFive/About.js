import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="it-about" className="it-about-5-area p-relative pt-60 pb-120">
      <div className="it-about-5-shape-2">
        <Image src="/img/about/shape-5-2.png" alt="" width={67} height={28} />
      </div>
      <div className="it-about-5-shape-3 d-none d-xl-block">
        <Image src="/img/about/shape-5-3.png" alt="" width={263} height={180} />
      </div>
      <div className="it-about-5-shape-4 d-none d-md-block">
        <Image src="/img/about/shape-5-4.png" alt="" width={100} height={72} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-5-thumb-box p-relative">
              <div className="it-about-5-thumb z-index">
                <Image
                  src="/img/about/about-5.png"
                  alt=""
                  width={631}
                  height={621}
                  style={{ height: "auto" }}
                />
              </div>
              <div className="it-about-5-shape-1">
                <Image
                  src="/img/about/shape-5-1.png"
                  alt=""
                  width={854}
                  height={709}
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-5-right">
              <div className="it-about-5-title-box pb-10">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i>about us
                </span>
                <h4 className="it-section-title-5">
                  Learn about our work <br />
                  and cultural <span>activities</span>
                </h4>
              </div>
              <div className="it-about-5-text mb-30">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud..
                </p>
              </div>
              <div className="it-about-5-content">
                <div className="it-about-5-list mb-20">
                  <ul>
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      QUALITY EDUCATIORS
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>PLAY
                      TO LEARN
                    </li>
                  </ul>
                </div>
                <div className="it-about-5-list mb-40">
                  <ul>
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      SAFETY AND SECURITY
                    </li>
                    <li>
                      <i className="fa-sharp fa-solid fa-circle-check"></i>
                      HOMELIKE ENVIROMEND
                    </li>
                  </ul>
                </div>
              </div>
              <div className="it-feature-button">
                <Link className="it-btn-yellow radius" href="/tentang-kami">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
