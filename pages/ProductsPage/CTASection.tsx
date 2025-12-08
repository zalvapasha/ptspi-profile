import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CTASection = () => {
  return (
    <>
      <section className=" text-center px-5 md:px-16 py-16 sm:py-28">
        <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl">
          Connect with our seafood experts
        </h1>
        <p className="mb-6 sm:mb-8 sm:text-lg">
          Get detailed information about our premium fish selections and export
          capabilities
        </p>
        <div className="flex gap-4 justify-center">
          <Button>Inquire</Button>
          <Button variant={"outline"}>Download</Button>
        </div>
      </section>
      <div className="relative aspect-video w-full">
        <Image
          src="/images/image-placeholder.png"
          alt="Photo"
          fill
          className="object-cover object-center"
        />
      </div>
    </>
  );
};

export default CTASection;
