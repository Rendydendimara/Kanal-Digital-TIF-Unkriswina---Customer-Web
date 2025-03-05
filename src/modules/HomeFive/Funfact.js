import Image from 'next/image';
import Counter from '@/components/Counter';

export default function Funfact() {
  const counters = [
    {
      countNum: 2500,
      countTitle: 'Total Teacher',
      countIcon: 'flaticon-ux-design',
    },
    {
      countNum: 5000,
      countTitle: 'Total student',
      countIcon: 'flaticon-completed-task',
    },
    {
      countNum: 408,
      countTitle: 'Total Class Room',
      countIcon: 'flaticon-coding',
    },
    {
      countNum: 7313,
      countTitle: 'Best Awards Won',
      countIcon: 'flaticon-promotion',
    },
  ];

  const funFactStyle = {
    backgroundImage: `url('/img/funfact/bg-2.png')`,
  };

  return (
    <div
      className="it-funfact-5-area it-funfact-5-bg p-relative fix yellow-bg pt-100 pb-60"
      style={funFactStyle}
    >
      <div className="it-funfact-5-shape-1 d-none d-xxl-block">
        <Image
          src="/img/funfact/shape-5-1.png"
          alt=""
          width={107}
          height={101}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-funfact-5-shape-2">
        <Image
          src="/img/funfact/shape-5-2.png"
          alt=""
          width={63}
          height={63}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="container">
        {counters && (
          <div className="row">
            {counters.map((counter, num) => (
              <div key={num} className="col-xl-3 col-md-6 mb-30">
                <div className="it-funfact-5-item text-center">
                  <div className="it-funfact-5-icon">
                    <span>
                      <i className={counter.countIcon}></i>
                    </span>
                  </div>
                  <div className="it-funfact-5-content mt-25">
                    <h4 className="it-funfact-5-number purecounter">
                      <Counter start={0} end={counter.countNum} duration={3} />
                    </h4>
                    <span>{counter.countTitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
