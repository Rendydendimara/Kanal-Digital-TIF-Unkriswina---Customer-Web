import Image from 'next/image';

export default function SingleTestimonialThree(props) {
  const { testiClass, authorImg, authorName, designation, description } = props;

  return (
    <div className={testiClass ? testiClass : 'it-testimonial-3-item'}>
      <div className="it-testimonial-3-content">
        <p>
          {description
            ? description
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'}
        </p>
        <div className="it-testimonial-3-author-box d-flex align-items-center">
          <div className="it-testimonial-3-avata fixed-margin">
            <Image
              src={authorImg ? authorImg : '/img/avatar/avatar-3-1.png'}
              width={90}
              height={90}
              alt=""
            />
          </div>
          <div className="it-testimonial-3-author-info">
            <h5>{authorName ? authorName : 'Jorge Carter'}</h5>
            <span>{designation ? designation : 'Software Developer'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
