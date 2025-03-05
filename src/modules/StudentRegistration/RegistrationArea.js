export default function RegistrationArea() {
  return (
    <div className="it-student-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-student-bg">
              <h4 className="it-student-title">Student Registration</h4>
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
