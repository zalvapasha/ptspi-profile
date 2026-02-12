import { IcEarth } from "@/assets/icons/IcEarth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProductSpecsSection = () => {
  return (
    <section className="flex flex-col sm:flex-row ">
      <div className="flex flex-col justify-center w-full sm:w-1/2 px-5 sm:px-10 md:px-20 py-16 sm:py-28 gap-8">
        <div className="flex flex-col gap-4 items-start">
          <IcEarth className="min-w-12 min-h-12" />
          <h2 className="text-4xl font-bold">
            Detailed specifications for premium selections
          </h2>
          <p className="text-lg">
            Technical details for our tuna products, including handling method,
            condition, and quality characteristics. All products are processed
            with careful temperature control to maintain freshness, color, and
            texture.
          </p>
          <div className=" flex flex-wrap items-center gap-4 ">
            <Button title="Learn more" variant="secondary">
              Learn more
            </Button>
            <Button className="w-fit " title="Learn more" variant="link">
              Download
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

export default ProductSpecsSection;
