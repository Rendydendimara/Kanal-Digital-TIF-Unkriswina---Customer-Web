import Faq from '@/components/Faq';
import Image from 'next/image';

export default function FaqArea() {
  return (
    <div className="it-faq-area p-relative pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-faq-wrap">
              <div className="it-custom-accordion it-custom-accordion-style-3">
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
