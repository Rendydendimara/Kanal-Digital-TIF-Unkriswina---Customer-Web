import SingleFeatureTwo from '@/components/Feature/Two';
import Image from 'next/image';
import Services from '@/data/services';

export default function Feature() {
  return (
    <div
      id="it-service"
      className="it-feature-3-area it-feature-3-bg grey-bg pt-120 pb-90"
    >
      <Image src="/img/feature/feature-bg.png" alt="" fill={true} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-7 col-md-8">
            <div className="it-feature-3-title-box text-center mb-60">
              <span className="it-section-subtitle-3">
                <Image src="/img/about/bg.svg" width={23} height={17} alt="" />{' '}
                HISTUDY FEATURE{' '}
                <Image src="/img/about/bg.svg" width={23} height={17} alt="" />
              </span>
              <h4 className="it-section-title-3">
                Check out educate features <br /> win any exam
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {Services.map((service) => {
            return (
              <div
                key={service.id}
                className="col-xl-3 col-lg-3 col-md-6 mb-30"
              >
                <SingleFeatureTwo
                  Slug={service.slug}
                  Icon={service.icon}
                  Title={service.title}
                  courseCount={service.courseCount}
                />
              </div>
            );
          }).slice(3, 7)}
        </div>
      </div>
    </div>
  );
}
