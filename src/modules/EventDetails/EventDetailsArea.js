import Image from 'next/image';

export default function EventDetailsArea({ item }) {
  if (!item) {
    return <div>Loading...</div>;
  }
  const {
    title,
    description,
    detailsImg,
    lessonCount,
    eventTime,
    eventDate,
    eventMonth,
    venue,
    phone,
    email,
  } = item;

  return (
    <div className="it-event-details-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="it-evn-details-wrap">
              <div className="it-evn-details-thumb mb-35">
                <Image
                  src={detailsImg ? detailsImg : '/img/event/details-1.jpg'}
                  alt=""
                  width={927}
                  height={513}
                  style={{ height: 'auto' }}
                />
              </div>
              <h4 className="it-evn-details-title">
                {title
                  ? title
                  : 'These are Designed to Provide Hands Training and Skill-Building'}
              </h4>
              <div className="postbox__meta">
                <span>
                  <i className="fa-light fa-file-invoice"></i>Lesson{' '}
                  {lessonCount ? lessonCount : '10'}
                </span>
                <span>
                  <i className="fa-light fa-clock"></i>
                  {eventTime ? eventTime : '9.00AM- 01.00 PM'}
                </span>
                <span>
                  <i className="fa-light fa-location-dot"></i>
                  {venue ? venue : '3783 Columbia Mine Road'}
                </span>
              </div>
              <div className="it-evn-details-text mb-40">
                <p>
                  {description
                    ? description
                    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'}
                </p>
              </div>
              <div className="it-evn-details-text">
                <h6 className="it-evn-details-title-sm pb-10">
                  Event Description
                </h6>
                <p>
                  {description
                    ? description
                    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim'}
                  . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum..
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="it-evn-sidebar-box">
              <div className="it-evn-sidebar-thumb mb-40">
                <Image
                  src="/img/event/details-sm.jpg"
                  alt=""
                  width={299}
                  height={206}
                  style={{ height: 'auto' }}
                />
              </div>
              <button className="it-btn w-100 text-center mb-20">
                <span>
                  Buy Ticket
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
              <div className="it-evn-sidebar-list">
                <ul>
                  <li>{eventTime ? eventTime : '4:00 pm  6:00 pm'}</li>
                  <li>
                    {eventDate ? eventDate : '23'}{' '}
                    {eventMonth ? eventMonth : 'March'}, 2024
                  </li>
                  <li>
                    <a href="#">
                      {venue
                        ? venue
                        : '3783 Columbia Mine Road Shinnston, WV 26431'}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${email ? email : 'infomail@gmail.com'}`}>
                      {email ? email : 'infomail@gmail.com'}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${phone ? phone : '+9870123456789'}`}>
                      {phone ? phone : '+9870123456789'}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
