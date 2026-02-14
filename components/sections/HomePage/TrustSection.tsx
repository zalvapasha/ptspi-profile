import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TABS_CONTENT = [
  { key: "certifications", image: "/images/image-placeholder.png" },
  { key: "quality", image: "/images/image-placeholder.png" },
  { key: "standards", image: "/images/image-placeholder.png" },
];

const TrustSection = () => {
  const t = useTranslations("HomePage.trust-section");

  return (
    <section className="px-5 md:px-16 py-16 sm:py-28">
      <div className="text-center">
        <p className="mb-3 sm:mb-4 font-semibold">{t("tag")}</p>
        <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl">{t("title")}</h1>
        <p className="sm:text-lg">{t("description")}</p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title={t("buttons.discover")} variant="secondary">
            {t("buttons.discover")}
          </Button>
          <Button title={t("buttons.details")} variant="link">
            {t("buttons.details")}
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="flex flex-col items-center w-full">
          <Tabs defaultValue={TABS_CONTENT[0].key} className="w-full">
            <div className="flex justify-center w-full mb-12 sm:mb-16">
              <TabsList className="w-full flex max-w-80">
                {TABS_CONTENT.map((tab) => (
                  <TabsTrigger key={tab.key} value={tab.key}>
                    {t(`tabs.${tab.key}.label`)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {TABS_CONTENT.map((tab) => (
              <TabsContent key={tab.key} value={tab.key}>
                <section className="flex flex-col sm:flex-row gap-12 sm:gap-16">
                  {/* IMAGE */}
                  <div className="relative aspect-square w-full sm:w-1/2">
                    <Image
                      src={tab.image}
                      alt={t(`tabs.${tab.key}.imageAlt`)}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  {/* TEXT */}
                  <div className="flex flex-col justify-center w-full sm:w-1/2">
                    <p className="mb-3 sm:mb-3.5 md:mb-4">
                      {t(`tabs.${tab.key}.badge`)}
                    </p>
                    <h2 className="mb-5 sm:mb-5.5 md:mb-6 text-3xl sm:text-4xl">
                      {t(`tabs.${tab.key}.title`)}
                    </h2>
                    <p className="mb-5 sm:mb-5.5 md:mb-6 sm:text-lg">
                      {t(`tabs.${tab.key}.description`)}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button
                        title={t("buttons.learnMore")}
                        variant="secondary"
                      >
                        {t("buttons.learnMore")}
                      </Button>
                      <Button title={t("buttons.verify")} variant="link">
                        {t("buttons.verify")}
                      </Button>
                    </div>
                  </div>
                </section>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
