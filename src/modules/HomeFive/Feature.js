import SingleFeatureThree from '@/components/Feature/Three';

export default function Feature() {
  return (
    <div id="it-service" className="it-feature-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <SingleFeatureThree />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <SingleFeatureThree />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <SingleFeatureThree />
          </div>
        </div>
      </div>
    </div>
  );
}
