import Image from 'next/image';

export default function Service() {
  return (
    <div className="it-choose-area p-relative pt-180 pb-110">
      <div className="it-choose-shape-4 d-none d-md-block">
        <Image src="/img/choose/shape-1-4.png" width={85} height={24} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 mb-30">
            <div className="it-choose-left">
              <div className="it-choose-title-box mb-30">
                <span className="it-section-subtitle">WHY CHOOSE US</span>
                <h4 className="it-section-title">
                  Creating A Community Of Life Long
                  <span className="p-relative z-index">
                    {' '}
                    Learners.
                    <svg
                      className="title-shape-3"
                      width="169"
                      height="65"
                      viewBox="0 0 169 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M73.9865 8.52241C79.0935 6.03398 83.1809 4.26476 89.5018 3.31494C94.8148 2.51659 100.239 2.08052 105.59 1.95274C121.035 1.5839 135.743 4.94481 147.12 9.7789C159.246 14.931 167.348 22.7171 166.701 31.8511C165.923 42.8363 151.983 52.0035 134.146 57.1364C110.893 63.8284 82.3457 64.1305 59.197 61.1289C38.1374 58.3982 12.2599 51.9446 4.20444 40.1836C-2.8133 29.9382 12.6851 18.2085 28.1538 11.6691C40.9733 6.24978 56.315 2.97602 71.4123 4.09034C82.5481 4.91227 93.8269 6.91079 103.074 10.0494C113.489 13.5844 120.759 18.7016 128.482 23.7722"
                        stroke="#0AB99D"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h4>
              </div>
              <div className="it-choose-text pb-15">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris..
                </p>
              </div>
              <div className="it-choose-content-box">
                <div className="row gx-20">
                  <div className="col-md-6 col-sm-6 mb-20">
                    <div className="it-choose-content">
                      <h5>
                        <i className="fa-solid fa-circle-check"></i>World Class
                        Trainers
                      </h5>
                      <p>Gravida dictum fusce placerat ultricies integer </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 mb-20">
                    <div className="it-choose-content">
                      <h5>
                        <i className="fa-solid fa-circle-check"></i>Easy
                        Learning
                      </h5>
                      <p>Gravida dictum fusce placerat ultricies integer </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 mb-20">
                    <div className="it-choose-content">
                      <h5>
                        <i className="fa-solid fa-circle-check"></i>Flexible
                      </h5>
                      <p>Gravida dictum fusce placerat ultricies integer </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 mb-20">
                    <div className="it-choose-content">
                      <h5>
                        <i className="fa-solid fa-circle-check"></i>Affordable
                        Price
                      </h5>
                      <p>Gravida dictum fusce placerat ultricies integer </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-30">
            <div className="it-choose-thumb-box text-center text-md-end">
              <div className="it-choose-thumb p-relative">
                <Image
                  src="/img/choose/choose-2-1.jpg"
                  width={530}
                  height={755}
                  alt=""
                  style={{ height: 'auto' }}
                />
                <div className="it-choose-shape-1">
                  <Image
                    src="/img/choose/shape-1-1.png"
                    width={357}
                    height={306}
                    alt=""
                  />
                </div>
                <div className="it-choose-shape-2">
                  <Image
                    src="/img/choose/shape-1-2.png"
                    width={357}
                    height={303}
                    alt=""
                  />
                </div>
                <div className="it-choose-shape-3 d-none d-lg-block">
                  <Image
                    src="/img/choose/shape-1-3.png"
                    width={277}
                    height={271}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
