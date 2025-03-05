import Image from 'next/image';
import dynamic from 'next/dynamic';

const Countdown = dynamic(() => import('@/components/Countdown'), {
  ssr: false,
});

export default function Contact() {
  const targetDate = new Date('2024-12-31T23:59:59');

  return (
    <div
      id="it-contact"
      className="it-contact-area it-contact-bg p-relative pt-120 pb-120"
    >
      <Image src="/img/contact/bg.jpg" alt="" fill={true} />
      <div className="it-contact-shape-1 d-none d-lg-block">
        <Image src="/img/contact/shape-1-1.png" alt="" width={41} height={37} />
      </div>
      <div className="it-contact-shape-2 d-none d-lg-block">
        <Image src="/img/contact/shape-1-2.png" alt="" width={66} height={65} />
      </div>
      <div className="it-contact-shape-3 d-none d-xxl-block">
        <Image
          src="/img/contact/shape-1-3.png"
          alt=""
          width={124}
          height={122}
        />
      </div>
      <div className="it-contact-shape-4 d-none d-lg-block">
        <Image src="/img/contact/shape-1-4.png" alt="" width={63} height={63} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="it-contact-left">
              <div className="it-contact-title-box pb-20">
                <span className="it-section-subtitle-4">
                  <Image
                    src="/img/category/title.svg"
                    alt=""
                    width={23}
                    height={17}
                  />
                  Contact With US
                </span>
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
              <div className="it-contact-timer-box">
                <Countdown targetDate={targetDate} />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="it-contact-wrap">
              <Image src="/img/contact/bg-5.jpg" alt="" fill={true} />
              <h4 className="it-contact-title pb-15">
                Sign Up for Free Resources
              </h4>
              <form action="#">
                <div className="row">
                  <div className="col-12 mb-15">
                    <div className="it-contact-input-box">
                      <input type="text" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-12 mb-15">
                    <div className="it-contact-input-box">
                      <input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-12 mb-15">
                    <div className="it-contact-input-box">
                      <input type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-12 mb-30">
                    <div className="it-contact-textarea-box">
                      <textarea placeholder="Message"></textarea>
                    </div>
                  </div>
                </div>
              </form>
              <button type="submit" className="it-btn-yellow radius">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
