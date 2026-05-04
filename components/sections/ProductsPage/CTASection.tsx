import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const CTASection = () => {
  const t = useTranslations("ProductsPage.cta-section");

  return (
    <>
      <section className=" text-center px-5 md:px-16 py-16 sm:py-28">
        <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl">{t("title")}</h1>
        <p className="mb-6 sm:mb-8 sm:text-lg">{t("description")}</p>

        <div className="flex gap-4 justify-center">
          <Button>{t("buttons.inquire")}</Button>
          <Button variant={"outline"}>{t("buttons.download")}</Button>
        </div>
      </section>
      <div className="relative aspect-video max-h-[500px] w-full">
        <Image
          src="/images/header-about.webp"
          alt={t("imageAlt")}
          fill
          className="object-cover object-center"
        />
      </div>
    </>
  );
};

export default CTASection;
