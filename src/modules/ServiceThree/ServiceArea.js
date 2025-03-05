import Services from '@/data/services';
import SingleFeatureThree from '@/components/Feature/Three';

export default function ServiceThreeArea() {
  return (
    <div className="it-feature-area grey-bg it-feature-style-2 pt-120 pb-120">
      <div className="container">
        <div className="row">
          {Services.map((service) => {
            return (
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 col-md-6 mb-30"
              >
                <SingleFeatureThree
                  Slug={service.slug}
                  Icon={service.icon}
                  Title={service.title}
                  Description={service.description}
                  btnText={service.btnText}
                />
              </div>
            );
          }).slice(5, 11)}
        </div>
      </div>
    </div>
  );
}
