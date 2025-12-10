import Image from "next/image";
import React from "react";

const PRODUCTS = [
  {
    title: "Tuna Strips",
    category: "Chilled",
    src: "/images/products/tuna-strips-1.png",
  },
  {
    title: "Tuna Cubes",
    category: "Frozen",
    src: "/images/products/tuna-cubes-1.png",
  },
  {
    title: "Center Cut Loins",
    category: "Chilled",
    src: "/images/products/center-cut-loins-1.png",
  },
  {
    title: "Tuna Saku",
    category: "Frozen",
    src: "/images/products/tuna-saku-1.png",
  },
  {
    title: "Escolar",
    category: "Frozen",
    src: "/images/products/eskolar-fillet-1.png",
  },
  {
    title: "Tuna Steaks",
    category: "Frozen",
    src: "/images/products/tuna-steaks-1.png",
  },
  {
    title: "Mahi Portions",
    category: "Frozen",
    src: "/images/products/mahi-portions-1.png",
  },
];

const CatalogSection = () => {
  return (
    <section className="px-5 md:px-16 py-16 sm:py-28">
      <div className="text-center mb-10 sm:mb-12">
        <p className="font-semibold mb-3">Products</p>
        <h2 className="text-3xl sm:text-4xl">Our product catalog</h2>
        <p className="mt-4 text-gray-600 sm:text-lg">
          Selected seafood products ready for distribution to your market.
        </p>
      </div>
      <div className="grid gap-8 xs:grid-cols-2 md:grid-cols-3">
        {PRODUCTS.map((item, idx) => (
          <article key={idx} className="w-full space-y-4">
            <div className="relative aspect-square w-full">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="text-center">
              <h3 className="xs:text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.category}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;
