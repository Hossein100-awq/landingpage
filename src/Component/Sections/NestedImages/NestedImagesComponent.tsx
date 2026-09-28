import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AboutSection = () => {
  return (
    <section
      className="
        relative
        mx-auto
        flex
        min-h-[642px]
        h-auto
        w-full
        max-w-[1280px]
        items-center
        justify-between
        overflow-hidden
        px-4
        sm:px-6
        md:px-8
        lg:px-0
        lg:h-[642px]
      "
    >
      <div
        className="
          relative
          flex
          h-auto
          min-h-[393px]
          w-full
          max-w-[620px]
          flex-col
          justify-center
          py-12
          sm:py-16
          md:py-20
          lg:h-[393px]
          lg:w-[620px]
          lg:py-0
        "
      >
        <Image
          src="/Vector (1).png"
          alt=""
          width={669}
          height={394}
          className="
            pointer-events-none
            absolute
            left-[170px]
            top-[-80px]
            z-0
            opacity-30
            hidden
            lg:block
          "
        />

        <div className="relative z-10 flex w-full flex-col gap-[20px]">
          <h2
            className="
              text-right
              text-[26px]
              font-extrabold
              leading-[44px]
              tracking-[-1px]
              text-[#1A1A1A]
              sm:text-[28px]
              sm:leading-[50px]
              md:text-[30px]
              md:leading-[54px]
              lg:text-[32px]
              lg:leading-[58px]
              lg:tracking-[-1.4px]
            "
          >
            گیلمار؛ آرامش ناب در آغوش طبیعت گیلان
          </h2>

          <p
            className="
              h-auto
              w-full
              text-justify
              text-[13px]
              font-semibold
              leading-[28px]
              text-[#4C4C4D]
              sm:text-[14px]
              sm:leading-[30px]
              md:leading-[32px]
              lg:h-[128px]
              lg:w-[620px]
            "
            style={{
              fontFamily: "Abar Mid FaNum",
            }}
          >
            گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها،
            میزبان لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر
            تالابی، حضور پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های
            گردشگری گیلان، مسیر دسترسی مناسب و انواع تفریحات و گشت‌های
            گیلان‌گردی، این اقامتگاه را به مقصدی متفاوت برای سفر تبدیل
            کرده است.
          </p>

          <Button
            disableRipple
            sx={{
              width: "164px",
              height: "46px",
              borderRadius: "800000px",
              background:
                "radial-gradient(27.92% 100% at 50% 0%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%), radial-gradient(27.92% 100% at 50% 0%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%), linear-gradient(229.52deg,#02ADF7 -18.98%,#26E05A 121.29%)",
              boxShadow:
                "0px 1px 2px -1px rgba(146,146,146,0.4), inset 0px 1px 0px rgba(255,255,255,0.16)",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all .3s ease",

              "&:hover": {
                transform: "scale(1.05)",
              },

              "&:active": {
                transform: "scale(.95)",
              },

              "&:hover .button-icon": {
                transform: "translateX(-4px)",
              },
            }}
          >
            <Box
              sx={{
                width: "142px",
                height: "34px",
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Image
                src="/Button Icon Background.svg"
                alt=""
                width={34}
                height={34}
                className="button-icon transition-transform duration-300"
              />

              <span
                className="
                  flex
                  h-[24px]
                  w-[92px]
                  items-center
                  justify-center
                  text-center
                  text-[14px]
                  font-extrabold
                  leading-[25px]
                  text-white
                "
                style={{
                  fontFamily: "Abar Mid FaNum",
                }}
              >
                اقامت در گیلمار
              </span>
            </Box>
          </Button>
        </div>
      </div>

      <div
        className="
          relative
          hidden
          h-[642px]
          w-[620px]
          shrink-0
          lg:block
        "
      >
        <Image
          src="/11.png"
          alt="Gilmar"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default AboutSection;