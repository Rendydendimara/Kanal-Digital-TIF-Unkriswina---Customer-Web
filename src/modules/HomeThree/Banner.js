import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="it-hero-3-area theme-bg-2">
      <div className="it-hero-3-shape-1">
        <Image
          src="/img/hero/hero-3-shape1.png"
          width={253}
          height={564}
          alt=""
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-hero-3-shape-2">
        <Image
          src="/img/hero/hero-3-shape2.png"
          width={527}
          height={250}
          alt=""
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-hero-3-shape-3 d-none d-lg-block">
        <Image
          src="/img/hero/hero-3-shape3.png"
          width={113}
          height={42}
          alt=""
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-hero-3-shape-4 d-none d-xxl-block">
        <Image
          src="/img/hero/hero-3-shape4.png"
          width={154}
          height={178}
          alt=""
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-hero-3-shape-5 d-none d-xxl-block">
        <Image
          src="/img/hero/hero-3-shape5.png"
          width={176}
          height={168}
          alt=""
          style={{ height: 'auto' }}
        />
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6">
            <div className="it-hero-3-title-wrap it-hero-3-ptb">
              <div className="it-hero-3-title-box">
                <h1 className="it-hero-3-title">
                  Learn new skills online with top <span>educators.</span>
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
                <div className="it-hero-3-client-box d-flex align-items-center">
                  <span>
                    Happy <br /> Students
                  </span>
                  <Image
                    src="/img/hero/hero-3-client-img.png"
                    width={164}
                    height={62}
                    alt=""
                    style={{ height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="it-hero-3-thumb">
              <Image
                src="/img/hero/hero-3-img.png"
                width={802}
                height={716}
                alt=""
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
