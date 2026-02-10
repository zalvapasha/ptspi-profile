import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeaderSection from "./HeaderSection";
import FacilitiesSection from "./FacilitiesSection";
import OverviewSection from "./OverviewSection";

const AboutPage = () => {
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
};

export default AboutPage;
