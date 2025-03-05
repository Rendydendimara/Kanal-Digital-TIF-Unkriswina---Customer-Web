import SingleCourseTwo from '@/components/Course/Two';
import Image from 'next/image';
import Link from 'next/link';
import Courses from '@/data/courses';

export default function Course() {
  return (
    <div
      id="it-course"
      className="it-course-area it-course-style-2  p-relative pt-120 pb-120"
    >
      <div className="it-course-shape-6 d-none d-xl-block">
        <Image src="/img/course/shape-1-6.png" width={47} height={37} alt="" />
      </div>
      <div className="container">
        <div className="it-course-title-wrap p-relative mb-60">
          <div className="it-course-shape-5 d-none d-xl-block">
            <Image
              src="/img/course/shape-1-5.png"
              width={176}
              height={168}
              alt=""
              style={{ height: 'auto' }}
            />
          </div>
          <div className="row align-items-end">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="it-course-title-box">
                <span className="it-section-subtitle-2">Our Courses</span>
                <h4 className="it-section-title">
                  Creating A Community Of <br />
                  Life Long Learners.
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="it-course-button text-start text-md-end">
                <Link className="it-btn-white sky-bg" href="/course/two">
                  <span>
                    All Courses
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
              <div key={course.id} className="col-xl-6 col-lg-6">
                <SingleCourseTwo
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
          }).slice(3, 5)}
        </div>
      </div>
    </div>
  );
}
