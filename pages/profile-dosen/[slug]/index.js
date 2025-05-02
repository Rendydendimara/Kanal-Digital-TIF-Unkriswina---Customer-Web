import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Teachers from "@/data/teachers";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const TeacherDetailsModules = dynamic(
  () => import("@/modules/TeacherDetails"),
  {
    loading: () => <Preloader />,
  }
);

export default function TeacherDetails() {
  const router = useRouter();
  const { asPath } = router;
  const teacherSlug = asPath.split("/")[2];

  const singleTeacher = Teachers.filter((teacher) => {
    return teacher.slug === teacherSlug;
  });

  return (
    <main>
      <Header />

      <TeacherDetailsModules item={singleTeacher[0]} />

      <Footer />
    </main>
  );
}
