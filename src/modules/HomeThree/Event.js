import Image from 'next/image';
import Link from 'next/link';

export default function Event() {
  return (
    <div id="it-event" className="it-event-area p-relative pt-120 pb-120">
      <div className="it-event-shape-3 d-none d-xxl-block">
        <Image src="/img/event/shape-1-1.png" width={265} height={52} alt="" />
      </div>
      <div className="it-event-shape-4 d-none d-xl-block">
        <Image src="/img/event/shape-1-2.png" width={41} height={37} alt="" />
      </div>
      <div className="it-event-shape-5">
        <Image src="/img/event/shape-1-3.png" width={176} height={168} alt="" />
      </div>
      <div className="it-event-shape-6">
        <Image src="/img/event/shape-1-4.png" width={66} height={65} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="it-event-left">
              <div className="it-event-title-box">
                <span className="it-section-subtitle-3">
                  <Image
                    src="/img/about/bg.svg"
                    width={23}
                    height={17}
                    alt=""
                  />{' '}
                  explore Events
                </span>
                <h2 className="it-section-title-3 pb-20">
                  our best upcoming events
                </h2>
              </div>
              <div className="it-event-content">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod <br />
                  tempor incididunt ut labore.
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate
                </p>
                <Link className="it-btn-theme-2" href="/contact">
                  <span>
                    admission open
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
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="it-event-thumb-box text-center text-lg-start p-relative">
              <div className="it-event-shape-1 d-none d-lg-block">
                <Image
                  src="/img/event/shape-1-5.png"
                  width={230}
                  height={80}
                  alt=""
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-event-shape-2">
                <Image
                  src="/img/event/shape-1-6.png"
                  width={266}
                  height={266}
                  alt=""
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-event-thumb">
                <Image
                  src="/img/event/thumb-1.png"
                  width={565}
                  height={688}
                  alt=""
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
