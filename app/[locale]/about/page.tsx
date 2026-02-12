import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/sections/AboutPage/HeaderSection";
import FacilitiesSection from "@/components/sections/AboutPage/FacilitiesSection";
import OverviewSection from "@/components/sections/AboutPage/OverviewSection";

export default function About() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <div className="max-w-7xl mx-auto">
        <OverviewSection />
        <FacilitiesSection />
      </div>
      <Footer />
    </>
  );
}
