import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [countdown, setCountdown] = useState(calculateTimeRemaining());

  const endDate = new Date('2024-12-31T23:59:59');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate
      ? targetDate.getTime() - now
      : endDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="row">
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
        <div className="it-contact-timer text-center">
          <h6>{countdown.days}</h6>
          <i>DAYS</i>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
        <div className="it-contact-timer text-center">
          <h6>{countdown.hours}</h6>
          <i>HOURS</i>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
        <div className="it-contact-timer text-center">
          <h6>{countdown.minutes}</h6>
          <i>MINUTES</i>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
        <div className="it-contact-timer text-center">
          <h6>{countdown.seconds}</h6>
          <i>SECONDS</i>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
