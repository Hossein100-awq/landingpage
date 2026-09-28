import Image from "next/image";

const avatarSrcs = [
  "/Image (1).svg",
  "/Image (2).svg",
  "/Image (3).svg",
];

const IntroImage = () => {
  return (
    <section className="relative mx-auto h-[581px] w-full max-w-[1280px] overflow-hidden">

      <div className="absolute inset-x-0 top-[205px] h-[376px] overflow-hidden rounded-[24px]">
        <Image
          src="/Background.png"
          alt=""
          fill
          sizes="1280px"
          className="object-cover"
        />

        <div className="absolute inset-0 rounded-[24px] bg-black/20" />
      </div>

      <div className="absolute bottom-0 left-0 h-[82px] w-[200px] rounded-tr-[24px] bg-[#F5F8FA]" />

      <div className="absolute bottom-0 right-0 h-[112px] w-[285px] rounded-tl-[24px] bg-[#F5F8FA]" />

      <div className="absolute left-[38px] top-[19px] h-[392px] w-[1171px] overflow-hidden rounded-[24px]">
        <Image
          src="/Object.png"
          alt="نمای بیرونی اقامتگاه بوم‌گردی گیلمار"
          fill
          priority
          sizes="1171px"
          className="object-cover"
        />

        <div className="absolute inset-0 pointer-events-none rounded-[24px]" />
      </div>

      <div className="absolute bottom-[18px] left-[20px] flex h-[48px] w-[166px] items-center justify-center gap-[6px] rounded-full bg-white px-[8px] py-[8px] shadow-[0px_10px_41px_0px_#0000000A,0px_2px_2px_0px_#00000005]">
        <div className="flex items-center justify-center -space-x-2">
          {avatarSrcs.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={26}
              height={26}
              className="rounded-full"
            />
          ))}
        </div>

        <span className="flex h-[32px] w-[82px] items-center justify-center whitespace-nowrap text-[14px] font-semibold leading-[32px] text-[#1A1A1A]">
          +۱۲۰ رزرو موفق
        </span>
      </div>

      <div className="absolute bottom-[30px] right-[20px] h-[64px] w-[251px]">
        <p className="text-center text-[14px] font-semibold leading-[32px] text-[#1A1A1A]">
          فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
        </p>
      </div>

    </section>
  );
};

export default IntroImage;