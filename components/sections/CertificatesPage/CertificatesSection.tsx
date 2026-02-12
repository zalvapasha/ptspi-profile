import Image from "next/image";
import React from "react";

const CERTIFICATES = [
  {
    title: "HACCP",
    description:
      "Hazard Analysis and Critical Control Points compliance for seafood safety.",
    src: "/images/image-placeholder.png",
  },
  {
    title: "BRCGS",
    description:
      "Global food safety certification for consistent processing standards.",
    src: "/images/image-placeholder.png",
  },
  {
    title: "MSC Chain of Custody",
    description:
      "Traceable, sustainable sourcing certified through the supply chain.",
    src: "/images/image-placeholder.png",
  },
];

const CertificatesSection = () => {
  return (
    <section className="px-5 md:px-16 py-16 sm:py-28">
      <div className="text-center mb-10 sm:mb-12">
        <p className="font-semibold mb-3">Certificates</p>
        <h2 className="text-3xl sm:text-4xl">
          Internationally recognized standards
        </h2>
        <p className="mt-4 text-gray-600 sm:text-lg">
          Proof of our commitment to food safety, quality, and sustainable
          sourcing across every shipment.
        </p>
      </div>
      <div className="grid gap-8 xs:grid-cols-2 md:grid-cols-3">
        {CERTIFICATES.map((item, idx) => (
          <article key={idx} className="w-full space-y-4">
            <div className="relative aspect-video w-full">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="text-center">
              <h3 className="xs:text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
