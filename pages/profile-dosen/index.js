import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";

const TeacherModules = dynamic(() => import("@/modules/Teacher"), {
  loading: () => <Preloader />,
});

export default function Teacher() {
  return (
    <main>
      <Header />

      <TeacherModules />

      <Footer />
    </main>
  );
}
