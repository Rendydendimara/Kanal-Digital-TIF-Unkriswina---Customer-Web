import { useState } from 'react';

export default function Coupon() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleCoupon = () => {
    setShowCoupon(!showCoupon);
  };

  return (
    <section className="coupon-area pt-100 pb-30">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="coupon-accordion">
              <h3>
                Returning customer?{' '}
                <span id="showlogin" onClick={handleLogin}>
                  Click here to login
                </span>
              </h3>
              <div
                id="checkout-login"
                className={`coupon-content${showLogin ? ' show' : ''}`}
              >
                <div className="coupon-info">
                  <p className="coupon-text">
                    Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                    sed est sit amet ipsum luctus.
                  </p>
                  <form action="#">
                    <p className="form-row-first">
                      <label>
                        Username or email <span className="required">*</span>
                      </label>
                      <input type="text" />
                    </p>
                    <p className="form-row-last">
                      <label>
                        Password <span className="required">*</span>
                      </label>
                      <input type="text" />
                    </p>
                    <p className="form-row">
                      <button className="it-btn" type="submit">
                        Login
                      </button>
                      <label>
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </p>
                    <p className="lost-password">
                      <a href="#">Lost your password?</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="coupon-accordion">
              <h3>
                Have a coupon?{' '}
                <span id="showcoupon" onClick={handleCoupon}>
                  Click here to enter your code
                </span>
              </h3>
              <div
                id="checkout_coupon"
                className={`coupon-checkout-content${
                  showCoupon ? ' show' : ''
                }`}
              >
                <div className="coupon-info">
                  <form action="#">
                    <p className="checkout-coupon">
                      <input type="text" placeholder="Coupon Code" />
                      <button className="it-btn" type="submit">
                        Apply Coupon
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
