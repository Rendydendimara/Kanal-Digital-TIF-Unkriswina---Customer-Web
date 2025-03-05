import Image from 'next/image';
import Link from 'next/link';

export default function SingleTeam(props) {
  const { teamClass, Slug, Img, Teacher, Designation, imgWidth, imgHeight } =
    props;
  return (
    <div className={teamClass ? teamClass : 'it-team-item'}>
      <div className="it-team-thumb-box p-relative">
        <div className="it-team-thumb">
          <Image
            src={Img ? Img : '/img/team/team-1-1.png'}
            width={imgWidth ? imgWidth : 371}
            height={imgHeight ? imgHeight : 366}
            alt=""
            style={{ height: 'auto' }}
          />
        </div>
        <div className="it-team-social-box">
          <button>
            <i className="fa-sharp fa-light fa-share-nodes"></i>
          </button>
          <div className="it-team-social">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="it-team-author-box d-flex align-items-center justify-content-between">
          <div className="it-team-author-info">
            <h5 className="it-team-author-name">
              <Link href={`/teacher/${Slug ? Slug : 'details'}`}>
                {Teacher ? Teacher : 'Esther Howard'}
              </Link>
            </h5>
            <span>{Designation ? Designation : 'Junior Instructor'}</span>
          </div>
          <div className="it-team-link">
            <Link href={`/teacher/${Slug ? Slug : 'details'}`}>
              <svg
                width="21"
                height="8"
                viewBox="0 0 21 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                  fill="currentcolor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
