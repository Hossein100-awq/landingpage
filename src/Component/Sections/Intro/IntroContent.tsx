import React from "react";
import Button from "../../Ui/Button";

const IntroContent = () => {
  return (
    <div
      className="
      w-[calc(100%-32px)]
      max-w-[732px]
      h-auto
      md:h-[220px]
      mx-auto
      mt-[100px]
      sm:mt-[120px]
      md:mt-[158px]
      flex
      flex-col
      items-center
      gap-[24px]
      "
    >
      <div
        className="
        w-full
        flex
        flex-col
        items-center
        gap-2
        "
      >
        <h1
          className="
          w-full
          h-auto
          md:h-[72px]
          whitespace-normal
          md:whitespace-nowrap
          flex
          items-center
          justify-center
          text-center
          font-extrabold
          text-[28px]
          sm:text-[32px]
          md:text-[40px]
          leading-[48px]
          sm:leading-[56px]
          md:leading-[72px]
          tracking-[-1.2px]
          sm:tracking-[-1.8px]
          md:tracking-[-2.4px]
          text-[#1A1A1A]
          "
        >
          اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
        </h1>

        <p
          className="
          w-full
          h-auto
          md:h-[64px]
          flex
          items-center
          justify-center
          text-center
          font-semibold
          text-[13px]
          sm:text-[14px]
          leading-[28px]
          sm:leading-[30px]
          md:leading-[32px]
          text-[#4C4C4D]
          "
        >
          اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای
          امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره
          میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد
        </p>
      </div>

      <Button
        text="مهمان گیلمار شو"
        icon="/Button Icon Background.svg"
        iconPosition="left"
        className="
        group
        w-[191px]
        h-[52px]
        rounded-full
        gap-[16px]
        bg-[linear-gradient(229.52deg,#02ADF7_-18.98%,#26E05A_121.29%)]
        shadow-[0px_1px_2px_-1px_#92929266]
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        text-white
        font-extrabold
        text-[16px]
        "
        iconClassName="
        w-[40px]
        h-[40px]
        object-contain
        transition-transform
        duration-300
        group-hover:-translate-x-1
        "
      />
    </div>
  );
};

export default IntroContent;