import { useTranslations } from "next-intl";
import Image from "next/image";

const Catalog = [
  { key: "yellowfin", img: "/images/fishes/yellowfin.webp" },
  { key: "bigeye", img: "/images/fishes/bigeye.webp" },
  { key: "albacore", img: "/images/fishes/albacore.webp" },
];

const CatalogSection = () => {
  const t = useTranslations("HomePage.catalog-section");

  return (
    <section className="px-5 md:px-16 py-16 sm:py-28">
      <div className="text-center mb-12 sm:mb-20">
        <p className="mb-3 font-semibold md:mb-4">{t("tag")}</p>
        <h1 className="mb-5 text-3xl sm:text-4xl md:mb-6">{t("title")}</h1>
        <p className="sm:text-lg">{t("subtitle")}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        {Catalog.map((fish, idx) => (
          <article
            key={idx}
            className="flex flex-col justify-between
           w-full  bg-gray-50 mb-6"
          >
            <div className="p-6 sm:p-8">
              <p className="mb-2 font-semibold">{t(`fish.${fish.key}.type`)}</p>
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl">
                {t(`fish.${fish.key}.title`)}
              </h2>
              <p>{t(`fish.${fish.key}.desc`)}</p>
            </div>
            <div className="relative w-full h-48 sm:h-64 md:h-80">
              <Image
                src={fish.img}
                alt="Photo"
                fill
                className="object-cover object-left"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;
