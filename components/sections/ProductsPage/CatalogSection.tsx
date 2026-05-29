import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PRODUCTS = [
  {
    title: "Tuna Loin",
    category: "Frozen",
    src: "/images/products/tuna-loin-2.webp",
  },
  {
    title: "Tuna Saku",
    category: "Frozen",
    src: "/images/products/tuna-saku-2.webp",
  },
  {
    title: "Tuna Steaks",
    category: "Frozen",
    src: "/images/products/tuna-steak-2.webp",
  },
  {
    title: "Tuna Strips",
    category: "Frozen",
    src: "/images/products/tuna-strip-2.webp",
  },
  {
    title: "Tuna Cubes",
    category: "Frozen",
    src: "/images/products/tuna-cube-2.webp",
  },
  {
    title: "Tuna Ground Meat",
    category: "Frozen",
    src: "/images/products/tuna-gm-1.webp",
  },
];

const CatalogSection = () => {
  const t = useTranslations("ProductsPage.catalog-section");
  return (
    <section className="px-5 md:px-16 py-16 sm:py-28">
      <div className="text-center mb-10 sm:mb-12">
        <p className="font-semibold mb-3">{t("tag")}</p>
        <h2 className="text-3xl sm:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-gray-600 sm:text-lg">{t("description")}</p>
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
