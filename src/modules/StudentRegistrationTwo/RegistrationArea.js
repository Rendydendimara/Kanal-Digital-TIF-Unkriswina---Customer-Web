import { useState } from 'react';

export default function RegistrationArea() {
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [selectedSubject, setSelectedSubject] = useState('Subject');
  const [selectedDepartment, setSelectedDepartment] = useState('Department');

  const [category, setCategory] = useState(false);
  const [subject, setSubject] = useState(false);
  const [department, setDepartment] = useState(false);

  const selectHandler = (option, value) => {
    if (option === 'category') {
      setCategory(!category);
      setSelectedCategory(value);
      setSubject(false);
      setDepartment(false);
    } else if (option === 'subject') {
      setCategory(false);
      setSubject(!subject);
      setSelectedSubject(value);
      setDepartment(false);
    } else if (option === 'department') {
      setCategory(false);
      setSubject(false);
      setDepartment(!department);
      setSelectedDepartment(value);
    }
  };

  return (
    <div className="it-student-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-student-bg">
              <h4 className="it-student-title">Student Registration Two</h4>
              <div className="it-student-content mb-70">
                <h4 className="it-student-subtitle">
                  Fields with are required
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
              <div className="it-student-regiform">
                <h4 className="it-student-regiform-title">Credentials</h4>
                <form action="#">
                  <div className="it-student-regiform-wrap">
                    <div className="it-student-regiform-item">
                      <label>First Name *</label>
                      <input type="text" />
                    </div>
                    <div className="it-student-regiform-item">
                      <label>Last Name *</label>
                      <input type="text" />
                    </div>
                    <div className="it-student-regiform-item">
                      <label>User Name *</label>
                      <input type="text" />
                    </div>
                    <div className="it-student-regiform-item">
                      <label>Course category *</label>
                      <div className="it-contact-select">
                        <div
                          className="it-contact-select-btn"
                          onClick={() => {
                            setCategory(!category);
                          }}
                        >
                          <span className="selected-value">
                            {selectedCategory}
                          </span>
                          <svg
                            width="9"
                            height="7"
                            viewBox="0 0 9 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                              fill="currentcolor"
                            />
                          </svg>
                        </div>
                        <ul
                          className={`it-contact-select-options ${
                            category ? 'open' : ''
                          }`}
                        >
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('category', '1st Category');
                              }}
                            >
                              1st Category
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('category', '2nd Category');
                              }}
                            >
                              2nd Category
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('category', '3rd Category');
                              }}
                            >
                              3rd Category
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('category', '4th Category');
                              }}
                            >
                              4th Category
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('category', '5th Category');
                              }}
                            >
                              5th Category
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="it-student-regiform-item">
                      <label>Subject *</label>
                      <div className="it-contact-select">
                        <div
                          className="it-contact-select-btn"
                          onClick={() => {
                            setSubject(!subject);
                          }}
                        >
                          <span className="selected-value">
                            {selectedSubject}
                          </span>
                          <svg
                            width="9"
                            height="7"
                            viewBox="0 0 9 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                              fill="currentcolor"
                            />
                          </svg>
                        </div>
                        <ul
                          className={`it-contact-select-options ${
                            subject ? 'open' : ''
                          }`}
                        >
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('subject', '1st Subject');
                              }}
                            >
                              1st Subject
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('subject', '2nd Subject');
                              }}
                            >
                              2nd Subject
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('subject', '3rd Subject');
                              }}
                            >
                              3rd Subject
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('subject', '4th Subject');
                              }}
                            >
                              4th Subject
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('subject', '5th Subject');
                              }}
                            >
                              5th Subject
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="it-student-regiform-item">
                      <label>Department *</label>
                      <div className="it-contact-select">
                        <div
                          className="it-contact-select-btn"
                          onClick={() => {
                            setDepartment(!department);
                          }}
                        >
                          <span className="selected-value">
                            {selectedDepartment}
                          </span>
                          <svg
                            width="9"
                            height="7"
                            viewBox="0 0 9 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                              fill="currentcolor"
                            />
                          </svg>
                        </div>
                        <ul
                          className={`it-contact-select-options ${
                            department ? 'open' : ''
                          }`}
                        >
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('department', '1st Department');
                              }}
                            >
                              1st Department
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('department', '2nd Department');
                              }}
                            >
                              2nd Department
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('department', '3rd Department');
                              }}
                            >
                              3rd Department
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('department', '4th Department');
                              }}
                            >
                              4th Department
                            </span>
                          </li>
                          <li>
                            <span
                              className="it-contact-select-option"
                              onClick={() => {
                                selectHandler('department', '5th Department');
                              }}
                            >
                              5th Department
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="it-student-regiform-item">
                      <label>Email *</label>
                      <input type="email" />
                    </div>
                    <div className="it-student-regiform-item">
                      <label>Password *</label>
                      <input type="text" />
                    </div>
                    <div className="it-student-regiform-item">
                      <label>Password Confirmation *</label>
                      <input type="text" />
                    </div>
                    <div className="it-student-regiform-btn">
                      <button className="it-btn w-100">
                        <span>
                          Create account
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
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
