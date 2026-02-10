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
      <div className="max-w-7xl mx-auto">
        <CatalogSection />
        <ProductSpecsSection />
        <QualitySection />
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default ProductsPage;
