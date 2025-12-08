import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HeaderSection from "./HeaderSection";
import QualitySection from "./QualitySection";
import CatalogSection from "./CatalogSection";
import CTASection from "./CTASection";

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <CatalogSection />
      <QualitySection />
      <CTASection />
      <Footer />
    </>
  );
};

export default ProductsPage;
