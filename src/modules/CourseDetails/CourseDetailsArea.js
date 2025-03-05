import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch } from 'react-redux';
import { productAddData } from '@/redux/product/actionCreator';
import { toast } from 'react-toastify';

export default function CourseDetailsArea({ item }) {
  if (!item) {
    return <div>Loading...</div>;
  }
  const {
    id,
    detailsImg,
    title,
    lessonCount,
    studentCount,
    classTime,
    totalLecture,
    skillLevel,
    classDay,
    language,
    price,
    prevPrice,
  } = item;

  const dispatch = useDispatch();

  const handleCart = (productID) => {
    dispatch(productAddData(productID));
    toast.success(`${title} added to cart!`, {
      position: 'top-center',
    });
  };

  return (
    <div className="it-course-details-area pt-120 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <Tabs className="it-course-details-wrap">
              <div className="it-evn-details-thumb mb-35">
                <Image
                  src={detailsImg ? detailsImg : '/img/event/details-1.jpg'}
                  width={913}
                  height={505}
                  alt=""
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-evn-details-rate mb-15">
                <span>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  (4.7)
                </span>
              </div>
              <h4 className="it-evn-details-title mb-0 pb-5">
                {title ? title : 'Web Development Fully Complete Guideline'}
              </h4>
              <div className="postbox__meta">
                <span>
                  <i className="fa-light fa-file-invoice"></i>Lesson{' '}
                  {lessonCount ? lessonCount : '10'}
                </span>
                <span>
                  <i className="fa-light fa-clock"></i>
                  {classTime ? classTime : '9.00AM- 01.00 PM'}
                </span>
                <span>
                  <i className="fa-light fa-user"></i>Students{' '}
                  {studentCount ? studentCount : '20'}+
                </span>
              </div>
              <div className="it-course-details-nav pb-60">
                <nav>
                  <TabList className="nav nav-tab" id="nav-tab" role="tablist">
                    <Tab>
                      <button>overview</button>
                    </Tab>
                    <Tab>
                      <button>curriculum</button>
                    </Tab>
                    <Tab>
                      <button>instructor</button>
                    </Tab>
                    <Tab>
                      <button>reviews</button>
                    </Tab>
                  </TabList>
                </nav>
              </div>
              <div className="it-course-details-content">
                <div className="tab-content" id="nav-tabContent">
                  <TabPanel>
                    <div className="it-course-details-wrapper">
                      <div className="it-evn-details-text mb-40">
                        <h6 className="it-evn-details-title-sm pb-5">
                          Course Description
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim..
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum..
                        </p>
                      </div>
                      <div className="it-evn-details-text">
                        <h6 className="it-evn-details-title-sm pb-5">
                          What Will I Learn From This Course?
                        </h6>
                        <p>
                          Himenaeos. Vestibulum sollicitudin varius mauris non
                          dignissim. Sed quis iaculis est. Nulla quam neque,
                          interdum vitae fermentum lacinia, interdum eu magna.
                          Mauris non posuere tellus. Donec quis euismod tellus.
                          Nam vel lacus eu nisl bibendum accumsan vitae vitae
                          nibh. Nam nec eros id magna hendrerit sagittis Nullam
                          sed mi non odio feugiat volutpat sit amet nec elit.
                          Maecenas id hendrerit ipsum
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="it-course-details-wrapper">
                      <div className="it-evn-details-text mb-40">
                        <h6 className="it-evn-details-title-sm pb-5">
                          Course Description
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim..
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum..
                        </p>
                      </div>
                      <div className="it-evn-details-text">
                        <h6 className="it-evn-details-title-sm pb-5">
                          What Will I Learn From This Course?
                        </h6>
                        <p>
                          Himenaeos. Vestibulum sollicitudin varius mauris non
                          dignissim. Sed quis iaculis est. Nulla quam neque,
                          interdum vitae fermentum lacinia, interdum eu magna.
                          Mauris non posuere tellus. Donec quis euismod tellus.
                          Nam vel lacus eu nisl bibendum accumsan vitae vitae
                          nibh. Nam nec eros id magna hendrerit sagittis Nullam
                          sed mi non odio feugiat volutpat sit amet nec elit.
                          Maecenas id hendrerit ipsum
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="it-course-details-wrapper">
                      <div className="it-evn-details-text mb-40">
                        <h6 className="it-evn-details-title-sm pb-5">
                          Course Description
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim..
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum..
                        </p>
                      </div>
                      <div className="it-evn-details-text">
                        <h6 className="it-evn-details-title-sm pb-5">
                          What Will I Learn From This Course?
                        </h6>
                        <p>
                          Himenaeos. Vestibulum sollicitudin varius mauris non
                          dignissim. Sed quis iaculis est. Nulla quam neque,
                          interdum vitae fermentum lacinia, interdum eu magna.
                          Mauris non posuere tellus. Donec quis euismod tellus.
                          Nam vel lacus eu nisl bibendum accumsan vitae vitae
                          nibh. Nam nec eros id magna hendrerit sagittis Nullam
                          sed mi non odio feugiat volutpat sit amet nec elit.
                          Maecenas id hendrerit ipsum
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="it-course-details-wrapper">
                      <div className="it-evn-details-text mb-40">
                        <h6 className="it-evn-details-title-sm pb-5">
                          Course Description
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim..
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum..
                        </p>
                      </div>
                      <div className="it-evn-details-text">
                        <h6 className="it-evn-details-title-sm pb-5">
                          What Will I Learn From This Course?
                        </h6>
                        <p>
                          Himenaeos. Vestibulum sollicitudin varius mauris non
                          dignissim. Sed quis iaculis est. Nulla quam neque,
                          interdum vitae fermentum lacinia, interdum eu magna.
                          Mauris non posuere tellus. Donec quis euismod tellus.
                          Nam vel lacus eu nisl bibendum accumsan vitae vitae
                          nibh. Nam nec eros id magna hendrerit sagittis Nullam
                          sed mi non odio feugiat volutpat sit amet nec elit.
                          Maecenas id hendrerit ipsum
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </div>
            </Tabs>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="it-evn-sidebar-box it-course-sidebar-box">
              <div className="it-evn-sidebar-thumb mb-30">
                <Image
                  src="/img/event/details-sm.jpg"
                  width={299}
                  height={206}
                  alt=""
                />
              </div>
              <div className="it-course-sidebar-rate-box pb-20">
                <div className="it-course-sidebar-rate d-flex justify-content-between align-items-center">
                  <span>course fee</span>
                  <span className="rate">
                    ${price ? price : '60'}{' '}
                    <i>${prevPrice ? prevPrice : '120'}</i>
                  </span>
                </div>
                <i>29-day money-back guarantee</i>
              </div>
              <button
                className="it-btn w-100 text-center mb-20"
                onClick={() => handleCart(id)}
              >
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
                  <li>
                    <span>{classTime ? classTime : '4:00 pm 6:00 pm'} </span>{' '}
                    <span>start date</span>
                  </li>
                  <li>
                    <span>enrolled</span>
                    <span>{studentCount ? studentCount : '100'}</span>
                  </li>
                  <li>
                    <span>lectures</span>
                    <span>{totalLecture ? totalLecture : '80'}</span>
                  </li>
                  <li>
                    <span>skill level</span>
                    <span>{skillLevel ? skillLevel : 'Basic'}</span>
                  </li>
                  <li>
                    <span>class day</span>
                    <span>{classDay ? classDay : 'Monday-friday'}</span>
                  </li>
                  <li>
                    <span>language</span>
                    <span>{language ? language : 'English'}</span>
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
