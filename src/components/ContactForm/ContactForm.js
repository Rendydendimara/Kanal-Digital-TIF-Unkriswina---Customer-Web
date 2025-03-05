import { useState } from 'react';

export default function ContactFormElements() {
  const [selectedInstructor, setSelectedInstructor] = useState('Instructor');
  const [selectedDepartment, setSelectedDepartment] = useState('Department');
  const [selectedCampus, setSelectedCampus] = useState('Campus');
  const [selectedLevel, setSelectedLevel] = useState('Level');

  const [instructor, setInstructor] = useState(false);
  const [department, setDepartment] = useState(false);
  const [campus, setCampus] = useState(false);
  const [level, setLevel] = useState(false);

  const selectHandler = (option, value) => {
    if (option === 'instructor') {
      setInstructor(!instructor);
      setSelectedInstructor(value);
      setDepartment(false);
      setCampus(false);
      setLevel(false);
    } else if (option === 'department') {
      setInstructor(false);
      setDepartment(!department);
      setSelectedDepartment(value);
      setCampus(false);
      setLevel(false);
    } else if (option === 'campus') {
      setInstructor(false);
      setDepartment(false);
      setCampus(!campus);
      setSelectedCampus(value);
      setLevel(false);
    } else if (option === 'level') {
      setInstructor(false);
      setDepartment(false);
      setCampus(false);
      setLevel(!level);
      setSelectedLevel(value);
    }
  };

  return (
    <div className="row">
      <div className="col-12 mb-15">
        <div className="it-contact-input-box">
          <input type="text" placeholder="Your Name" />
        </div>
      </div>
      <div className="col-12 mb-15">
        <div className="it-contact-input-box">
          <input type="email" placeholder="Your Email" />
        </div>
      </div>
      <div className="col-md-6 col-12 mb-15">
        <div className="it-contact-select">
          <div
            className="it-contact-select-btn"
            onClick={() => {
              setInstructor(!instructor);
            }}
          >
            <span className="selected-value">{selectedInstructor}</span>
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
            className={`it-contact-select-options ${instructor ? 'open' : ''}`}
          >
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('instructor', '1st Instructor');
                }}
              >
                1st Instructor
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('instructor', '2nd Instructor');
                }}
              >
                02 Instructor
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('instructor', '3rd Instructor');
                }}
              >
                3rd Instructor
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('instructor', '4th Instructor');
                }}
              >
                4th Instructor
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('instructor', '5th Instructor');
                }}
              >
                5th Instructor
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 col-12 mb-15">
        <div className="it-contact-select">
          <div
            className="it-contact-select-btn"
            onClick={() => {
              setDepartment(!department);
            }}
          >
            <span className="selected-value">{selectedDepartment}</span>
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
            className={`it-contact-select-options ${department ? 'open' : ''}`}
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
      <div className="col-md-6 col-12 mb-15">
        <div className="it-contact-select">
          <div
            className="it-contact-select-btn"
            onClick={() => {
              setCampus(!campus);
            }}
          >
            <span className="selected-value">{selectedCampus}</span>
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
          <ul className={`it-contact-select-options ${campus ? 'open' : ''}`}>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('campus', '1st Year');
                }}
              >
                1st Campus
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('campus', '2nd Campus');
                }}
              >
                2nd Campus
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('campus', '3rd Campus');
                }}
              >
                3rd Campus
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('campus', '4th Campus');
                }}
              >
                4th Campus
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('campus', '5th Campus');
                }}
              >
                5th Campus
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 col-12 mb-15">
        <div className="it-contact-select">
          <div
            className="it-contact-select-btn"
            onClick={() => {
              setLevel(!level);
            }}
          >
            <span className="selected-value">{selectedLevel}</span>
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
          <ul className={`it-contact-select-options ${level ? 'open' : ''}`}>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('level', '1st Level');
                }}
              >
                1st Level
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('level', '2nd Level');
                }}
              >
                2nd Level
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('level', '3rd Level');
                }}
              >
                3rd Level
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('level', '4th Level');
                }}
              >
                4th Level
              </span>
            </li>
            <li>
              <span
                className="it-contact-select-option"
                onClick={() => {
                  selectHandler('level', '5th Level');
                }}
              >
                5th Level
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
