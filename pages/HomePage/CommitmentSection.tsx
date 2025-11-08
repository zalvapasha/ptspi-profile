import { Button } from "@/components/ui/button";
import Image from "next/image";

const CommitmentSection = () => {
  return (
    <section className="flex flex-col sm:flex-row px-5 md:px-16 py-16 sm:py-28 gap-12 sm:gap-16">
      <div className="flex flex-col justify-center w-full sm:w-1/2">
        <p className="mb-3 sm:mb-3.5 md:mb-4">Sustainable</p>
        <h2 className="mb-5 sm:mb-5.5 md:mb-6 text-3xl sm:text-4xl">
          Our seafood commitment
        </h2>
        <p className="mb-5 sm:mb-5.5 md:mb-6 sm:text-lg">
          We deliver premium fish with uncompromising quality. Our network spans
          the Indonesian archipelago, bringing the ocean&apos;s finest catch to
          global markets.
        </p>
        {/* <div className="flex flex-wrap items-center gap-x-8 gap-y-6 py-2"></div> // image logo company yang berkerja sama  */}
        <div className=" flex flex-wrap items-center gap-4 ">
          <Button title="Learn more" variant="secondary">
            Learn more
          </Button>
          <Button title="Connect" variant="link">
            Connect
          </Button>
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

export default CommitmentSection;
