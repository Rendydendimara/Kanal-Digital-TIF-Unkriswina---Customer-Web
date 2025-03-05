import Image from 'next/image';

export default function ChooseUs() {
  return (
    <div className="it-choose-area it-choose-style-2 z-index fix p-relative grey-bg pt-180 pb-110">
      <div className="it-choose-shape-5 d-none d-xl-block">
        <Image
          src="/img/choose/shape-1-7.png"
          width={846}
          height={681}
          alt=""
        />
      </div>
      <div className="it-choose-shape-6 d-none d-xl-block">
        <Image src="/img/choose/shape-1-8.png" width={41} height={37} alt="" />
      </div>
      <div className="it-choose-shape-7 d-none d-xl-block">
        <Image src="/img/choose/shape-1-9.png" width={63} height={63} alt="" />
      </div>
      <div className="it-choose-shape-8 d-none d-xl-block">
        <Image
          src="/img/choose/shape-1-10.png"
          width={482}
          height={484}
          alt=""
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 mb-30">
            <div className="it-choose-thumb-box text-center text-lg-end">
              <div className="it-choose-thumb p-relative">
                <Image
                  src="/img/choose/choose-2-2.jpg"
                  width={530}
                  height={700}
                  alt=""
                  style={{ height: 'auto' }}
                />
                <div className="it-choose-shape-1">
                  <Image
                    src="/img/choose/shape-1-5.png"
                    width={357}
                    height={337}
                    alt=""
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="it-choose-shape-2">
                  <Image
                    src="/img/choose/shape-1-6.png"
                    width={358}
                    height={340}
                    alt=""
                    style={{ height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-30">
            <div className="it-choose-left">
              <div className="it-choose-title-box mb-30">
                <span className="it-section-subtitle-2">WHY CHOOSE US</span>
                <h4 className="it-section-title">
                  Creating A Community Of Life Long Learners.
                </h4>
              </div>
              <div className="it-choose-content-box">
                <div className="it-choose-content d-flex align-items-center mb-30">
                  <div className="it-choose-icon">
                    <span>
                      <i className="flaticon-skill"></i>
                    </span>
                  </div>
                  <div className="it-choose-text">
                    <h4 className="it-choose-title">Affordable Courses</h4>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                </div>
                <div className="it-choose-content d-flex align-items-center mb-30">
                  <div className="it-choose-icon">
                    <span>
                      <i className="flaticon-funds"></i>
                    </span>
                  </div>
                  <div className="it-choose-text">
                    <h4 className="it-choose-title">Efficient & Flexible</h4>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                </div>
                <div className="it-choose-content d-flex align-items-center">
                  <div className="it-choose-icon">
                    <span>
                      <i className="flaticon-flexibility"></i>
                    </span>
                  </div>
                  <div className="it-choose-text">
                    <h4 className="it-choose-title">Skilled Teachers</h4>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
