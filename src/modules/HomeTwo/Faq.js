import Image from 'next/image';
import Faq from '@/components/Faq';

export default function FaqSection() {
  return (
    <div className="it-faq-area p-relative pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-faq-thumb text-center text-lg-start">
              <Image
                src="/img/faq/faq-2.jpg"
                width={565}
                height={711}
                alt=""
                style={{ height: 'auto' }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-faq-wrap">
              <div className="it-faq-title-box mb-20">
                <span className="it-section-subtitle-2">faq</span>
                <h4 className="it-section-title-5">
                  Frequently asked some questions?
                </h4>
              </div>
              <div className="it-custom-accordion it-custom-accordion-style-2">
                <div className="accordion" id="accordionExample">
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
