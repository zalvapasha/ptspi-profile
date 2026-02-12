import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const TABS_CONTENT = [
  {
    value: "certifications",
    label: "Certifications",
    badge: "Certification",
    title: "Certified handling",
    description:
      "Our facility has implemented HACCP-based handling procedures, helping us maintain safe and consistent tuna processing practices.",
    image: {
      src: "/images/image-placeholder.png",
      alt: "Certification Photo",
    },
  },
  {
    value: "quality",
    label: "Quality",
    badge: "Quality",
    title: "Careful handling",
    description:
      "We focus on maintaining freshness from landing to shipment through proper icing, temperature control, and careful handling at every step.",
    image: {
      src: "/images/image-placeholder.png",
      alt: "Quality Photo",
    },
  },
  {
    value: "standards",
    label: "Standards",
    badge: "Standards",
    title: "Consistent processing practices",
    description:
      "Our operations follow established handling and sanitation procedures to support reliable supply and product condition for our partners.",
    image: {
      src: "/images/image-placeholder.png",
      alt: "Standards Photo",
    },
  },
];

const TrustSection = () => {
  return (
    <section className="px-5 md:px-16 py-16 sm:py-28">
      <div className="text-center">
        <p className="mb-3 sm:mb-4 font-semibold">Trust</p>
        <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl">Built on Care</h1>
        <p className="sm:text-lg">
          Though newly established, our process is rooted in careful selection,
          hands-on quality control, and responsible tuna sourcing.
        </p>
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
                  <div className="relative aspect-square w-full sm:w-1/2">
                    <Image
                      src={tab.image.src}
                      alt={tab.image.alt}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
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
