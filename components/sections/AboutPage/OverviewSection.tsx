import { IcEarth } from "@/assets/icons/IcEarth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const ITEMS = ["company", "operations", "approach"];

const OverviewSection = () => {
  const t = useTranslations("AboutPage.overview-section");

  return (
    <section className="flex flex-col sm:flex-row">
      <div className="flex flex-col justify-center w-full sm:w-1/2 px-5 sm:px-10 md:px-20 py-16 sm:py-28 gap-8">
        {ITEMS.map((key) => (
          <div key={key} className="flex gap-6 items-start">
            <IcEarth className="min-w-12 min-h-12" />

            <div className="flex flex-col gap-4 sm:max-w-md">
              <h2 className="text-2xl">{t(`items.${key}.title`)}</h2>

              <p>{t(`items.${key}.description`)}</p>

              <Button
                className="w-fit px-0"
                title={t("learnMore")}
                variant="link"
              >
                {t("learnMore")}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="relative aspect-square w-full sm:w-1/2">
        <Image
          src="/images/rooms/processing-1.webp"
          alt={t("imageAlt")}
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default OverviewSection;
