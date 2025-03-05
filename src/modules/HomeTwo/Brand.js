import Image from 'next/image';
import Slider from 'react-slick';

export default function Brand() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    margin: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="it-brand-area black-bg pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-brand-wrapper">
              <div className="swiper-container it-brand-active">
                <Slider {...sliderSettings} className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="it-brand-item text-center">
                      <Image
                        src="/img/brand/brand-1-1.png"
                        width={199}
                        height={38}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="it-brand-item text-center">
                      <Image
                        src="/img/brand/brand-1-1.png"
                        width={199}
                        height={38}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="it-brand-item text-center">
                      <Image
                        src="/img/brand/brand-1-1.png"
                        width={199}
                        height={38}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="it-brand-item text-center">
                      <Image
                        src="/img/brand/brand-1-1.png"
                        width={199}
                        height={38}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="it-brand-item">
                      <Image
                        src="/img/brand/brand-1-1.png"
                        width={199}
                        height={38}
                        alt=""
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
