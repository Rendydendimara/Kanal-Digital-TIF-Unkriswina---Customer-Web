import Image from 'next/image';
import Counter from '@/components/Counter';

export default function Funfact() {
  const counters = [
    {
      countNum: 3,
      countTitle: 'Successfully Trained',
      countIcon: 'flaticon-teacher',
      postfix: 'k+',
    },
    {
      countNum: 15,
      countTitle: 'Classes Completed',
      countIcon: 'flaticon-completed-task',
      postfix: 'k+',
    },
    {
      countNum: 97,
      countTitle: 'Satisfaction Rate',
      countIcon: 'flaticon-customer-review',
      postfix: '%',
    },
    {
      countNum: 102,
      countTitle: 'Students Community',
      countIcon: 'flaticon-class',
      postfix: 'k+',
    },
  ];

  const funFactStyle = {
    backgroundImage: `url('/img/funfact/funfact-bg.png')`,
  };

  return (
    <div className="it-funfact-area z-index-5">
      <div className="container">
        <div className="it-funfact-bg-wrap theme-bg" style={funFactStyle}>
          {counters && (
            <div className="row gx-0">
              {counters.map((counter, num) => (
                <div key={num} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="it-funfact-item d-flex align-items-center">
                    <div className="it-funfact-icon">
                      <span>
                        <i className={counter.countIcon}></i>
                      </span>
                    </div>
                    <div className="it-funfact-content">
                      <h6>
                        <Counter
                          start={0}
                          end={counter.countNum}
                          duration={5}
                          postfix={counter.postfix}
                        />
                      </h6>
                      <span>{counter.countTitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
