import Image from "next/image";
import Link from "next/link";

export default function Footer(props) {
  const { footerLogo, footerClass } = props;
  const footerStyle = { backgroundImage: `url('/img/footer/bg-1-1.jpg')` };
  return (
    <footer>
      <div
        className="it-footer-area it-footer-bg black-bg relative pt-120 pb-90"
        style={footerStyle}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50">
              <div className="it-footer-widget footer-col-1">
                <div className="it-footer-logo pb-25">
                  <Link href="/">
                    <Image
                      src={`/img/logo/${
                        footerLogo ? footerLogo : "logo-white.png"
                      }`}
                      alt=""
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      width={151}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="it-footer-text pb-5">
                  <p>
                    Platform inovasi dan kolaborasi mahasiswa Teknik Informatika
                    Unkriswina Sumba dalam pengembangan teknologi.
                  </p>
                </div>
                <div className="it-footer-social">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-copyright-text text-center">
                <footer>
                  <p>
                    &copy; {new Date().getFullYear()}{" "}
                    <a href="#">
                      Kanal Digital Teknik Informatika FST - Unkriswina Sumba
                    </a>{" "}
                    || All Rights Reserved.
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
