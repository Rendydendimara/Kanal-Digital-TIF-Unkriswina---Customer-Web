import SingleBlog from '@/components/Blog';
import Image from 'next/image';
import Link from 'next/link';
import Blogs from '@/data/blogs';

export default function Blog() {
  return (
    <div
      id="it-blog"
      className="it-blog-area it-blog-style-2 it-blog-style-5 p-relative pt-90 pb-90"
    >
      <div className="it-blog-shape-1 d-none d-md-block">
        <Image src="/img/blog/shape-1.png" alt="" width={41} height={37} />
      </div>
      <div className="container">
        <div className="it-blog-title-wrap mb-80">
          <div className="row align-items-end">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="it-blog-title-box">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i>
                  explore Events
                </span>
                <h2 className="it-section-title-3">Post Popular Post.</h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="it-blog-button text-start text-md-end">
                <Link className="it-btn-yellow radius" href="/blog/two">
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
                  btnClass="it-btn-yellow-sm"
                  Slug={blog.slug}
                  Title={blog.title}
                  Img={blog.image}
                  commentCount={blog.commentCount}
                  publishedDate={blog.publishedDate}
                  btnText={blog.btnText}
                />
              </div>
            );
          }).slice(2, 5)}
        </div>
      </div>
    </div>
  );
}
