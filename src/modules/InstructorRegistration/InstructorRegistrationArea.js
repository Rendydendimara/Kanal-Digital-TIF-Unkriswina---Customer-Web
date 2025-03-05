import { useState } from 'react';

export default function InstructorRegistrationArea() {
  const [selectedGender, setSelectedGender] = useState('Select an Option');
  const [selectedNationality, setSelectedNationality] = useState('Bangladesh');
  const [selectedCountry, setSelectedCountry] = useState('Bangladesh');
  const [selectedAddress, setSelectedAddress] = useState('Select an Option');
  const [selectedDegreeOne, setSelectedDegreeOne] =
    useState('Select an Option');
  const [selectedDegreeTwo, setSelectedDegreeTwo] =
    useState('Select an Option');
  const [selectedStudy, setSelectedStudy] = useState('Select an Option');

  const [gender, setGender] = useState(false);
  const [nationality, setNationality] = useState(false);
  const [country, setCountry] = useState(false);
  const [address, setAddress] = useState(false);
  const [degreeOne, setDegreeOne] = useState(false);
  const [degreeTwo, setDegreeTwo] = useState(false);
  const [study, setStudy] = useState(false);

  const selectHandler = (option, value) => {
    if (option === 'gender') {
      setGender(!gender);
      setSelectedGender(value);
      setNationality(false);
      setCountry(false);
      setAddress(false);
      setDegreeOne(false);
      setDegreeTwo(false);
      setStudy(false);
    } else if (option === 'nationality') {
      setGender(false);
      setNationality(!nationality);
      setSelectedNationality(value);
      setCountry(false);
      setAddress(false);
      setDegreeOne(false);
      setDegreeTwo(false);
      setStudy(false);
    } else if (option === 'country') {
      setGender(false);
      setNationality(false);
      setCountry(!country);
      setSelectedCountry(value);
      setAddress(false);
      setDegreeOne(false);
      setDegreeTwo(false);
      setStudy(false);
    } else if (option === 'address') {
      setGender(false);
      setNationality(false);
      setCountry(false);
      setAddress(!address);
      setSelectedAddress(value);
      setDegreeOne(false);
      setDegreeTwo(false);
      setStudy(false);
    } else if (option === 'degreeOne') {
      setGender(false);
      setNationality(false);
      setCountry(false);
      setAddress(false);
      setDegreeOne(!degreeOne);
      setSelectedDegreeOne(value);
      setDegreeTwo(false);
      setStudy(false);
    } else if (option === 'degreeTwo') {
      setGender(false);
      setNationality(false);
      setCountry(false);
      setAddress(false);
      setDegreeOne(false);
      setDegreeTwo(!degreeTwo);
      setSelectedDegreeTwo(value);
      setStudy(false);
    } else if (option === 'study') {
      setGender(false);
      setNationality(false);
      setCountry(false);
      setAddress(false);
      setDegreeOne(false);
      setDegreeTwo(false);
      setStudy(!study);
      setSelectedStudy(value);
    }
  };

  return (
    <div className="it-student-area it-instructor-style pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-student-bg">
              <h4 className="it-student-title">Instructor Registration</h4>
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
              <div className="it-student-regiform mb-40">
                <h4 className="it-student-regiform-title">Credentials</h4>
                <form action="#">
                  <div className="it-student-regiform-wrap">
                    <div className="it-student-regiform-item">
                      <label>Email *</label>
                      <input type="text" />
                    </div>
                    <div className="it-student-regiform-item">
                      <label>Password minimum (5 Characters)</label>
                      <input type="text" />
                    </div>
                    <div className="it-student-regiform-item">
                      <label> Confirm Password *</label>
                      <input type="text" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="it-student-regiform">
                <h4 className="it-student-regiform-title">
                  Profile information
                </h4>
                <form action="#">
                  <div className="it-student-regiform-wrap">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="it-student-regiform-item">
                          <label>First Name *</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="it-student-regiform-item">
                          <label>Last Name *</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="it-student-regiform-item">
                          <label>Birth Date *</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="it-student-regiform-item">
                          <label>Gender *</label>
                          <div className="it-contact-select">
                            <div
                              className="it-contact-select-btn bg-transparent"
                              onClick={() => {
                                setGender(!gender);
                              }}
                            >
                              <span className="selected-value">
                                {selectedGender}
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
                                gender ? 'open' : ''
                              }`}
                            >
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('gender', 'Male');
                                  }}
                                >
                                  Male
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('gender', 'Female');
                                  }}
                                >
                                  Female
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="it-student-regiform-item">
                          <label>Nationality *</label>
                          <div className="it-contact-select">
                            <div
                              className="it-contact-select-btn bg-transparent"
                              onClick={() => {
                                setNationality(!nationality);
                              }}
                            >
                              <span className="selected-value">
                                {selectedNationality}
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
                                nationality ? 'open' : ''
                              }`}
                            >
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('nationality', 'Bangladesh');
                                  }}
                                >
                                  Bangladesh
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('nationality', 'USA');
                                  }}
                                >
                                  USA
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('nationality', 'UK');
                                  }}
                                >
                                  UK
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('nationality', 'Australia');
                                  }}
                                >
                                  Australia
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('nationality', 'Japan');
                                  }}
                                >
                                  Japan
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="it-student-regiform-item">
                          <label>Address 1 *</label>
                          <div className="it-contact-select">
                            <div
                              className="it-contact-select-btn bg-transparent"
                              onClick={() => {
                                setAddress(!address);
                              }}
                            >
                              <span className="selected-value">
                                {selectedAddress}
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
                                address ? 'open' : ''
                              }`}
                            >
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('address', '1st Address');
                                  }}
                                >
                                  1st Address
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('address', '2nd Address');
                                  }}
                                >
                                  2nd Address
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('address', '3rd Address');
                                  }}
                                >
                                  3rd Address
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('address', '4th Address');
                                  }}
                                >
                                  4th Address
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('address', '5th Address');
                                  }}
                                >
                                  5th Address
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="it-student-regiform-item">
                          <label>Address 2 *</label>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="it-student-regiform-item">
                          <label>Country * </label>
                          <div className="it-contact-select">
                            <div
                              className="it-contact-select-btn bg-transparent"
                              onClick={() => {
                                setCountry(!country);
                              }}
                            >
                              <span className="selected-value">
                                {selectedCountry}
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
                                country ? 'open' : ''
                              }`}
                            >
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('country', 'Bangladesh');
                                  }}
                                >
                                  Bangladesh
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('country', 'USA');
                                  }}
                                >
                                  USA
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('country', 'UK');
                                  }}
                                >
                                  UK
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('country', 'Australia');
                                  }}
                                >
                                  Australia
                                </span>
                              </li>
                              <li>
                                <span
                                  className="it-contact-select-option"
                                  onClick={() => {
                                    selectHandler('country', 'Japan');
                                  }}
                                >
                                  Japan
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="it-student-regiform-item">
                          <label>City *</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="it-student-regiform-item">
                          <label>Postcode / ZIP (optional)</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="it-student-regiform-item">
                          <label>Password *</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="it-student-regiform-item">
                          <label>Phone *</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="it-student-regiform-item">
                          <label>Begin studies *</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="it-student-regiform-item">
                        <label>Highest Degree *</label>
                        <div className="it-contact-select">
                          <div
                            className="it-contact-select-btn bg-transparent"
                            onClick={() => {
                              setDegreeOne(!degreeOne);
                            }}
                          >
                            <span className="selected-value">
                              {selectedDegreeOne}
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
                              degreeOne ? 'open' : ''
                            }`}
                          >
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('degreeOne', '1st Degree');
                                }}
                              >
                                1st Degree
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('degreeOne', '2nd Degree');
                                }}
                              >
                                2nd Degree
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('degreeOne', '3rd Degree');
                                }}
                              >
                                3rd Degree
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('degreeOne', '4th Degree');
                                }}
                              >
                                4th Degree
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('degreeOne', '5th Degree');
                                }}
                              >
                                5th Degree
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="it-student-regiform-item">
                        <label>Intended Study Field *</label>
                        <div className="it-contact-select">
                          <div
                            className="it-contact-select-btn bg-transparent"
                            onClick={() => {
                              setStudy(!study);
                            }}
                          >
                            <span className="selected-value">
                              {selectedStudy}
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
                              study ? 'open' : ''
                            }`}
                          >
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('study', '1st Study');
                                }}
                              >
                                1st Study
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('study', '2nd Study');
                                }}
                              >
                                2nd Study
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('study', '3rd Study');
                                }}
                              >
                                3rd Study
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('study', '4th Study');
                                }}
                              >
                                4th Study
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('study', '5th Study');
                                }}
                              >
                                5th Study
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="it-student-regiform-item">
                        <label>Degree Sought * </label>
                        <div className="it-contact-select">
                          <div
                            className="it-contact-select-btn bg-transparent"
                            onClick={() => {
                              setDegreeTwo(!degreeTwo);
                            }}
                          >
                            <span className="selected-value">
                              {selectedDegreeTwo}
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
                              degreeTwo ? 'open' : ''
                            }`}
                          >
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('degreeTwo', '1st Degree');
                                }}
                              >
                                1st Degree
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('degreeTwo', '2nd Degree');
                                }}
                              >
                                2nd Degree
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('degreeTwo', '3rd Degree');
                                }}
                              >
                                3rd Degree
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('degreeTwo', '4th Degree');
                                }}
                              >
                                4th Degree
                              </span>
                            </li>
                            <li>
                              <span
                                className="it-contact-select-option"
                                onClick={() => {
                                  selectHandler('degreeTwo', '5th Degree');
                                }}
                              >
                                5th Degree
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="postbox__resume-wrap mb-50 d-flex align-items-center flex-wrap">
                        <div className="postbox__resume mr-20">
                          <input id="cv" type="file" />
                          <label for="cv">
                            <span>Choose file</span>
                          </label>
                        </div>
                        <div className="postbox__resume border-transparent">
                          <input id="cvv" type="file" />
                          <label for="cvv">
                            <span>no file chosen</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="it-instructor-wrap">
                        <div className="it-signup-agree">
                          <h4 className="it-student-subtitle">
                            Fields with are required
                          </h4>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur.Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="it-student-regiform-btn">
                      <button className="it-btn">
                        <span>
                          Submit now
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
