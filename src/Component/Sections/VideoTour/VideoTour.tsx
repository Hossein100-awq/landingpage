"use client";

import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FONT_FAMILY = '"Abar Mid FaNum", sans-serif';

const PRIMARY_GRADIENT =
  "linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)";

interface VideoTourProps {
  bookingHref?: string;
}

const ArrowIcon = () => (
  <svg
    width="20.4"
    height="20.4"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="arrow-gradient"
        gradientUnits="userSpaceOnUse"
        x1="17"
        y1="4"
        x2="3"
        y2="16"
      >
        <stop offset="0" stopColor="#02ADF7" />
        <stop offset="1" stopColor="#26E05A" />
      </linearGradient>
    </defs>

    <path
      d="M16.5 10H4M8.5 5L3.5 10L8.5 15"
      stroke="url(#arrow-gradient)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VideoTour = ({ bookingHref = "#" }: VideoTourProps) => {
  return (
    <Box
      component="section"
      dir="rtl"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1280px",
        minHeight: { xs: "680px", sm: "690px", md: "690px" },
        height: { xs: "auto", md: "690px" },
        mx: "auto",
        borderRadius: { xs: "0px", sm: "20px" },
        overflow: "hidden",
        backgroundColor: "#F5F8FA",
        boxSizing: "border-box",
      }}
    >
      <Image
        src="/Step section.png"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 1280px"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          right: { xs: "-260px", sm: "-180px", md: "-20.5px" },
          bottom: { xs: "180px", sm: "210px", md: "202.3px" },
          width: { xs: "500px", sm: "600px", md: "669.4px" },
          height: { xs: "295px", sm: "354px", md: "393.8px" },
          pointerEvents: "none",
        }}
      >
        <Image
          src="/Vector (3).png"
          alt=""
          fill
          sizes="670px"
          style={{
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: { xs: "50%", sm: "50%", md: "573px" },
          top: { xs: "250px", sm: "260px", md: "584.27px" },
          width: "134px",
          height: "139px",
          transform: {
            xs: "translateX(-50%) rotate(-20deg)",
            sm: "translateX(-50%) rotate(-20deg)",
            md: "rotate(-20deg)",
          },
          pointerEvents: "none",
        }}
      >
        <Image
          src="/Group 1707483778 (2).png"
          alt=""
          width={134}
          height={139}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: {
            xs: "16px",
            sm: "32px",
            md: "80px",
          },
          top: {
            xs: "320px",
            sm: "330px",
            md: "50%",
          },
          transform: {
            xs: "none",
            sm: "none",
            md: "translateY(-50%)",
          },
          width: {
            xs: "calc(100% - 32px)",
            sm: "calc(100% - 64px)",
            md: "502px",
          },
          maxWidth: "502px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            width: "100%",
          }}
        >
          <Image
            src="/Icon Container (1).png"
            alt=""
            width={84}
            height={52}
          />

          <Box sx={{ width: "100%" }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: FONT_FAMILY,
                fontWeight: 800,
                fontSize: {
                  xs: "25px",
                  sm: "28px",
                  md: "32px",
                },
                lineHeight: {
                  xs: "44px",
                  sm: "50px",
                  md: "58px",
                },
                letterSpacing: "-1.4px",
                textAlign: "right",
                color: "#1A1A1A",
                width: "100%",
              }}
            >
              تور ویدیویی اقامتگاه گیلمار
            </Typography>

            <Typography
              sx={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "32px",
                textAlign: "right",
                color: "#4C4C4D",
                width: "100%",
              }}
            >
              در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم
              اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر،
              حال‌وهوای دلنشین آن را تجربه کنید.
            </Typography>
          </Box>
        </Box>

        <Button
          component={Link}
          href={bookingHref}
          disableRipple
          sx={{
            width: "164px",
            height: "46px",
            padding: "6px 11px",
            borderRadius: "999px",
            textTransform: "none",
            background: `radial-gradient(27.92% 100% at 50% 0%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%), radial-gradient(27.92% 100% at 50% 0%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%), ${PRIMARY_GRADIENT}`,
            boxShadow:
              "0px 1px 2px -1px rgba(146,146,146,0.4), inset 0px 1px 0px rgba(255,255,255,0.16)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(0.95)",
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
            <Box
              className="button-icon"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                width: "34px",
                height: "34px",
                boxSizing: "border-box",
                borderRadius: "50%",
                border: "1.2px solid transparent",
                background:
                  "linear-gradient(#F7F8F8, #F7F8F8) padding-box, linear-gradient(161.17deg, #FFFFFF 12.7%, #BAC8D1 91.04%) border-box",
                boxShadow:
                  "0px 4px 6px rgba(0,0,0,0.3), inset -4px -4px 6px rgba(186,200,209,0.3)",
                transition: "transform 0.3s ease",
              }}
            >
              <ArrowIcon />
            </Box>

            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "92px",
                height: "24px",
                fontFamily: FONT_FAMILY,
                fontWeight: 800,
                fontSize: "14px",
                lineHeight: "25px",
                whiteSpace: "nowrap",
                color: "#FFFFFF",
              }}
            >
              اقامت در گیلمار
            </Box>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default VideoTour;