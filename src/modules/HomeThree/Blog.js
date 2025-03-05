import SingleBlog from '@/components/Blog';
import Image from 'next/image';
import Link from 'next/link';
import Blogs from '@/data/blogs';

export default function Blog() {
  return (
    <div id="it-blog" className="it-blog-area it-blog-color pb-90">
      <div className="container">
        <div className="it-blog-title-wrap mb-80">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-7 col-md-8">
              <div className="it-course-title-box">
                <span className="it-section-subtitle-3">
                  <Image
                    src="/img/about/bg.svg"
                    width={23}
                    height={17}
                    alt=""
                  />
                  Top Popular Course
                </span>
                <h4 className="it-section-title-3">
                  Check out educate features <br /> win any exam
                </h4>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-4">
              <div className="it-course-button text-start text-md-end pt-25">
                <Link className="it-btn-theme-2" href="/blog/two">
                  <span>
                    all blog post
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
            </div>
          </div>
        </div>
        <div className="row">
          {Blogs.map((blog) => {
            return (
              <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <SingleBlog
                  Slug={blog.slug}
                  Title={blog.title}
                  Img={blog.image}
                  commentCount={blog.commentCount}
                  publishedDate={blog.publishedDate}
                  btnText={blog.btnText}
                />
              </div>
            );
          }).slice(0, 3)}
        </div>
      </div>
    </div>
  );
}
