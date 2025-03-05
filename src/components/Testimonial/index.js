export default function SingleTestimonial(props) {
  const { testiClass, authorName, designation, description } = props;
  return (
    <div className={testiClass ? testiClass : 'it-testimonial-slide-item'}>
      <div className="it-testimonial-slide-info">
        <h4 className="it-testimonial-user-name">
          {authorName ? authorName : 'Courtney Henry'}
        </h4>
        <span>{designation ? designation : 'Happy Customer'}</span>
        <p>
          {description
            ? description
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
        </p>
      </div>
    </div>
  );
}
