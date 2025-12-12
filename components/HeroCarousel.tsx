"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface HeroImage {
  src: string;
}

interface HeroCarouselProps {
  images: HeroImage[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  return (
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
        {images.map((item, idx) => (
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
  );
}
