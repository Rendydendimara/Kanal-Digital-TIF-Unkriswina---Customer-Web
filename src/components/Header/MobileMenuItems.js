import Link from "next/link";
import { useState } from "react";

export default function MobileMenuItems(props) {
  const { onePage } = props;

  const [home, setHome] = useState(false);
  const [page, setPage] = useState(false);
  const [service, setService] = useState(false);
  const [blog, setBlog] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === "home") {
      setHome(!home);
      setPage(false);
      setService(false);
      setBlog(false);
    } else if (menu === "page") {
      setHome(false);
      setPage(!page);
      setService(false);
      setBlog(false);
    } else if (menu === "service") {
      setHome(false);
      setPage(false);
      setService(!service);
      setBlog(false);
    } else if (menu === "blog") {
      setHome(false);
      setPage(false);
      setService(false);
      setBlog(!blog);
    }
  };

  const onepageMobileMenuHome = (
    <li className="has-dropdown p-static">
      <Link
        href="#"
        className={home ? "active" : ""}
        onClick={() => {
          openMobileMenu("home");
        }}
      >
        Home
        <svg
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
            fill="#0E2A46"
          ></path>
        </svg>
      </Link>
      <ul className={home ? "it-submenu submenu-open" : "it-submenu"}>
        <li>
          <Link href="/">Home 1</Link>
        </li>
        <li>
          <Link href="/home-2">Home 2</Link>
        </li>
        <li>
          <Link href="/home-3">Home 3</Link>
        </li>
        <li>
          <Link href="/home-4">Home 4</Link>
        </li>
        <li>
          <Link href="/home-5">Home 5</Link>
        </li>
      </ul>
    </li>
  );

  return (
    <>
      {onePage == "onepage1" ? (
        <ul>
          {onepageMobileMenuHome}
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
      ) : onePage == "onepage2" ? (
        <ul>
          {onepageMobileMenuHome}
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
      ) : onePage == "onepage3" ? (
        <ul>
          {onepageMobileMenuHome}
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
      ) : onePage == "onepage4" ? (
        <ul>
          {onepageMobileMenuHome}
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
      ) : onePage == "onepage5" ? (
        <ul>
          {onepageMobileMenuHome}
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
            <Link
              href="#"
              className={home ? "active" : ""}
              onClick={() => {
                openMobileMenu("home");
              }}
            >
              Home
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={home ? "it-submenu submenu-open" : "it-submenu"}>
              <li>
                <Link href="/">Home 1</Link>
              </li>
              <li>
                <Link href="/home1-onepage">Home 1 Onepage</Link>
              </li>
              <li>
                <Link href="/home-2">Home 2</Link>
              </li>
              <li>
                <Link href="/home2-onepage">Home 2 Onepage</Link>
              </li>
              <li>
                <Link href="/home-3">Home 3</Link>
              </li>
              <li>
                <Link href="/home3-onepage">Home 3 Onepage</Link>
              </li>
              <li>
                <Link href="/home-4">Home 4</Link>
              </li>
              <li>
                <Link href="/home4-onepage">Home 4 Onepage</Link>
              </li>
              <li>
                <Link href="/home-5">Home 5</Link>
              </li>
              <li>
                <Link href="/home5-onepage">Home 5 Onepage</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/tentang-kami">about us</Link>
          </li>
          <li className="has-dropdown">
            <Link
              href="#"
              className={service ? "active" : ""}
              onClick={() => {
                openMobileMenu("service");
              }}
            >
              Services
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={service ? "it-submenu submenu-open" : "it-submenu"}>
              <li>
                <Link href="/services">services 01</Link>
              </li>
              <li>
                <Link href="/services/two">services 02</Link>
              </li>
              <li>
                <Link href="/services/three">services 03</Link>
              </li>
              <li>
                <Link href="/services/details">services details</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link
              href="#"
              className={page ? "active" : ""}
              onClick={() => {
                openMobileMenu("page");
              }}
            >
              Pages
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={page ? "it-submenu submenu-open" : "it-submenu"}>
              <li>
                <Link href="/course">Course 01</Link>
              </li>
              <li>
                <Link href="/course/course-2">Course 02</Link>
              </li>
              <li>
                <Link href="/course/details">Course Details</Link>
              </li>
              <li>
                <Link href="/teacher">Teacher</Link>
              </li>
              <li>
                <Link href="/teacher/details">Teacher Details</Link>
              </li>
              <li>
                <Link href="/price">Price</Link>
              </li>
              <li>
                <Link href="/event">Event</Link>
              </li>
              <li>
                <Link href="/event/details">Event Details</Link>
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
            <Link
              href="#"
              className={blog ? "active" : ""}
              onClick={() => {
                openMobileMenu("blog");
              }}
            >
              Blog
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={blog ? "it-submenu submenu-open" : "it-submenu"}>
              <li>
                <Link href="/blog">Blog 01</Link>
              </li>
              <li>
                <Link href="/blog/two">Blog 02</Link>
              </li>
              <li>
                <Link href="/blog/sidebar">Blog Sidebar</Link>
              </li>
              <li>
                <Link href="/blog/details">Blog details</Link>
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
