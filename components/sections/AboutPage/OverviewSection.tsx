import { IcEarth } from "@/assets/icons/IcEarth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const OverviewSection = () => {
  return (
    <section className="flex flex-col sm:flex-row ">
      <div className="flex flex-col justify-center w-full sm:w-1/2 px-5 sm:px-10 md:px-20 py-16 sm:py-28 gap-8">
        <div className="flex gap-6 items-start">
          <IcEarth className="min-w-12 min-h-12" />
          <div className="flex flex-col gap-4 sm:max-w-md">
            <h2 className="text-2xl ">Our seafood journey</h2>
            <p>
              Founded in the heart of Indonesia&apos;s maritime landscape, PT
              Sanana Pelangi emerged from a deep passion for sustainable seafood
              trading and ocean preservation.
            </p>
            <Button className="w-fit px-0" title="Learn more" variant="link">
              Learn more
            </Button>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <IcEarth className="min-w-12 min-h-12" />
          <div className="flex flex-col gap-4 sm:max-w-md">
            <h2 className="text-2xl ">Our seafood journey</h2>
            <p>
              Founded in the heart of Indonesia&apos;s maritime landscape, PT
              Sanana Pelangi emerged from a deep passion for sustainable seafood
              trading and ocean preservation.
            </p>
            <Button className="w-fit px-0" title="Learn more" variant="link">
              Learn more
            </Button>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <IcEarth className="min-w-12 min-h-12" />
          <div className="flex flex-col gap-4 sm:max-w-md">
            <h2 className="text-2xl ">Our seafood journey</h2>
            <p>
              Founded in the heart of Indonesia&apos;s maritime landscape, PT
              Sanana Pelangi emerged from a deep passion for sustainable seafood
              trading and ocean preservation.
            </p>
            <Button className="w-fit px-0" title="Learn more" variant="link">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="relative aspect-square w-full sm:w-1/2">
        <Image
          src="/images/image-placeholder.png"
          alt="Photo"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default OverviewSection;
