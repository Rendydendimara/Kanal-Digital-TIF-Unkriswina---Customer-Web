import Counter from '@/components/Counter';

export default function Funfact() {
  const counters = [
    {
      countNum: 6879,
      countTitle: 'Learners & counting',
      postfix: '+',
    },
    {
      countNum: 1327,
      countTitle: 'Courses & Video',
      postfix: '+',
    },
    {
      countNum: 1359,
      countTitle: 'Registered Enrolls',
      postfix: '+',
    },
    {
      countNum: 1557,
      countTitle: 'Certified Students',
      postfix: '+',
    },
  ];

  return (
    <div className="it-funfact-4-area theme-bg-3 pt-75 pb-45">
      <div className="container">
        {counters && (
          <div className="row">
            {counters.map((counter, num) => (
              <div
                key={num}
                className="col-xl-3 col-lg-3 col-md-6 mb-30 d-flex justify-content-center"
              >
                <div className="it-funfact-4-wrap d-flex align-items-center justify-content-center">
                  <div className="it-funfact-4-item">
                    <h4>
                      <Counter
                        start={0}
                        end={counter.countNum}
                        duration={2}
                        postfix={counter.postfix}
                      />
                    </h4>
                    <p>{counter.countTitle}</p>
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
