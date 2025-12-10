import Image from "next/image";
import React from "react";

const HeaderSection = () => {
  return (
    <section className="h-[50vh] relative flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/header-products.png"
        alt="Products PT Sanana Pelangi"
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Overlay */}
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Fresh seafood exports
        </h1>
        <p className="text-base md:text-lg max-w-2xl">
          Premium fish selections sourced from the rich waters of Indonesia,
          delivering high-quality frozen and fresh seafood to global markets
          with precision and care.
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
