import { IcEarth } from "@/assets/icons/IcEarth";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ProductSpecsSection = () => {
  const t = useTranslations("ProductsPage.product-specs-section");
  return (
    <section className="flex flex-col sm:flex-row ">
      <div className="flex flex-col justify-center w-full sm:w-1/2 px-5 sm:px-10 md:px-20 py-16 sm:py-28 gap-8">
        <div className="flex flex-col gap-4 items-start">
          <IcEarth className="min-w-12 min-h-12" />
          <h2 className="text-4xl font-bold">{t("title")}</h2>
          <p className="text-lg">{t("description")}</p>
          <div className=" flex flex-wrap items-center gap-4 ">
            <Button title="Learn more" variant="secondary">
              {t("buttons.learnMore")}
            </Button>
            <Button className="w-fit " title="Learn more" variant="link">
              {t("buttons.download")}
            </Button>
          </div>
        </div>
      </div>
      <div className="relative aspect-square w-full sm:w-1/2">
        <Image
          src="/images/fishing-1.webp"
          alt={t("imageAlt")}
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default ProductSpecsSection;
