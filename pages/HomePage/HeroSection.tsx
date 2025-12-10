"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

const HERO_IMAGE = [
  { src: "/images/header-home-1.png" },
  { src: "/images/header-home-2.png" },
];

const HeroSection = () => {
  return (
    <section className="flex h-screen flex-col">
      <div className="flex flex-col items-center justify-center  h-5/12 sm:h-7/12 md:h-2/3">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 8000,
            }),
          ]}
          className="h-full w-full"
        >
          <CarouselContent>
            {HERO_IMAGE.map((item, idx) => (
              <CarouselItem key={idx} className="relative h-full w-full">
                <div className="relative h-full w-full">
                  <Image
                    src={item.src}
                    alt={`Slide ${idx + 1}`}
                    fill
                    className="object-cover object-center"
                    priority={idx === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center bg-gray-50  h-7/12 sm:h-5/12  md:h-1/3 px-5 md:px-16 sm:gap-10 gap-5">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl">
          Connecting Indonesia&apos;s Ocean Harvest to Every Market{" "}
        </h1>
        <div className="space-y-8">
          <p className="sm:text-lg text-gray-500">
            We supply fresh and processed seafood that meets international
            standards. Our focus is delivering quality products with care and
            precision.
          </p>
          <div className="flex gap-4">
            <Button>Explore</Button>
            <Button variant={"outline"}>Contact</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
