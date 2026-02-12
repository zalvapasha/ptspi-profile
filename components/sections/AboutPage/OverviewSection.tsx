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
            <h2 className="text-2xl ">About the Company</h2>
            <p>
              PT Sanana Pelangi Indonesia is a tuna handling and supply company
              based in Indonesia. We work with local fishing communities to
              source yellowfin, bigeye, and albacore tuna from nearby fishing
              grounds.
            </p>
            <Button className="w-fit px-0" title="Learn more" variant="link">
              Learn more
            </Button>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <IcEarth className="min-w-12 min-h-12" />
          <div className="flex flex-col gap-4 sm:max-w-md">
            <h2 className="text-2xl ">Our Operations</h2>
            <p>
              After landing, the tuna is cleaned, graded, and stored under
              controlled temperatures. We focus on proper handling practices to
              maintain product condition, color, and texture.
            </p>
            <Button className="w-fit px-0" title="Learn more" variant="link">
              Learn more
            </Button>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <IcEarth className="min-w-12 min-h-12" />
          <div className="flex flex-col gap-4 sm:max-w-md">
            <h2 className="text-2xl ">Our Approach</h2>
            <p>
              We emphasize consistent handling, clear product grading, and
              transparent communication with buyers. Our goal is to provide
              reliable tuna products with dependable quality.
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
