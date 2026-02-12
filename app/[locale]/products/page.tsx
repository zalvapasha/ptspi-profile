import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/sections/ProductsPage/HeaderSection";
import QualitySection from "@/components/sections/ProductsPage/QualitySection";
import CatalogSection from "@/components/sections/ProductsPage/CatalogSection";
import CTASection from "@/components/sections/ProductsPage/CTASection";
import ProductSpecsSection from "@/components/sections/ProductsPage/ProductSpecsSection";

const page = () => {
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

export default page;
