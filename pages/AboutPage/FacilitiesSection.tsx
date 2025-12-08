import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const TABS_CONTENT = [
  {
    value: "certifications",
    label: "Certifications",
    badge: "Expertise",
    title: "International seafood standards",
    description:
      "We meet rigorous global quality benchmarks for seafood trading and distribution.",
    image: {
      src: "/images/image-placeholder.png",
      alt: "Photo",
    },
  },
  {
    value: "quality",
    label: "Quality",
    badge: "Quality",
    title: "Premium quality assurance",
    description:
      "Our commitment to quality ensures the finest seafood products for our customers.",
    image: {
      src: "/images/image-placeholder.png",
      alt: "Quality Photo",
    },
  },
  {
    value: "standards",
    label: "Global Standards",
    badge: "Standards",
    title: "World-class global standards",
    description:
      "We adhere to the highest international standards in seafood processing and distribution.",
    image: {
      src: "/images/image-placeholder.png",
      alt: "Standards Photo",
    },
  },
];

const FacilitiesSection = () => {
  return (
    <section className="px-5 md:px-16 py-16 sm:py-28">
      <div className="text-center">
        <p className="mb-3 sm:mb-4 font-semibold">Facilities</p>
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl">
            Our processing and distribution network
          </h1>
          <p className="sm:text-lg">
            Strategically located facilities along Indonesia&apos;s coastal
            regions enable us to capture and process seafood with unmatched
            efficiency. Our state-of-the-art infrastructure ensures every fish
            meets international quality standards.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Discover" variant="secondary">
            Discover
          </Button>
          <Button title="Details" variant="link">
            Details
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="flex flex-col items-center w-full">
          <Tabs defaultValue={TABS_CONTENT[0].value} className="w-full">
            <div className="flex justify-center w-full mb-12 sm:mb-16">
              <TabsList className="w-full flex max-w-80 ">
                {TABS_CONTENT.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {TABS_CONTENT.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <section className="flex flex-col sm:flex-row gap-12 sm:gap-16">
                  <div className="flex flex-col justify-center w-full sm:w-1/2">
                    <p className="mb-3 sm:mb-3.5 md:mb-4">{tab.badge}</p>
                    <h2 className="mb-5 sm:mb-5.5 md:mb-6 text-3xl sm:text-4xl">
                      {tab.title}
                    </h2>
                    <p className="mb-5 sm:mb-5.5 md:mb-6 sm:text-lg">
                      {tab.description}
                    </p>
                    <div className=" flex flex-wrap items-center gap-4 ">
                      <Button title="Learn more" variant="secondary">
                        Learn more
                      </Button>
                      <Button title="Connect" variant="link">
                        Verify
                      </Button>
                    </div>
                  </div>
                  <div className="relative aspect-square w-full sm:w-1/2">
                    <Image
                      src={tab.image.src}
                      alt={tab.image.alt}
                      fill
                      className="object-cover object-center"
                    />
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

export default FacilitiesSection;
