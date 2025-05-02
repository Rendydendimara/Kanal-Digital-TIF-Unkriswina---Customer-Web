import Image from "next/image";
import Link from "next/link";

const progresses = [
  { id: 1, progressLabel: "Lectures", progress: "90" },
  { id: 2, progressLabel: "My Skills", progress: "82" },
  { id: 3, progressLabel: "Consulting", progress: "75" },
];

export default function TeacherDetailsArea({ item }) {
  if (!item) {
    return <div>Loading...</div>;
  }
  const { image, name, designation, bio, email, phone, address } = item;

  return (
    <div className="it-teacher-details-area pt-120 pb-120">
      <div className="container">
        <div className="it-teacher-details-wrap">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="it-teacher-details-left">
                <div className="it-teacher-details-left-thumb">
                  <Image
                    src={image ? image : "/img/team/team-inner.jpg"}
                    alt=""
                    width={284}
                    height={284}
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="it-teacher-details-left-social text-center">
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-skype"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
                <div className="it-teacher-details-left-info">
                  <ul>
                    <li>
                      <i className="fa-light fa-phone-volume"></i>
                      <a href={`tel:${phone ? phone : "(568) 367-987-237"}`}>
                        {phone ? phone : "(568) 367-987-237"}
                      </a>
                    </li>
                    <li>
                      <i className="fa-light fa-location-dot"></i>
                      <a href="https://www.google.com/maps" target="_blank">
                        {address ? address : "Hudson, Wisconsin(WI), 54016"}
                      </a>
                    </li>
                    <li>
                      <i className="fa-light fa-envelope"></i>
                      <a
                        href={`mailto:${email ? email : "govillage@gmail.com"}`}
                      >
                        {email ? email : "govillage@gmail.com"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="it-teacher-details-right">
                <div className="it-teacher-details-right-title-box">
                  <h4>{name ? name : "Melvin Warner"}</h4>
                  <span>{designation ? designation : "teacher"}</span>
                  <p>
                    {bio
                      ? bio
                      : "Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu dictum varius duis at consectetur lorem donec massa"}
                  </p>
                  <p>
                    Tempor orci dapibus ultrices in iaculis nunc sed augue.
                    Feugiat in ante metus dictum at tempor commodo lectus magna
                    fringilla.
                  </p>
                </div>
                <div className="it-teacher-details-right-content mb-40">
                  <h4>Education:</h4>
                  <p>
                    I’ve spent years figuring out the “formula” to teaching
                    technical skills in a classroom environment, and I’m really
                    excited to finally share my expertise with you. I can
                    confidently say that my online courses are without a doubt
                    the most comprehensive ones on the market.
                  </p>
                </div>
                <div className="it-progress-bar-wrap">
                  <h4>Expertise & Skills:</h4>
                  <ul>
                    {progresses.map((item, i) => (
                      <li key={i}>{item.progressLabel}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
