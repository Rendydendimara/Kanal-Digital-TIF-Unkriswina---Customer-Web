import SingleFeatureTwo from '@/components/Feature/Two';
import Services from '@/data/services';

export default function ServiceTwoArea() {
  return (
    <div className="it-feature-3-area it-feature-3-bg it-feature-3-style grey-bg pt-120 pb-90">
      <div className="container">
        <div className="row">
          {Services.map((service) => {
            return (
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 col-md-6 mb-30"
              >
                <SingleFeatureTwo
                  Slug={service.slug}
                  Icon={service.icon}
                  Title={service.title}
                  Description={service.description}
                />
              </div>
            );
          }).slice(0, 6)}
        </div>
      </div>
    </div>
  );
}
