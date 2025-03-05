import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { productAddData } from '@/redux/product/actionCreator';
import { toast } from 'react-toastify';

export default function SingleCourseTwo(props) {
  const {
    courseClass,
    ID,
    Slug,
    Img,
    Title,
    Category,
    ratingCount,
    lessonCount,
    studentCount,
    Duration,
    Author,
    Price,
    prevPrice,
    btnText,
    imgWidth,
    imgHeight,
  } = props;

  const dispatch = useDispatch();

  // Dispatch the action to add item to the cart
  const handleCart = (productID) => {
    dispatch(productAddData(productID));
    toast.success(`${Title} added to Cart!`, {
      position: 'top-center',
    });
  };

  return (
    <div
      className={
        courseClass ? courseClass : 'it-course-2-wrap d-flex align-items-center'
      }
    >
      <div className="it-course-thumb p-relative">
        <Link href={`/course/${Slug ? Slug : 'details'}`}>
          <Image
            src={Img ? Img : '/img/course/course-1-4.jpg'}
            alt={Title ? Title : ''}
            width={imgWidth ? imgWidth : 220}
            height={imgHeight ? imgHeight : 323}
            style={{ height: 'auto' }}
          />
        </Link>
        <div className="it-course-thumb-text">
          <span>{Category ? Category : 'Marketing'}</span>
        </div>
      </div>
      <div className="it-course-content">
        <div className="it-course-rating mb-10">
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-regular fa-star"></i>
          <span>({ratingCount ? ratingCount : '4.7'})</span>
        </div>
        <h4 className="it-course-title pb-15">
          <Link href={`/course/${Slug ? Slug : 'details'}`}>
            {Title ? Title : 'It statistics data science and Business analysis'}
          </Link>
        </h4>
        <div className="it-course-info pb-20 mb-25 d-flex justify-content-between">
          <span>
            <i className="fa-light fa-file-invoice"></i>Lesson{' '}
            {lessonCount ? lessonCount : '10'}
          </span>
          <span>
            <i className="fa-sharp fa-regular fa-clock"></i>
            {Duration ? Duration : '19h 30m'}
          </span>
          <span>
            <i className="fa-light fa-user"></i>Students{' '}
            {studentCount ? studentCount : '20'}+
          </span>
        </div>
        <div className="it-course-author pb-25">
          <Image src="/img/course/avata-1.png" alt="" width={30} height={30} />
          <span>
            By <i>{Author ? Author : 'Angela'}</i> in{' '}
            <i>{Category ? Category : 'Development'}</i>
          </span>
        </div>
        <div className="it-course-price-box d-flex justify-content-between">
          <span>
            <i>${Price ? Price : '60'}</i> ${prevPrice ? prevPrice : '120'}
          </span>
          <button onClick={() => handleCart(ID)}>
            <i className="fa-light fa-cart-shopping"></i>
            {btnText ? btnText : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
