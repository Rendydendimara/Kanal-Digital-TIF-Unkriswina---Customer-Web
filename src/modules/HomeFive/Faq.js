import Faq from '@/components/Faq';
import Image from 'next/image';

export default function FaqArea() {
  return (
    <div className="it-faq-area it-faq-style-5 p-relative pb-120">
      <div className="it-faq-shape-1 d-none d-xl-block">
        <Image src="/img/faq/shape-5-1.png" alt="" width={98} height={87} />
      </div>
      <div className="it-faq-shape-2 d-none d-xl-block">
        <Image src="/img/faq/shape-5-2.png" alt="" width={121} height={96} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="it-faq-thumb">
              <Image
                src="/img/faq/faq-1.jpg"
                alt=""
                width={565}
                height={711}
                style={{ height: 'auto' }}
              />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="it-faq-wrap">
              <div className="it-faq-title-box mb-20">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i> faq
                </span>
                <h4 className="it-section-title-5 yellow">
                  Frequently asked some <span>questions?</span>
                </h4>
              </div>
              <div className="it-custom-accordion">
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
