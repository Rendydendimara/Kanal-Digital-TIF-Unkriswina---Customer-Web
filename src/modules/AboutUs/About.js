import Image from "next/image";

export default function About() {
  return (
    <div className="it-about-4-area inner-about-style pt-120 pb-120">
      <div className="container">
        <div>
          <div className="it-about-3-title-box">
            <span className="it-section-subtitle">
              <Image
                src="/img/category/inner.svg"
                alt=""
                width={18}
                height={18}
              />{" "}
              tentang kami
            </span>
            <h2 className="it-section-title-3 pb-30">
              Kanal Digital Teknik Informatika
              <span> Unkriswina Sumba</span>
            </h2>
            <p>
              Kanal Digital Teknik Informatika Universitas Kristen Wira Wacana
              Sumba adalah platform digital yang bertujuan untuk menyebarkan
              informasi, inovasi, dan perkembangan terbaru dalam dunia
              teknologi, khususnya di lingkungan Program Studi Teknik
              Informatika UKRISWINA Sumba.
            </p>
            <p>
              Kami berkomitmen untuk menjadi pusat informasi dan kolaborasi bagi
              mahasiswa, dosen, serta masyarakat umum yang tertarik dengan dunia
              teknologi dan informatika. Melalui platform ini, kami menghadirkan
              berbagai konten seperti berita teknologi, penelitian mahasiswa,
              inovasi terbaru, serta kegiatan akademik dan non-akademik di
              lingkungan kampus.
            </p>
          </div>
          <div className="it-about-3-mv-box">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-about-4-list-wrap d-flex align-items-start">
                  <div className="it-about-4-list-icon">
                    <span>
                      <i className="flaticon-video-1"></i>
                    </span>
                  </div>
                  <div className="it-about-3-mv-item">
                    <span className="it-about-3-mv-title">
                      Visi Fakultas Sains Dan Teknologi (FST)
                    </span>
                    <p>
                      Menjadi Fakultas yang unggul dalam pengembangan Sains dan
                      Teknologi berbasis Kearifan Lokal berlandaskan semangat
                      Kewirausahaan dan Nilai-nilai Kristiani.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="it-about-4-list-wrap d-flex align-items-start">
                  <div className="it-about-4-list-icon">
                    <span>
                      <i className="flaticon-puzzle"></i>
                    </span>
                  </div>
                  <div className="it-about-3-mv-item">
                    <span className="it-about-3-mv-title">
                      Visi Keilmuan Program Studi Teknik Informatika
                    </span>
                    <p>
                      Menjadi pusat pendidikan yang unggul dalam pengembangan
                      jaringan komputer, pemprograman, dan multimedia
                      berlandaskan semangat kewirausahaan dan nilai-nilai
                      kristiani.
                    </p>
                  </div>
                </div>
              </div>
              <div className="responsiveFlex">
                <div className="">
                  <div className="it-about-4-list-wrap d-flex align-items-start">
                    <div className="it-about-4-list-icon">
                      <span>
                        <i className="flaticon-puzzle"></i>
                      </span>
                    </div>
                    <div className="it-about-3-mv-item">
                      <span className="it-about-3-mv-title">
                        Profile Kelulusan
                      </span>
                      <ul>
                        <li>
                          <p style={{ marginBottom: "0px" }}>Pemprograman</p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>
                            Jaringan Komputer
                          </p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>Multimedia</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="it-about-4-list-wrap d-flex align-items-start">
                    <div className="it-about-4-list-icon">
                      <span>
                        <i className="flaticon-puzzle"></i>
                      </span>
                    </div>
                    <div className="it-about-3-mv-item">
                      <span className="it-about-3-mv-title">
                        Prospek Karir{" "}
                      </span>
                      <ul className="normalUL">
                        <li>
                          <p style={{ marginBottom: "0px" }}>IT Consultan</p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>Web Developer</p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>
                            Mobile Aplication Developer
                          </p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>Game Developer</p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>System Analyst</p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>Data Scientist</p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>
                            Cyber Security Analyst
                          </p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>
                            Database Administrator
                          </p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>Software Tester</p>
                        </li>
                        <li>
                          <p style={{ marginBottom: "0px" }}>
                            Network Engineer
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
