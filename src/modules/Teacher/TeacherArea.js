import SingleTeamTwo from '@/components/Team/Two';
import Teachers from '@/data/teachers';

export default function TeacherArea() {
  return (
    <div className="it-team-3-area it-team-3-style-2  it-team-3-style-3 pt-110 pb-90">
      <div className="container">
        <div className="row">
          {Teachers.map((teacher) => {
            return (
              <div
                key={teacher.id}
                className="col-xl-3 col-lg-4 col-md-6 mb-30"
              >
                <SingleTeamTwo
                  Slug={teacher.slug}
                  Title={teacher.title}
                  Img={teacher.image}
                  Teacher={teacher.name}
                  Designation={teacher.designation}
                />
              </div>
            );
          }).slice(0, 8)}
        </div>
      </div>
    </div>
  );
}
