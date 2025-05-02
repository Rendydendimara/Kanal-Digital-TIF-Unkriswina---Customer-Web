import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";

const AboutUsModules = dynamic(() => import("@/modules/AboutUs"), {
  loading: () => <Preloader />,
});

export default function About() {
  return (
    <main>
      <Header />

      <AboutUsModules />

      <Footer />
    </main>
  );
}
