import Image from 'next/image';
import Link from 'next/link';

export default function Career() {
  return (
    <div className="it-career-area it-career-style-3 it-career-bg p-relative pb-100 pt-120">
      <div className="it-career-shape-3 d-none d-xl-block">
        <Image src="/img/career/shape-1-2.png" width={77} height={85} alt="" />
      </div>
      <div className="it-career-shape-6 d-none d-xl-block">
        <Image src="/img/career/shape-1-5.png" width={66} height={65} alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="it-course-title-box text-center mb-60">
              <span className="it-section-subtitle-3">
                <Image src="/img/about/bg.svg" width={23} height={17} alt="" />{' '}
                Top Popular Course{' '}
                <Image src="/img/about/bg.svg" width={23} height={17} alt="" />
              </span>
              <h4 className="it-section-title-3">Annual Exam Preparation</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 mb-30">
            <div className="it-career-item p-relative fix">
              <div className="it-career-content">
                <span>Medical Exam</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                </p>
                <Link className="it-btn-yellow mr-15" href="/contact">
                  <span>
                    Join now
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
              <div className="it-career-thumb">
                <Image
                  src="/img/career/thumb-1.png"
                  width={309}
                  height={252}
                  alt=""
                />
              </div>
              <div className="it-career-shape-1">
                <Image
                  src="/img/career/shape-1.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-30">
            <div className="it-career-item p-relative fix">
              <div className="it-career-content">
                <span>BCS Exam</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                </p>
                <Link className="it-btn-yellow mr-15" href="/contact">
                  <span>
                    Join now
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
              <div className="it-career-thumb">
                <Image
                  src="/img/career/thumb-2.png"
                  width={309}
                  height={252}
                  alt=""
                />
              </div>
              <div className="it-career-shape-1">
                <Image
                  src="/img/career/shape-1.png"
                  width={100}
                  height={100}
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
