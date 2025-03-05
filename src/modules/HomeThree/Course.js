import SingleCourse from '@/components/Course';
import Image from 'next/image';
import Link from 'next/link';
import Courses from '@/data/courses';

export default function Course() {
  return (
    <div
      id="it-course"
      className="it-course-area it-course-style-3 it-course-bg p-relative grey-bg pt-120 pb-120"
    >
      <Image src="/img/course/course-bg.png" fill objectFit="cover" alt="" />
      <div className="container">
        <div className="it-course-title-wrap mb-60">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-7 col-md-8">
              <div className="it-course-title-box">
                <span className="it-section-subtitle-3">
                  <Image
                    src="/img/about/bg.svg"
                    width={23}
                    height={17}
                    alt=""
                  />{' '}
                  Top Popular Course
                </span>
                <h4 className="it-section-title-3">
                  Check out educate features <br /> win any exam
                </h4>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-4">
              <div className="it-course-button text-start text-md-end pt-25">
                <Link className="it-btn-theme-2" href="/course">
                  <span>
                    Load More Course
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
        <div className="row">
          {Courses.map((course) => {
            return (
              <div key={course.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <SingleCourse
                  ID={course.id}
                  Slug={course.slug}
                  Title={course.title}
                  Img={course.image}
                  category={course.category}
                  ratingCount={course.ratingCount}
                  lessonCount={course.lessonCount}
                  studentCount={course.studentCount}
                  Duration={course.duration}
                  Author={course.author}
                  Price={course.price}
                  prevPrice={course.prevPrice}
                  btnText={course.btnText}
                />
              </div>
            );
          }).slice(0, 3)}
        </div>
      </div>
    </div>
  );
}
