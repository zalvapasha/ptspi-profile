import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeaderSection from "./HeaderSection";
import React from "react";
import CertificatesSection from "./CertificatesSection";

const CertificatesPage = () => {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <CertificatesSection />
      <Footer />
    </>
  );
};

export default CertificatesPage;
