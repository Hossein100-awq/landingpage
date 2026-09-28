import Image from "next/image";

const FeatureCardsComponent = () => {
  return (
    <section className="mx-auto h-[562px] w-full max-w-[1440px]">
      <div className="relative h-full w-full">
        <Image
          src="/Rules.png"
          alt="Feature"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default FeatureCardsComponent;