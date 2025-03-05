import Image from 'next/image';

export default function SingleTestimonialTwo(props) {
  const { testiClass, authorImg, authorName, designation, description } = props;

  return (
    <div
      className={
        testiClass ? testiClass : 'it-testimonial-5-item p-relative z-index'
      }
    >
      <div className="it-testimonial-3-author-box d-flex align-items-center mb-20">
        <div className="it-testimonial-3-avata">
          <Image
            src={authorImg ? authorImg : '/img/avatar/avatar-3-1.png'}
            alt=""
            width={90}
            height={90}
          />
        </div>
        <div className="it-testimonial-3-author-info">
          <h5>{authorName ? authorName : 'Jorge Carter'}</h5>
          <span>{designation ? designation : 'Student'}</span>
        </div>
      </div>
      <div className="it-testimonial-5-content z-index-5">
        <div className="it-testimonial-5-star pb-10">
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </div>
        <div className="it-testimonial-5-text">
          <p>
            “
            {description
              ? description
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'}
            ”
          </p>
        </div>
      </div>
      <div className="it-testimonial-5-quote d-none d-xl-block">
        <Image
          src="/img/testimonial/quote-1-2.png"
          alt=""
          width={127}
          height={94}
        />
      </div>
    </div>
  );
}
