import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FONT_FAMILY = '"Abar Mid FaNum", sans-serif';

const PRIMARY_GRADIENT =
  "linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)";

const DASHED_LINE = "1px dashed rgba(76, 76, 77, 0.12)";

interface IncludedItem {
  id: string;
  label: string;
  iconSrc: string;
}

const INCLUDED_ITEMS: IncludedItem[] = [
  { id: "stay", label: "۱ شب اقامت", iconSrc: "/Card (3).png" },
  { id: "breakfast", label: "صبحانه", iconSrc: "/Card (2).png" },
  { id: "kayak", label: "قایق‌سواری", iconSrc: "/Card (1).png" },
  { id: "trekking", label: "تور جنگل‌نوردی", iconSrc: "/Card.png" },
];

interface SpecialTextProps {
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
        id="package-arrow-gradient"
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
      stroke="url(#package-arrow-gradient)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SpecialText = ({ bookingHref = "#" }: SpecialTextProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        width: "620px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        <Image
          src="/Icon Container (3).svg"
          alt=""
          width={84}
          height={52}
        />

        <Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: FONT_FAMILY,
              fontWeight: 800,
              fontSize: "32px",
              lineHeight: "58px",
              letterSpacing: "-1.4px",
              textAlign: "right",
              color: "#1A1A1A",
            }}
          >
            پکیج‌های ویژه اقامت در گیلمار
          </Typography>

          <Typography
            sx={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "32px",
              textAlign: "right",
              color: "#4C4C4D",
            }}
          >
            پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات
            هیجان‌انگیز در دل طبیعت است.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ height: 0, borderTop: DASHED_LINE }} />

      <Box>
        <Typography
          component="h3"
          sx={{
            fontFamily: FONT_FAMILY,
            fontWeight: 800,
            fontSize: "16px",
            lineHeight: "32px",
            textAlign: "right",
            color: "#1A1A1A",
          }}
        >
          پکیج رمانتیک دو نفره
        </Typography>

        <Typography
          sx={{
            mt: "2px",
            fontFamily: FONT_FAMILY,
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "32px",
            textAlign: "right",
            color: "#4C4C4D",
          }}
        >
          شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {INCLUDED_ITEMS.map(({ id, label, iconSrc }) => (
          <Box
            key={id}
            sx={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "116px",
              height: "116px",
              padding: "15px",
              backgroundColor: "#FCFDFD",
              border: "1px solid #EEF3F7",
              borderRadius: "12px",
              boxShadow:
                "0px 24px 48px rgba(0, 46, 37, 0.12), 0px 0px 0px 6px #FFFFFF",
            }}
          >
            <Image
              src={iconSrc}
              alt=""
              width={52}
              height={52}
            />

            <Typography
              sx={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "32px",
                textAlign: "center",
                whiteSpace: "nowrap",
                color: "#4C4C4D",
              }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ height: 0, borderTop: DASHED_LINE }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: FONT_FAMILY,
            fontWeight: 800,
            fontSize: "16px",
            lineHeight: "29px",
            textAlign: "right",
            color: "#43A047",
          }}
        >
          قیمت: ۲۳۰۰۰۰۰ تومان
        </Typography>

        <Link
          href={bookingHref}
          style={{
            textDecoration: "none",
            display: "block",
          }}
        >
          <Button
            disableRipple
            sx={{
              width: "178px",
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
                background: `radial-gradient(27.92% 100% at 50% 0%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%), radial-gradient(27.92% 100% at 50% 0%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%), ${PRIMARY_GRADIENT}`,
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
                width: "156px",
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
                  width: "106px",
                  height: "25px",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 800,
                  fontSize: "14px",
                  lineHeight: "25px",
                  whiteSpace: "nowrap",
                  color: "#FFFFFF",
                }}
              >
                همین حالا رزرو کن
              </Box>
            </Box>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SpecialText;