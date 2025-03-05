import SingleCourseTwo from '@/components/Course/Two';
import Courses from '@/data/courses';

export default function CourseTwoArea() {
  return (
    <div className="it-course-area it-course-style-2 it-course-style-5 p-relative pt-120 pb-120">
      <div className="container">
        <div className="row">
          {Courses.map((course) => {
            return (
              <div key={course.id} className="col-xl-6 col-lg-6 mb-30">
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
          }).slice(3, 9)}
        </div>
      </div>
    </div>
  );
}
