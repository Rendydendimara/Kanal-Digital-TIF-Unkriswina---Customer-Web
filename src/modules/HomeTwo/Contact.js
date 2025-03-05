import Image from 'next/image';
import dynamic from 'next/dynamic';
import ContactFormElements from '@/components/ContactForm/ContactForm';
const Countdown = dynamic(() => import('@/components/Countdown'), {
  ssr: false,
});

export default function Contact() {
  const targetDate = new Date('2024-12-31T23:59:59');

  return (
    <div
      id="it-contact"
      className="it-contact-area it-contact-style-2 it-contact-bg p-relative pt-120 pb-120"
    >
      <Image
        src="/img/contact/bg-1-2.jpg"
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className="it-contact-shape-1 d-none d-xxl-block">
        <Image src="/img/contact/shape-1-1.png" width={41} height={37} alt="" />
      </div>
      <div className="it-contact-shape-3 z-index-5 d-none d-xxl-block">
        <Image
          src="/img/contact/shape-1-6.png"
          width={176}
          height={168}
          alt=""
        />
      </div>
      <div className="it-contact-shape-4 d-none d-xxl-block">
        <Image src="/img/contact/shape-1-4.png" width={63} height={63} alt="" />
      </div>
      <div className="it-contact-shape-5 d-none d-xxl-block">
        <Image
          src="/img/contact/shape-1-7.png"
          width={154}
          height={178}
          alt=""
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="it-contact-left">
              <div className="it-contact-title-box pb-20">
                <span className="it-section-subtitle-2">Contact With US</span>
                <h2 className="it-section-title-3">
                  Register Now Get Premium Online Admison
                </h2>
              </div>
              <div className="it-contact-text pb-15">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
              <div
                className="it-contact-timer-box mb-40"
                data-countdown
                data-date="Sep 30 2024 20:20:22"
              >
                <Countdown targetDate={targetDate} />
              </div>
              <div className="it-contact-thumb-box">
                <Image
                  src="/img/contact/thumb-1-1.jpg"
                  width={690}
                  height={166}
                  alt=""
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="it-contact-wrap relative">
              <Image
                src="/img/contact/bg-5.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <h4 className="it-contact-title text-black">
                Search for courses
              </h4>
              <p className="pb-15">
                Suspendisse ultrice gravida dictum fusce <br />
                placerat ultricies integer
              </p>

              <form action="#">
                <ContactFormElements />
                <button className="it-btn black-bg">
                  <span>
                    submit now
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1.24023L16 7.24023L11 13.2402"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 7.24023H16"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
