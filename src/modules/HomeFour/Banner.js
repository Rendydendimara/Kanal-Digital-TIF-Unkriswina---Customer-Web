import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="it-hero-3-area it-hero-style-4 it-hero-space theme-bg-3 fix z-index">
      <div className="it-hero-3-shape-1">
        <Image
          src="/img/hero/hero-4-shape1.png"
          alt=""
          width={504}
          height={603}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-hero-3-shape-2">
        <Image
          src="/img/hero/hero-3-shape2.png"
          alt=""
          width={527}
          height={250}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-hero-3-shape-3 d-none d-xl-block">
        <Image
          src="/img/hero/hero-3-shape3.png"
          alt=""
          width={113}
          height={42}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-hero-3-shape-4 d-none d-xl-block">
        <Image
          src="/img/hero/hero-3-shape4.png"
          alt=""
          width={154}
          height={178}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-hero-3-shape-5 d-none d-xl-block">
        <Image
          src="/img/hero/hero-3-shape5.png"
          alt=""
          width={176}
          height={168}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="it-hero-3-title-wrap it-hero-3-ptb">
              <div className="it-hero-3-title-box">
                <h1 className="it-hero-3-title">
                  an online Education Platform For Global <span>Learners</span>
                </h1>
                <p>
                  We are experienced in educationl platform and skilled
                  strategies <br />
                  for the success of our online learning.
                </p>
              </div>
              <div className="it-hero-3-btn-box d-flex align-items-center">
                <Link className="it-btn-white" href="/course">
                  <span>
                    Find The Course
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
          <div className="col-xl-6 col-lg-5">
            <div className="it-hero-3-thumb text-end">
              <Image
                src="/img/hero/hero-4-img.png"
                alt=""
                width={691}
                height={626}
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
