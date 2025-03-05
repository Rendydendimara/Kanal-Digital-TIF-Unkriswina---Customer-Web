import SingleCourseThree from '@/components/Course/Three';
import Image from 'next/image';
import Courses from '@/data/courses';

export default function ClassArea() {
  return (
    <div className="it-class-area p-relative pt-120 pb-90">
      <div className="it-class-shape-1 d-none d-xxl-block">
        <Image src="/img/class/shape-1-1.png" alt="" width={100} height={72} />
      </div>
      <div className="it-class-shape-2 d-none d-xxl-block">
        <Image src="/img/class/shape-1-2.png" alt="" width={100} height={72} />
      </div>
      <div className="it-class-shape-3 d-none d-xxl-block">
        <Image src="/img/class/shape-1-2.png" alt="" width={100} height={72} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-class-title-box text-center mb-65">
              <span className="it-section-subtitle-5">
                <i className="fa-light fa-book"></i> On Going Classes{' '}
                <i className="fa-light fa-book"></i>
              </span>
              <h4 className="it-section-title-5">Our Popular classes</h4>
            </div>
          </div>
          {Courses.map((course) => {
            return (
              <div key={course.id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <SingleCourseThree
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
