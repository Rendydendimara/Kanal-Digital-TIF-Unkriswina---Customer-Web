import BreadCrumbs from "@/components/BreadCrumbs";
import TeacherDetailsArea from "./TeacherDetailsArea";
import Newsletter from "@/components/Newsletter";
import ScrollTop from "@/components/ScrollTop";

export default function TeacherDetailsModules(singleTeacher) {
  return (
    <main>
      <BreadCrumbs Title="Detail Profile Dosen" subTitle="Teacher" />
      <TeacherDetailsArea item={singleTeacher.item} />
      <ScrollTop />
    </main>
  );
}
