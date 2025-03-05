import Image from 'next/image';
import Link from 'next/link';

export default function MenuItems(props) {
  const { onePage } = props;

  const onepageHomeMenu = (
    <li className="has-dropdown p-static">
      <Link href="/">home</Link>
      <div className="it-submenu submenu has-home-img">
        <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
          <div className="col home-img">
            <div className="home-img-thumb mb-15">
              <Image
                src="/img/menu/home-1.jpg"
                alt=""
                width={238}
                height={298}
              />
              <div className="home-img-btn">
                <Link className="it-btn-white-sm" href="/">
                  Multi Page
                </Link>
                <Link className="it-btn-white-sm" href="/home1-onepage">
                  One Page
                </Link>
              </div>
            </div>
            <div className="home-img-content text-center">
              <h4 className="home-img-title">
                <Link href="/">Home 01</Link>
              </h4>
            </div>
          </div>
          <div className="col home-img">
            <div className="home-img-thumb mb-15">
              <Image
                src="/img/menu/home-2.jpg"
                alt=""
                width={238}
                height={298}
              />
              <div className="home-img-btn">
                <Link className="it-btn-white-sm" href="/home-2">
                  Multi Page
                </Link>
                <Link className="it-btn-white-sm" href="/home2-onepage">
                  One Page
                </Link>
              </div>
            </div>
            <div className="home-img-content text-center">
              <h4 className="home-img-title">
                <Link href="/home-2">Home 02</Link>
              </h4>
            </div>
          </div>
          <div className="col home-img">
            <div className="home-img-thumb mb-15">
              <Image
                src="/img/menu/home-3.jpg"
                alt=""
                width={238}
                height={298}
              />
              <div className="home-img-btn">
                <Link className="it-btn-white-sm" href="home-3">
                  Multi Page
                </Link>
                <Link className="it-btn-white-sm" href="/home3-onepage">
                  One Page
                </Link>
              </div>
            </div>
            <div className="home-img-content text-center">
              <h4 className="home-img-title">
                <Link href="/home-3">Home 03</Link>
              </h4>
            </div>
          </div>
          <div className="col home-img">
            <div className="home-img-thumb mb-15">
              <Image
                src="/img/menu/home-4.jpg"
                alt=""
                width={238}
                height={298}
              />
              <div className="home-img-btn">
                <Link className="it-btn-white-sm" href="/home-4">
                  Multi Page
                </Link>
                <Link className="it-btn-white-sm" href="/home4-onepage">
                  One Page
                </Link>
              </div>
            </div>
            <div className="home-img-content text-center">
              <h4 className="home-img-title">
                <Link href="/home-4">Home 04</Link>
              </h4>
            </div>
          </div>
          <div className="col home-img">
            <div className="home-img-thumb mb-15">
              <Image
                src="/img/menu/home-5.jpg"
                alt=""
                width={238}
                height={298}
              />
              <div className="home-img-btn">
                <Link className="it-btn-white-sm" href="/home-5">
                  Multi Page
                </Link>
                <Link className="it-btn-white-sm" href="/home5-onepage">
                  One Page
                </Link>
              </div>
            </div>
            <div className="home-img-content text-center">
              <h4 className="home-img-title">
                <Link href="home-5">Home 05</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </li>
  );

  return (
    <>
      {onePage == 'onepage1' ? (
        <ul>
          {onepageHomeMenu}
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-team">Team</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
          <li>
            <Link href="#it-newsletter">Contact</Link>
          </li>
        </ul>
      ) : onePage == 'onepage2' ? (
        <ul>
          {onepageHomeMenu}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-contact">Contact</Link>
          </li>
          <li>
            <Link href="#it-event">Event</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : onePage == 'onepage3' ? (
        <ul>
          {onepageHomeMenu}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-service">Services</Link>
          </li>
          <li>
            <Link href="#it-team">Team</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : onePage == 'onepage4' ? (
        <ul>
          {onepageHomeMenu}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-testimonial">Testimonial</Link>
          </li>
          <li>
            <Link href="#it-event">Event</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : onePage == 'onepage5' ? (
        <ul>
          {onepageHomeMenu}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-testimonial">Testimonial</Link>
          </li>
          <li>
            <Link href="#it-contact">Contact</Link>
          </li>
          <li>
            <Link href="#it-gallery">Gallery</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className="has-dropdown p-static">
            <Link href="/">home</Link>
            <div className="it-submenu submenu has-home-img">
              <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
                <div className="col home-img">
                  <div className="home-img-thumb mb-15">
                    <Image
                      src="/img/menu/home-1.jpg"
                      alt=""
                      width={238}
                      height={298}
                    />
                    <div className="home-img-btn">
                      <Link className="it-btn-white-sm" href="/">
                        Multi Page
                      </Link>
                      <Link className="it-btn-white-sm" href="/home1-onepage">
                        One Page
                      </Link>
                    </div>
                  </div>
                  <div className="home-img-content text-center">
                    <h4 className="home-img-title">
                      <Link href="/">Home 01</Link>
                    </h4>
                  </div>
                </div>
                <div className="col home-img">
                  <div className="home-img-thumb mb-15">
                    <Image
                      src="/img/menu/home-2.jpg"
                      alt=""
                      width={238}
                      height={298}
                    />
                    <div className="home-img-btn">
                      <Link className="it-btn-white-sm" href="/home-2">
                        Multi Page
                      </Link>
                      <Link className="it-btn-white-sm" href="/home2-onepage">
                        One Page
                      </Link>
                    </div>
                  </div>
                  <div className="home-img-content text-center">
                    <h4 className="home-img-title">
                      <Link href="/home-2">Home 02</Link>
                    </h4>
                  </div>
                </div>
                <div className="col home-img">
                  <div className="home-img-thumb mb-15">
                    <Image
                      src="/img/menu/home-3.jpg"
                      alt=""
                      width={238}
                      height={298}
                    />
                    <div className="home-img-btn">
                      <Link className="it-btn-white-sm" href="/home-3">
                        Multi Page
                      </Link>
                      <Link className="it-btn-white-sm" href="/home3-onepage">
                        One Page
                      </Link>
                    </div>
                  </div>
                  <div className="home-img-content text-center">
                    <h4 className="home-img-title">
                      <Link href="/home-3">Home 03</Link>
                    </h4>
                  </div>
                </div>
                <div className="col home-img">
                  <div className="home-img-thumb mb-15">
                    <Image
                      src="/img/menu/home-4.jpg"
                      alt=""
                      width={238}
                      height={298}
                    />
                    <div className="home-img-btn">
                      <Link className="it-btn-white-sm" href="/home-4">
                        Multi Page
                      </Link>
                      <Link className="it-btn-white-sm" href="/home4-onepage">
                        One Page
                      </Link>
                    </div>
                  </div>
                  <div className="home-img-content text-center">
                    <h4 className="home-img-title">
                      <Link href="/home-4">Home 04</Link>
                    </h4>
                  </div>
                </div>
                <div className="col home-img">
                  <div className="home-img-thumb mb-15">
                    <Image
                      src="/img/menu/home-5.jpg"
                      alt=""
                      width={238}
                      height={298}
                    />
                    <div className="home-img-btn">
                      <Link className="it-btn-white-sm" href="/home-5">
                        Multi Page
                      </Link>
                      <Link className="it-btn-white-sm" href="/home5-onepage">
                        One Page
                      </Link>
                    </div>
                  </div>
                  <div className="home-img-content text-center">
                    <h4 className="home-img-title">
                      <Link href="/home-5">Home 05</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/about-us">about us</Link>
          </li>
          <li className="has-dropdown">
            <Link href="/services">services</Link>
            <ul className="it-submenu submenu">
              <li>
                <Link href="/services">services 01</Link>
              </li>
              <li>
                <Link href="/services-2">services 02</Link>
              </li>
              <li>
                <Link href="/services-3">services 03</Link>
              </li>
              <li>
                <Link href="/services/service-one">services details</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="#">pages</Link>
            <ul className="it-submenu submenu has-megamenu">
              <li>
                <Link href="/course">Course 01</Link>
              </li>
              <li>
                <Link href="/course-2">Course 02</Link>
              </li>
              <li>
                <Link href="/course/course-one">Course Details</Link>
              </li>
              <li>
                <Link href="/teacher">Teacher</Link>
              </li>
              <li>
                <Link href="/teacher/teacher-one">Teacher Details</Link>
              </li>
              <li>
                <Link href="/price">Price</Link>
              </li>
              <li>
                <Link href="/event">Event</Link>
              </li>
              <li>
                <Link href="/event/event-one">Event Details</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/checkout">Checkout</Link>
              </li>
              <li>
                <Link href="/testimonial">Testimonial</Link>
              </li>
              <li>
                <Link href="/registration/instructor">
                  Instructor Registration
                </Link>
              </li>
              <li>
                <Link href="/registration/student">
                  Student Registration 01
                </Link>
              </li>
              <li>
                <Link href="/registration/student-2">
                  Student Registration 02
                </Link>
              </li>
              <li>
                <Link href="/faq">Faq</Link>
              </li>
              <li>
                <Link href="/signin">Sign IN</Link>
              </li>
              <li>
                <Link href="/signup">Sign UP</Link>
              </li>
              <li>
                <Link href="/404">Error</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="blog">blog</Link>
            <ul className="it-submenu submenu">
              <li>
                <Link href="/blog">Blog 01</Link>
              </li>
              <li>
                <Link href="/blog-2">Blog 02</Link>
              </li>
              <li>
                <Link href="/blog-sidebar">Blog Sidebar</Link>
              </li>
              <li>
                <Link href="/blog/blog-one">Blog details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      )}
    </>
  );
}
