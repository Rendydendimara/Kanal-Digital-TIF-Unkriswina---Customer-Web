import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="it-cta-area it-cta-height black-bg p-relative">
      <div className="it-cta-bg d-none d-xl-block">
        <Image src="/img/about/cta-1.png" width={557} height={200} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-9 col-lg-7 col-md-7">
            <div className="it-cta-content">
              <h4 className="it-cta-title">
                educate gives you the tools create an online course.
              </h4>
            </div>
          </div>
          <div className="col-xl-3 col-lg-5 col-md-5">
            <div className="it-cta-button text-md-end">
              /
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
          </div>
        </div>
      </div>
    </div>
  );
}
