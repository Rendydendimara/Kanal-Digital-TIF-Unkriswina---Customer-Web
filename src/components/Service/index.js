import Link from 'next/link';

export default function SingleService(props) {
  const { serviceClass, Slug, Icon, Title, courseCount } = props;
  return (
    <div
      className={serviceClass ? serviceClass : 'it-category-item text-center'}
    >
      <div className="it-category-icon">
        <span>
          <i className={Icon ? Icon : 'flaticon-web-design'}></i>
        </span>
      </div>
      <div className="it-category-text">
        <h4 className="it-category-title">
          <Link href={`/services/${Slug}`}>{Title ? Title : 'Web Design'}</Link>
        </h4>
        <Link href={`/course${Slug ? '?category=' + Slug : ''}`}>
          {courseCount ? courseCount : '25'} Courses
          <span>
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.334 1.01807L15.0007 6.61807L10.334 12.2181"
                stroke="currentcolor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 6.61816H15"
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
