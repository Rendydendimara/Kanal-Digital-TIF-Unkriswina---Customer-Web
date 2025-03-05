import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
  const workStyle = { backgroundImage: `url('/img/work/work-bg.jpg')` };
  return (
    <div className="it-wrok-area it-wrok-bg pt-120 pb-90" style={workStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="it-course-title-box mb-60 text-center">
              <span className="it-section-subtitle-4">
                <Image
                  src="/img/category/title.svg"
                  alt=""
                  width={23}
                  height={17}
                />
                working strategy
              </span>
              <h4 className="it-section-title-3">our work process</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="it-work-item text-center">
              <div className="it-work-icon">
                <span>
                  <Image
                    src="/img/work/work-1.svg"
                    alt=""
                    width={50}
                    height={51}
                  />
                </span>
              </div>
              <div className="it-work-content">
                <h4 className="it-work-title-sm">
                  <Link href="/services/details">start course</Link>
                </h4>
                <p>
                  Duis aute irure dolor reprehenderit in voluptate velit esse
                  cillum dolore fugiat nulla pariatur. Excepteur
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="it-work-item active text-center">
              <div className="it-work-icon">
                <span>
                  <Image
                    src="/img/work/work-1.svg"
                    alt=""
                    width={50}
                    height={51}
                  />
                </span>
              </div>
              <div className="it-work-content">
                <h4 className="it-work-title-sm">
                  <Link href="/services/details">Make Decision</Link>
                </h4>
                <p>
                  Duis aute irure dolor reprehenderit in voluptate velit esse
                  cillum dolore fugiat nulla pariatur. Excepteur
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="it-work-item text-center">
              <div className="it-work-icon">
                <span>
                  <Image
                    src="/img/work/work-1.svg"
                    alt=""
                    width={50}
                    height={51}
                  />
                </span>
              </div>
              <div className="it-work-content">
                <h4 className="it-work-title-sm">
                  <Link href="/services/details">Get a Certificate</Link>
                </h4>
                <p>
                  Duis aute irure dolor reprehenderit in voluptate velit esse
                  cillum dolore fugiat nulla pariatur. Excepteur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
