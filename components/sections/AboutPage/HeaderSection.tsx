import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const HeaderSection = () => {
  const t = useTranslations("AboutPage.header-section");
  return (
    <section className="h-[50vh] relative flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/header-about.webp"
        alt={t("imageAlt")}
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Overlay */}
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-base md:text-lg max-w-2xl">{t("description")}</p>
      </div>
    </section>
  );
};

export default HeaderSection;
