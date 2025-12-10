import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeaderSection from "./HeaderSection";
import QualitySection from "./QualitySection";
import CatalogSection from "./CatalogSection";
import CTASection from "./CTASection";
import ProductSpecsSection from "./ProductSpecsSection";

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <CatalogSection />
      <ProductSpecsSection />
      <QualitySection />
      <CTASection />
      <Footer />
    </>
  );
};

export default ProductsPage;
