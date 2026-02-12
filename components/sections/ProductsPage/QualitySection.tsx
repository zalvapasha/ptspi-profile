import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const TABS_CONTENT = [
  {
    value: "standards",
    label: "Cold Chain",
    badge: "Storage",
    title: "Maintained cold chain",
    description:
      "Proper chilling and freezing procedures are applied to keep the tuna at stable temperatures, protecting flavor and shelf life.",
    image: {
      src: "/images/image-placeholder.png",
      alt: "Cold storage",
    },
  },
  {
    value: "certifications",
    label: "Handling",
    badge: "Process",
    title: "Careful handling from catch to processing",
    description:
      "Each tuna is handled immediately after landing and maintained under controlled temperatures to preserve freshness, color, and texture.",
    image: {
      src: "/images/image-placeholder.png",
      alt: "Handling process",
    },
  },
  {
    value: "quality",
    label: "Quality",
    badge: "Freshness",
    title: "Consistent product quality",
    description:
      "We inspect every fish for appearance, firmness, and condition to ensure clean meat and reliable grading across all tuna species.",
    image: {
      src: "/images/image-placeholder.png",
      alt: "Quality inspection",
    },
  },
];

const QualitySection = () => {
  return (
    <section className="px-5 md:px-16 py-16 sm:py-28">
      <div className="text-center">
        <p className="mb-3 sm:mb-4 font-semibold">Quality</p>
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-5 sm:mb-6 text-3xl sm:text-4xl">
            Our processing and handling
          </h1>
          <p className="sm:text-lg">
            Our tuna is received from local fishing areas and handled through
            controlled cleaning, grading, and storage procedures. Proper
            temperature management is maintained during processing to help
            preserve freshness and product condition.
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

export default QualitySection;
