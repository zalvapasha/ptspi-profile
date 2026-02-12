import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HomePage/HeroSection";
import CommitmentSection from "@/components/sections/HomePage/CommitmentSection";
import CatalogSection from "@/components/sections/HomePage/CatalogSection";
import TrustSection from "@/components/sections/HomePage/TrustSection";
import CTASection from "@/components/sections/HomePage/CTASection";

export default function Home() {
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
}
