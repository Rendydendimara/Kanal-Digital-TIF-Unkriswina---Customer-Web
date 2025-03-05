import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

export default function ContactArea() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="it-contact__area pt-120 pb-120">
      <div className="container">
        <div className="it-contact__wrap fix z-index-3 p-relative">
          <div className="it-contact__shape-1 d-none d-xl-block">
            <Image
              src="/img/contact/shape-2-1.png"
              alt=""
              width={340}
              height={340}
              style={{ height: 'auto' }}
            />
          </div>
          <div className="row align-items-end">
            <div className="col-xl-7">
              <div className="it-contact__right-box">
                <div className="it-contact__section-box pb-20">
                  <h4 className="it-contact__title pb-15">Get in Touch</h4>
                  <p>
                    Suspendisse ultrice gravida dictum fusce placerat <br />
                    ultricies integer{' '}
                  </p>
                </div>
                <div className="it-contact__content mb-55">
                  <ul>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-location-dot"></i>
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>Our Address</span>
                          <a href="#">
                            1564 Goosetown Drive <br />
                            Matthews, NC 28105
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-clock"></i>
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>Hours of Operation</span>
                          <a href="#">Mon - Fri: 9.00am to 5.00pm</a>
                          <span>[2nd sat Holiday]</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list d-flex align-items-start">
                        <div className="it-contact__icon">
                          <span>
                            <i className="fa-solid fa-phone phone"></i>
                          </span>
                        </div>
                        <div className="it-contact__text">
                          <span>contact</span>
                          <a href="tel:+99358954565">+99- 35895-4565</a>
                          <a href="mailto:supportyou@info.com">
                            supportyou@info.com
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="it-contact__bottom-box d-flex align-items-center justify-content-between">
                  <div className="it-contact__scrool smooth">
                    <a href="#it-newsletter">
                      <i className="fa-solid fa-arrow-down"></i>Customer Care
                    </a>
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
            </div>
            <div className="col-xl-5">
              <div className="it-contact__form-box">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Name*</label>
                        <input
                          type="text"
                          placeholder="Name"
                          name="user_name"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Email Address*</label>
                        <input
                          type="email"
                          placeholder="Email"
                          name="user_email"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Phone*</label>
                        <input
                          type="text"
                          placeholder="Phone"
                          name="user_phone"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Subject*</label>
                        <input
                          type="text"
                          placeholder="Subject"
                          name="user_subject"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-textarea-box">
                        <label>Message</label>
                        <textarea
                          placeholder="Message"
                          name="user_message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
                <button type="submit" className="it-btn">
                  <span>
                    Send Message
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
