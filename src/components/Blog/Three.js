import Image from 'next/image';
import Link from 'next/link';

export default function SingleBlogThree(props) {
  const {
    blogClass,
    Slug,
    Img,
    Title,
    Author,
    publishedDate,
    btnText,
    imgWidth,
    imgHeight,
  } = props;

  return (
    <div className={blogClass ? blogClass : 'postbox__thumb-box'}>
      <div className="postbox__main-thumb mb-30">
        <Image
          src={Img ? Img : '/img/blog/blog-sidebar-1.jpg'}
          width={imgWidth ? imgWidth : 844}
          height={imgHeight ? imgHeight : 513}
          alt=""
          style={{ height: 'auto' }}
        />
      </div>
      <div className="postbox__content-box">
        <div className="postbox__meta">
          <span>
            <i className="fa-light fa-calendar-days"></i>
            {publishedDate ? publishedDate : 'April 21, 2023'}
          </span>
          <span>
            <i className="fal fa-user"></i>
            {Author ? Author : 'Alamgir Chowdhuri'}
          </span>
        </div>
        <h4 className="postbox__details-title">
          <Link href={`/blog/${Slug ? Slug : 'details'}`}>
            {Title
              ? Title
              : 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'}
          </Link>
        </h4>
        <Link
          className="it-btn mt-15"
          href={`/blog/${Slug ? Slug : 'details'}`}
        >
          <span>
            {btnText ? btnText : 'read more'}
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
  );
}
