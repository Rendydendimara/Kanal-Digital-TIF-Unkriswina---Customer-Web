import SingleCourse from '@/components/Course';
import Courses from '@/data/courses';

export default function CourseArea() {
  return (
    <div className="it-course-area p-relative grey-bg pt-120 pb-120">
      <div className="container">
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
          }).slice(9, 12)}
        </div>
      </div>
    </div>
  );
}
