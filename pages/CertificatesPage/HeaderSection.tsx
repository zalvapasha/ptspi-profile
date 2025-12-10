import Image from "next/image";
import React from "react";

const HeaderSection = () => {
  return (
    <section className="h-[50vh] relative flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/image-placeholder.png"
        alt="About PT Sanana Pelangi"
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Overlay */}
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Quality You Can Trust, Certification You Can See
        </h1>
        <p className="text-base md:text-lg max-w-2xl">
          Explore our certifications and quality assurances that keep every
          shipment from PT Sanana Pelangi aligned with international standards
          for safety, sustainability, and traceability.
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
