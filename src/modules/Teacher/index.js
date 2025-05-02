import BreadCrumbs from "@/components/BreadCrumbs";
import ScrollTop from "@/components/ScrollTop";
import TeacherArea from "./TeacherArea";

export default function TeacherModules() {
  return (
    <main>
      <BreadCrumbs
        Title="Daftar Dosen Teknik Informatika Unkriswina Sumba"
        subTitle="Teacher"
      />
      <TeacherArea />
      <ScrollTop />
    </main>
  );
}
