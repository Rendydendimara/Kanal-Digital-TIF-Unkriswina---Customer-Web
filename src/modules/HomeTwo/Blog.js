import SingleBlogTwo from '@/components/Blog/Two';
import Link from 'next/link';
import Blogs from '@/data/blogs';

export default function Blog() {
  return (
    <div
      id="it-blog"
      className="it-blog-area it-blog-style-3 grey-bg pt-90 pb-90"
    >
      <div className="container">
        <div className="it-blog-title-wrap mb-60">
          <div className="row align-items-end">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="it-blog-title-box">
                <span className="it-section-subtitle-2">
                  DIRECTLY FROM BLOG
                </span>
                <h4 className="it-section-title">
                  Our latest news & upcoming <br />
                  blog posts
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="it-blog-button text-start text-md-end">
                <Link className="it-btn blue-bg" href="/blog">
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
              <div key={blog.id} className="col-xl-6 col-lg-6 col-md-6 mb-30">
                <SingleBlogTwo
                  Slug={blog.slug}
                  Title={blog.title}
                  Img={blog.image}
                  Author={blog.author}
                  publishedDate={blog.publishedDate}
                  btnText={blog.btnText}
                />
              </div>
            );
          }).slice(6, 8)}
        </div>
      </div>
    </div>
  );
}
