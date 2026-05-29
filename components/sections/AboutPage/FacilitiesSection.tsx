import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const GALLERY_ITEMS = [
  { key: "receive", image: "/images/rooms/recieve-2.webp" },
  { key: "coldStorage", image: "/images/rooms/coldstore-3.webp" },
  { key: "coProcessed", image: "/images/rooms/rco-1.webp" },
  { key: "metalDetector", image: "/images/rooms/metal-detector.webp" },
] as const;

const FacilitiesSection = () => {
  const t = useTranslations("AboutPage.facilities-section");
  return (
    <section className="px-5 md:px-16 py-16 sm:py-28">
      <div className="text-center">
        <p className="mb-3 sm:mb-4 font-semibold">{t("badge")}</p>
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl">{t("title")}</h1>
          <p className="sm:text-lg">{t("description")}</p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title={t("buttons.discover")} variant="secondary">
            {t("buttons.discover")}
          </Button>
          <Button title={t("buttons.details")} variant="link">
            {t("buttons.details")}
          </Button>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.key}
              className="group relative aspect-[4/3] w-full overflow-hidden"
            >
              <Image
                src={item.image}
                alt={t(`gallery.${item.key}.imageAlt`)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-12 text-white">
                <p className="text-xs font-medium uppercase tracking-wide text-white/80">
                  {t(`gallery.${item.key}.category`)}
                </p>
                <h3 className="mt-1 text-lg font-semibold sm:text-xl">
                  {t(`gallery.${item.key}.title`)}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
