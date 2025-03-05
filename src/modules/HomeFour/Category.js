import Image from 'next/image';
import Link from 'next/link';

export default function Category() {
  return (
    <div className="it-category-4-area pt-120 pb-90 grey-bg">
      <div className="container">
        <div className="it-category-4-title-wrap mb-60">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="it-category-4-title-box">
                <span className="it-section-subtitle-4 d-flex align-items-center">
                  <Image
                    src="/img/category/title.svg"
                    alt=""
                    width={23}
                    height={17}
                  />
                  category
                </span>
                <h4 className="it-section-title-3">Favorite topics to learn</h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="it-category-4-btn-box text-start text-md-end pt-25">
                <Link className="it-btn-blue" href="/course">
                  Browse Histudy Courses
                  <span>
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
        <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
          <div className="col mb-30">
            <div className="it-category-4-item text-center">
              <div className="it-category-4-icon">
                <span>
                  <Image
                    src="/img/category/category-4-1.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </span>
              </div>
              <div className="it-category-4-content">
                <h4 className="it-category-4-title">
                  <Link href="course/details">web Design</Link>
                </h4>
                <span>08 Courses</span>
              </div>
            </div>
          </div>
          <div className="col mb-30">
            <div className="it-category-4-item text-center">
              <div className="it-category-4-icon">
                <span>
                  <Image
                    src="/img/category/category-4-2.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </span>
              </div>
              <div className="it-category-4-content">
                <h4 className="it-category-4-title">
                  <Link href="course/details">Graphics design</Link>
                </h4>
                <span>15 Courses</span>
              </div>
            </div>
          </div>
          <div className="col mb-30">
            <div className="it-category-4-item text-center">
              <div className="it-category-4-icon">
                <span>
                  <Image
                    src="/img/category/category-4-3.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </span>
              </div>
              <div className="it-category-4-content">
                <h4 className="it-category-4-title">
                  <Link href="course/details">Video Editor</Link>
                </h4>
                <span>10 Courses</span>
              </div>
            </div>
          </div>
          <div className="col mb-30">
            <div className="it-category-4-item text-center">
              <div className="it-category-4-icon">
                <span>
                  <Image
                    src="/img/category/category-4-4.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </span>
              </div>
              <div className="it-category-4-content">
                <h4 className="it-category-4-title">
                  <Link href="course/details">Content Writing</Link>
                </h4>
                <span>07 Courses</span>
              </div>
            </div>
          </div>
          <div className="col mb-30">
            <div className="it-category-4-item text-center">
              <div className="it-category-4-icon">
                <span>
                  <Image
                    src="/img/category/category-4-5.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </span>
              </div>
              <div className="it-category-4-content">
                <h4 className="it-category-4-title">
                  <Link href="course/details">Marketing</Link>
                </h4>
                <span>15 Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
