import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import CommitmentSection from "./CommitmentSection";
import CatalogSection from "./CatalogSection";
import TrustSection from "./TrustSection";
import CTASection from "./CTASection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto">
      <CommitmentSection />
      <CatalogSection />
      <TrustSection />

      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
