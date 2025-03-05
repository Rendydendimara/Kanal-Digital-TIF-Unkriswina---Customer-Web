import Image from 'next/image';
import Link from 'next/link';

export default function SingleClass(props) {
  const {
    Class,
    Img,
    Title,
    Description,
    Price,
    lessonCount,
    classDuration,
    imgWidth,
    imgHeight,
  } = props;

  return (
    <div className={Class ? Class : 'it-class-item text-center'}>
      <div className="it-class-thumb p-relative">
        <div className="fix">
          <Image
            src={Img ? Img : '/img/class/class-1-1.jpg'}
            alt=""
            width={imgWidth ? imgWidth : 422}
            height={imgHeight ? imgHeight : 221}
          />
        </div>
        <div className="it-class-rate">
          <span>${Price ? Price : '60'}</span>
        </div>
      </div>
      <div className="it-class-text">
        <h4 className="it-class-title">
          <Link href="#">
            {Title ? Title : 'Painting class For Young Children'}
          </Link>
        </h4>
        <p>
          {Description
            ? Description
            : 'Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.'}
        </p>
      </div>
      <div className="it-class-meta-box d-flex justify-content-between align-items-center">
        <div className="it-class-meta text-center">
          <i className="fa-sharp fa-light fa-file-invoice"></i>
          <span>{lessonCount ? lessonCount : '02'} Lessons</span>
        </div>
        <div className="it-class-meta text-center">
          <i className="fa-regular fa-clock"></i>
          <span>{classDuration ? classDuration : '4h 50m'}</span>
        </div>
        <div className="it-class-meta text-center">
          <i className="fa-light fa-users"></i>
          <span>Students</span>
        </div>
      </div>
    </div>
  );
}
