import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import MenuItems from './MenuItems';
import MobileMenuItems from './MobileMenuItems';

export default function HeaderTwo(props) {
  const { menuFormat } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const cartItemsCount = useSelector((state) => state.product).addedProducts
    .length;

  useEffect(() => {
    // Sticky is displayed after scrolling for 100 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const [isClient, setIsClient] = useState(false); // State to track if component is mounted on the client side
  // Set state to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  return (
    <>
      <header className="it-header-height">
        <div className="it-header-2-top-area it-header-2-top-style black-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-6 col-md-5 col-sm-7">
                <div className="it-header-2-top-left">
                  <ul className="text-center text-sm-start">
                    <li className="d-none d-xl-inline-block">
                      <a href="tel:(00)8757845682">
                        <span>
                          <i className="fa-light fa-phone-volume"></i>
                        </span>
                        (00) 875 784 5682
                      </a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <a href="mailto:pacargoinfo@gmail.com">
                        <span>
                          <i className="fa-light fa-envelope-open-text"></i>
                        </span>
                        pacargoinfo@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fal fa-map-marker-alt"></i>
                        </span>{' '}
                        Hudson, Wisconsin(WI), 54016
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-7 col-sm-5 d-none d-sm-block">
                <div className="it-header-2-top-right-wrap text-end">
                  <div className="it-header-2-top-right">
                    <ul>
                      <li>
                        <div className="it-header-2-top-right-text d-none d-md-block">
                          <a href="#">Help /</a>
                          <a href="#">support</a>
                          <a href="#">/ contact</a>
                        </div>
                      </li>
                      <li>
                        <div className="it-header-2-top-social">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-skype"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="header-sticky"
          className={`it-header-5-area it-header-1-style it-header-2-style ${
            isVisible ? 'header-sticky' : ''
          }`}
        >
          <div className="container">
            <div className="it-header-wrap p-relative">
              <div className="row align-items-center">
                <div className="col-xl-2 col-6">
                  <div className="it-header-5-logo">
                    <Link href="/">
                      <Image
                        src="/img/logo/logo-blue.png"
                        alt=""
                        width={151}
                        height={40}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 d-none d-xl-block">
                  <div className="it-header-2-main-menu">
                    <nav className="it-menu-content">
                      <MenuItems onePage={menuFormat} />
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-6">
                  <div className="it-header-2-right d-flex align-items-center justify-content-end">
                    <div className="it-header-2-icon relative">
                      <Link href="/cart">
                        <i className="fa-regular fa-cart-shopping"></i>
                      </Link>
                      {cartItemsCount > 0 ? (
                        <span className="cart-badge">{cartItemsCount}</span>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="it-header-2-button d-none d-lg-block">
                      <Link className="it-btn-white sky-bg" href="/contact">
                        <span>
                          Contact Us
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 1.24023L16 7.24023L11 13.2402"
                              stroke="currentcolor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 7.24023H16"
                              stroke="currentcolor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                    <div
                      className="it-header-2-bar d-xl-none"
                      onClick={() => {
                        setOffCanvasOpen(true);
                      }}
                    >
                      <button className="it-menu-bar">
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="it-offcanvas-area">
        <div className={offCanvasOpen ? 'itoffcanvas opened' : 'itoffcanvas'}>
          <div className="it-offcanva-bottom-shape d-none d-xxl-block"></div>
          <div className="itoffcanvas__close-btn">
            <button
              className="close-btn"
              onClick={() => {
                setOffCanvasOpen(false);
              }}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <Link href="/">
              <Image
                src="/img/logo/logo-white.png"
                alt=""
                width={157}
                height={42}
              />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p>
              Suspendisse interdum consectetur libero id. Fermentum leo vel orci
              porta non. Euismod viverra nibh cras pulvinar suspen.
            </p>
          </div>
          <div className="it-menu-mobile">
            <MobileMenuItems onePage={menuFormat} />
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="maito:hello@yourmail.com">hello@yourmail.com</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:(00)45611227890">(00) 456 1122 7890</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <Link
                  href="htits://www.google.com/maps/@37.4801311,22.8928877,3z"
                  target="_blank"
                >
                  Riverside 255, San Francisco, USA{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={offCanvasOpen ? 'body-overlay apply' : 'body-overlay'}
      ></div>
    </>
  );
}
