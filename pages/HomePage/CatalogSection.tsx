import Image from "next/image";

const Catalog = [
  {
    type: "Tuna",
    title: "Yellowfin tuna from deep waters",
    desc: "Fresh and rich in flavor",
    img: "/images/image-placeholder.png",
  },
  {
    type: "Snapper",
    title: "Red snapper from coastal waters",
    desc: "Delicate and perfectly textured",
    img: "/images/image-placeholder.png",
  },
  {
    type: "Mackerel",
    title: "Mackerel from Indonesian seas",
    desc: "Lean and packed with nutrients",
    img: "/images/image-placeholder.png",
  },
];

const CatalogSection = () => {
  return (
    <section className="px-5 md:px-16 py-16 sm:py-28">
      <div className="text-center mb-12 sm:mb-20">
        <p className="mb-3 font-semibold md:mb-4">Catch</p>
        <h1 className="mb-5 text-3xl sm:text-4xl md:mb-6">
          Our premium fish selection
        </h1>
        <p className="sm:text-lg">
          Explore our carefully curated seafood range
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        {Catalog.map((fish, idx) => (
          <article
            key={idx}
            className="flex flex-col justify-between
           w-full  bg-gray-50 mb-6"
          >
            <div className="p-6 sm:p-8">
              <p className="mb-2 font-semibold">{fish.type}</p>
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl">
                {fish.title}
              </h2>
              <p>{fish.desc}</p>
            </div>
            <div className="relative w-full h-48 sm:h-64 md:h-80">
              <Image
                src={fish.img}
                alt="Photo"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;
