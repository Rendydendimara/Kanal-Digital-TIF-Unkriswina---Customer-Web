import Image from 'next/image';
import Link from 'next/link';

export default function FooterTwo(props) {
  const { footerLogo, footerClass } = props;
  const footerStyle = { backgroundImage: `url('/img/footer/bg-1-1.jpg')` };

  return (
    <footer>
      <div
        className="it-footer-area it-footer-bg it-footer-style-5 black-bg relative pb-70"
        style={footerStyle}
      >
        <div className="it-footer-border">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-footer-top-info d-flex align-items-center it-footer-top-col-1">
                  <div className="it-footer-top-icon">
                    <span>
                      <i className="fa-light fa-location-dot"></i>
                    </span>
                  </div>
                  <div className="it-footer-top-text">
                    <span>Address:</span>
                    <a href="#">1925 Boggess Street</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-footer-top-info d-flex align-items-center it-footer-top-col-2">
                  <div className="it-footer-top-icon">
                    <span>
                      <i className="fa-light fa-phone phone"></i>
                    </span>
                  </div>
                  <div className="it-footer-top-text">
                    <span>Phone:</span>
                    <a href="tel:00875784568">(00) 875 784 568</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-footer-top-info d-flex align-items-center justify-content-md-end border-none it-footer-top-col-3">
                  <div className="it-footer-top-icon">
                    <span>
                      <i className="fa-light fa-envelope"></i>
                    </span>
                  </div>
                  <div className="it-footer-top-text">
                    <span>Email:</span>
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="it-footer-wrap pt-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-5">
                  <div className="it-footer-logo pb-25">
                    <Link href="/">
                      <Image
                        src={`/img/logo/${
                          footerLogo ? footerLogo : 'logo-1.png'
                        }`}
                        alt=""
                        width={151}
                        height={40}
                      />
                    </Link>
                  </div>
                  <div className="it-footer-text pb-5">
                    <p>
                      Interdum velit laoreet id donec ultrices <br />
                      tincidunt arcu. Tincidunt tortor aliqua <br />
                      mfacilisi cras fermentum odio eu.
                    </p>
                  </div>
                  <div className="it-footer-social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-6">
                  <h4 className="it-footer-title">our services:</h4>
                  <div className="it-footer-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>Web
                          development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>UI/UX
                          Design
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>
                          Management
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>Digital
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-angle-right"></i>Blog News
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-4">
                  <h4 className="it-footer-title">Gallery</h4>
                  <div className="it-footer-gallery-box">
                    <div className="row gx-0">
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb mb-10">
                          <Image
                            src="/img/footer/thumb-1-1.png"
                            alt=""
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb mb-10">
                          <Image
                            src="/img/footer/thumb-1-2.png"
                            alt=""
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-4 mb-10">
                        <div className="it-footer-thumb">
                          <Image
                            src="/img/footer/thumb-1-3.png"
                            alt=""
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb">
                          <Image
                            src="/img/footer/thumb-1-4.png"
                            alt=""
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb">
                          <Image
                            src="/img/footer/thumb-1-5.png"
                            alt=""
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb">
                          <Image
                            src="/img/footer/thumb-1-6.png"
                            alt=""
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 mb-50">
                <div className="it-footer-widget footer-col-8">
                  <h4 className="it-footer-title">Subscribe</h4>
                  <div className="it-footer-input-box p-relative">
                    <input
                      className="mb-20"
                      type="email"
                      placeholder="Enter your email:"
                    />
                    <button className="it-btn-white sky-bg">
                      <span>SUBSCRIBE NOW</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-copyright-text text-center">
                <p>
                  Copyright © 2023 <a href="#">Educate </a> || All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
