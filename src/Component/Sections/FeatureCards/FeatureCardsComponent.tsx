import Image from "next/image";

const FeatureCardsComponent = () => {
  return (
    <section className="mx-auto aspect-[1440/562] w-full max-w-[1440px]">
      <div className="relative h-full w-full">
        <Image
          src="/Rules.png"
          alt="Feature"
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default FeatureCardsComponent;