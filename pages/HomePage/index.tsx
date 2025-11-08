import Navbar from "@/components/Navbar";
import HeroSection from "./HeroSection";
import CommitmentSection from "./CommitmentSection";
import CatalogSection from "./CatalogSection";
import TrustSection from "./TrustSection";
import CTASection from "./CTASection";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CommitmentSection />
      <CatalogSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
