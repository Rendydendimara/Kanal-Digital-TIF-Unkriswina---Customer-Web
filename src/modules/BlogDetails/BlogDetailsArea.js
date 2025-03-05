import Image from 'next/image';
import Sidebar from '@/components/Blog/Sidebar';

export default function BlogDetailsArea({ item }) {
  if (!item) {
    return <div>Loading...</div>;
  }
  const { detailsImg, title, publishedDate, commentCount, author } = item;

  return (
    <div className="postbox__area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__details-wrapper">
              <article>
                <div className="postbox__thumb mb-30 w-img">
                  <Image
                    src={
                      detailsImg ? detailsImg : '/img/blog/blog-details-1.jpg'
                    }
                    alt=""
                    width={844}
                    height={401}
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="postbox__details-title-box pb-40">
                  <div className="postbox__meta">
                    <span>
                      <i className="fa-solid fa-calendar-days"></i>
                      {publishedDate ? publishedDate : '14 June 2023'}
                    </span>
                    <span>
                      <i className="fa-regular fa-comments"></i>Comment (
                      {commentCount ? commentCount : '06'})
                    </span>
                  </div>
                  <h4 className="postbox__title mb-20">
                    {title
                      ? title
                      : 'Pellentesque dignissim enim sit amet venenatis cursus eget nunc'}
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat aute
                    irure dolor in reprehenderit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat aute
                    irure dolor in reprehenderit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat aute
                    irure dolor in reprehenderit.
                  </p>
                </div>
                <div className="postbox__content pb-20">
                  <div className="postbox__content-img mb-40 d-flex justify-content-between">
                    <Image
                      src="/img/blog/blog-details-2.jpg"
                      alt=""
                      width={407}
                      height={275}
                      style={{ height: 'auto' }}
                    />
                    <Image
                      src="/img/blog/blog-details-3.jpg"
                      alt=""
                      width={407}
                      height={275}
                      style={{ height: 'auto' }}
                    />
                  </div>
                  <div className="postbox__text">
                    <h4 className="postbox__details-title">
                      Latest Articles Updated Daily
                    </h4>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it’s no surprise that different
                      approaches to online marketing are becoming available. One
                      of these new approaches is performance marketing or
                      digital performance marketing. Keep reading to learn all
                      about performance marketing
                    </p>
                  </div>
                </div>
                <div className="postbox__item text-center">
                  <i className="fas fa-quote-right"></i>
                  <p>
                    Diam luctus nostra dapibus varius et semper semper rutrum ad
                    risus felis eros. Cursus libero viverra tempus netus diam
                    vestibulum
                  </p>
                  <span>{author ? author : 'David Backhum'}</span>
                </div>
                <div className="postbox__details-share-wrapper">
                  <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 col-md-7">
                      <div className="postbox__details-tag">
                        <span>Posted in:</span>
                        <a href="#">Development</a>
                        <a href="#">Digital</a>
                        <a href="#">Tech</a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                      <div className="postbox__details-share text-lg-end">
                        <span>Share:</span>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="postbox__comment">
                  <h3 className="postbox__comment-title">01 Comments</h3>
                  <ul>
                    <li>
                      <div className="postbox__comment-box d-flex align-items-center">
                        <div className="postbox__comment-info ">
                          <div className="postbox__comment-avater mr-20">
                            <Image
                              src="/img/avatar/avata-3.png"
                              alt=""
                              width={100}
                              height={100}
                              style={{ height: 'auto' }}
                            />
                          </div>
                        </div>
                        <div className="postbox__comment-text">
                          <div className="postbox__comment-reply d-flex align-items-center justify-content-between">
                            <span className="post-meta">
                              September 6, 2022 at 1:28 pm{' '}
                            </span>
                            <a href="#">Reply</a>
                          </div>
                          <div className="postbox__comment-name">
                            <h5>{author ? author : 'Jonathon Lopez'}</h5>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipi
                            vestibulum lectus egestas cubilia nam sagittis,
                            nulla posuere habitant
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="postbox__content-wrap">
                  <div className="it-contact__wrap">
                    <div className="it-contact__text pb-30">
                      <h5 className="it-contact__title">Let’s Get in Touch</h5>
                      <p>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                    </div>
                    <div className="it-contact__form-box">
                      <form action="#">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-12 mb-20">
                            <div className="it-contact__input-box">
                              <input type="text" placeholder="Your Name*" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-12 mb-20">
                            <div className="it-contact__input-box">
                              <input
                                type="email"
                                placeholder="Email Address*"
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-20">
                            <div className="it-contact__input-box">
                              <input type="email" placeholder="Website*" />
                            </div>
                          </div>
                          <div className="col-12 mb-20">
                            <div className="it-contact__textarea-box">
                              <textarea placeholder="Write Your Message*"></textarea>
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
              </article>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
