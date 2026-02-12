import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CTASection = () => {
  return (
    <>
      <section className=" text-center px-5 md:px-16 py-16 sm:py-28">
        <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl">Contact Us</h1>
        <p className="mb-6 sm:mb-8 sm:text-lg">
          Contact us for more information about our tuna products, availability,
          and specifications.
        </p>

        <div className="flex gap-4 justify-center">
          <Button>Inquire</Button>
          <Button variant={"outline"}>Download</Button>
        </div>
      </section>
      <div className="relative aspect-video max-h-[500px] w-full">
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
