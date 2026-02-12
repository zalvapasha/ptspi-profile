import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeaderSection from "@/components/sections/CertificatesPage/HeaderSection";
import CertificatesSection from "@/components/sections/CertificatesPage/CertificatesSection";

export default function Certificates() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <CertificatesSection />
      <Footer />
    </>
  );
}
