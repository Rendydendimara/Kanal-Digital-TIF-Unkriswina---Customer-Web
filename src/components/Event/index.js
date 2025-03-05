import Image from 'next/image';
import Link from 'next/link';

export default function SingleEvent(props) {
  const {
    eventClass,
    Slug,
    Img,
    Title,
    Description,
    eventDate,
    eventMonth,
    eventLocation,
    eventTime,
    imgWidth,
    imgHeight,
  } = props;

  return (
    <div className={eventClass ? eventClass : 'it-event-2-item-box'}>
      <div className="it-event-2-item">
        <div className="it-event-2-thumb fix">
          <Link href={`/event/${Slug ? Slug : 'details'}`}>
            <Image
              src={Img ? Img : '/img/event/event-1-1.jpg'}
              width={imgWidth ? imgWidth : 422}
              height={imgHeight ? imgHeight : 256}
              alt=""
              style={{ height: 'auto' }}
            />
          </Link>
          <div className="it-event-2-date">
            <span>
              <i>{eventDate ? eventDate : '08'}</i> <br />
              {eventMonth ? eventMonth : 'October'}
            </span>
          </div>
        </div>
        <div className="it-event-2-content">
          <h4 className="it-event-2-title">
            <Link href={`/event/${Slug ? Slug : 'details'}`}>
              {Title
                ? Title
                : 'print, and publishing industries for previewing'}
            </Link>
          </h4>
          <div className="it-event-2-text">
            <p className="mb-0 pb-10">
              {Description
                ? Description
                : 'Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor'}
            </p>
          </div>
          <div className="it-event-2-meta">
            <span>
              <i className="fa-light fa-clock"></i>
              {eventTime ? eventTime : 'Time: 11:00am 03;00pm'}
            </span>
            <span>
              <Link href="#">
                <i className="fa-light fa-location-dot"></i>
              </Link>
              Location: {eventLocation ? eventLocation : 'USA'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
