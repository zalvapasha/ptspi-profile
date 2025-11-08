import Navbar from "@/components/Navbar";
import HeroSection from "./HeroSection";
import CommitmentSection from "./CommitmentSection";
import CatalogSection from "./CatalogSection";
import TrustSection from "./TrustSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CommitmentSection />
      <CatalogSection />
      <TrustSection />
      <h1>HomePage</h1>
    </>
  );
};

export default HomePage;
