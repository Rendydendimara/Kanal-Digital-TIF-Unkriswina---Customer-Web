import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import MenuItems from './MenuItems';
import MobileMenuItems from './MobileMenuItems';

export default function HeaderFour(props) {
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
      <header>
        <div className="it-header-transparent">
          <div
            id="header-sticky"
            className={`it-header-2-area it-header-3-style it-header-5-style ${
              isVisible ? 'header-sticky' : ''
            }`}
          >
            <div className="container">
              <div className="it-header-2-plr">
                <div className="it-header-wrap p-relative">
                  <div className="row align-items-center">
                    <div className="col-xl-2 col-6">
                      <div className="it-header-2-logo">
                        <Link href="/">
                          <Image
                            src="/img/logo/logo-yellow.png"
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
                        <div className="it-header-2-button d-none d-md-block">
                          <Link className="it-btn-white" href="/contact">
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
