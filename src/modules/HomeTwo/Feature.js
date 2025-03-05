import SingleFeature from '@/components/Feature';
import Services from '@/data/services';

export default function Feature() {
  return (
    <div className="it-feature-area grey-bg it-feature-2-style pt-120 pb-120">
      <div className="container">
        <div className="row">
          {Services.map((service) => {
            return (
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 col-md-6 mb-30"
              >
                <SingleFeature
                  Slug={service.slug}
                  Icon={service.icon}
                  Title={service.title}
                  courseCount={service.courseCount}
                />
              </div>
            );
          }).slice(3, 6)}
        </div>
      </div>
    </div>
  );
}
