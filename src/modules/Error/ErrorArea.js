import Image from 'next/image';
import Link from 'next/link';

export default function ErrorArea() {
  return (
    <div className="it-error-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
            <div className="it-error-content">
              <h5 className="it-error-title">Sorry, Page Not Found!</h5>
              <p className="mb-35">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="it-btn">
                <span>
                  Back To Home
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
          <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
            <div className="it-error-thumb">
              <Image
                src="/img/error/error.png"
                alt=""
                width={647}
                height={513}
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
