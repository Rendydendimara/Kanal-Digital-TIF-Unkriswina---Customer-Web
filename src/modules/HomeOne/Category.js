import SingleCategory from "@/components/Service";
import Image from "next/image";
import Link from "next/link";
import Services from "@/data/services";

export default function Category() {
  return (
    <div className="it-category-area pt-120 pb-120">
      <div className="container">
        <div className="it-category-title-wrap p-relative mb-70">
          <div className="it-category-shape d-none d-xl-block">
            <Image
              src="/img/category/shape-1.png"
              width={183}
              height={67}
              alt=""
            />
          </div>
          <div className="row align-items-end">
            <div className="col-xl-8 col-lg-8">
              <div className="it-category-title-box">
                <span className="it-section-subtitle">Menu Pilihan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {Services.map((service) => {
            return (
              <div
                key={service.id}
                className="col-xl-3 col-lg-3 col-md-6 mb-30"
              >
                <SingleCategory
                  Slug={service.slug}
                  Icon={service.icon}
                  Title={service.title}
                  courseCount={service.courseCount}
                  btnText={service.btnText}
                />
              </div>
            );
          }).slice(0, 8)}
        </div>
      </div>
    </div>
  );
}
