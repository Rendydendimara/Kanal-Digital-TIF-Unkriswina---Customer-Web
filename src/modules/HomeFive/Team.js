import Image from 'next/image';
import SingleTeamTwo from '@/components/Team/Two';
import Teachers from '@/data/teachers';

export default function Team() {
  return (
    <div
      id="it-team"
      className="it-team-3-area it-team-3-style-2 p-relative z-index pt-110 pb-90"
    >
      <div className="it-team-3-shape-1 d-none d-xl-block">
        <Image src="/img/team/shape-5-1.png" alt="" width={124} height={122} />
      </div>
      <div className="it-team-3-shape-2 d-none d-xl-block">
        <Image src="/img/team/shape-5-2.png" alt="" width={63} height={63} />
      </div>
      <div className="it-team-3-shape-3 d-none d-xl-block">
        <Image src="/img/team/shape-5-3.png" alt="" width={76} height={35} />
      </div>
      <div
        className="it-team-3-bg overley"
        style={{ backgroundImage: `url('/img/team/bg-5-1.jpg')` }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-event-title-box text-center pb-70">
              <span className="it-section-subtitle-5 yellow">
                <i className="fa-light fa-book"></i>
                best teacher
                <i className="fa-light fa-book"></i>
              </span>
              <h2 className="it-section-title-3 text-white">
                meet our expert Instructor
              </h2>
            </div>
          </div>
        </div>
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
          }).slice(0, 4)}
        </div>
      </div>
    </div>
  );
}
