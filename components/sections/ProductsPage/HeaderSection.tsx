import Image from "next/image";
import React from "react";

const HeaderSection = () => {
  return (
    <section className="h-[50vh] relative flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/header-products.webp"
        alt="Products PT Sanana Pelangi"
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Overlay */}
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Fresh Selection</h1>
        <p className="text-base md:text-lg max-w-2xl">
          A curated selection of premium tuna sourced from Indonesia’s rich
          waters. We currently specialize exclusively in tuna species, handled
          with care to preserve freshness, texture, and natural flavor.
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
