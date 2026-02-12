import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const HERO_IMAGE = [
  { src: "/images/header-home-1.webp" },
  { src: "/images/header-home-2.webp" },
];

const HeroSection = () => {
  const t = useTranslations('HomePage.hero-section');
  return (
    <section className="flex h-screen flex-col">
      <div className="flex flex-col items-center justify-center  h-5/12 sm:h-7/12 md:h-2/3">
        <HeroCarousel images={HERO_IMAGE} />
      </div>
      <div className="flex max-w-7xl mx-auto sm:flex-row flex-col items-center justify-center   h-7/12 sm:h-5/12  md:h-1/3 px-5 md:px-16 sm:gap-10 gap-5">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl">
          {t('title')}
        </h1>
        <div className="space-y-8">
          <p className="sm:text-lg text-gray-500">
            {t('description')}
          </p>
          <div className="flex gap-4">
            <Button>{t('explore-button')}</Button>
            <Button variant="outline">{t('contact-button')}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
