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
        flexShrink: 1,
        width: "100%",
        maxWidth: "620px",
        display: "flex",
        flexDirection: "column",
        gap: {
          xs: "18px",
          sm: "24px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            sm: "flex-start",
          },
          gap: {
            xs: "14px",
            sm: "20px",
          },
        }}
      >
        <Image
          src="/Icon Container (3).svg"
          alt=""
          width={84}
          height={52}
        />

        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: FONT_FAMILY,
              fontWeight: 800,
              fontSize: {
                xs: "24px",
                sm: "28px",
                md: "32px",
              },
              lineHeight: {
                xs: "42px",
                sm: "50px",
                md: "58px",
              },
              letterSpacing: "-1.4px",
              textAlign: {
                xs: "center",
                sm: "right",
              },
              color: "#1A1A1A",
            }}
          >
            پکیج‌های ویژه اقامت در گیلمار
          </Typography>

          <Typography
            sx={{
              mt: {
                xs: "4px",
                sm: 0,
              },
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: {
                xs: "12px",
                sm: "13px",
                md: "14px",
              },
              lineHeight: {
                xs: "26px",
                sm: "30px",
                md: "32px",
              },
              textAlign: {
                xs: "center",
                sm: "right",
              },
              color: "#4C4C4D",
            }}
          >
            پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات
            هیجان‌انگیز در دل طبیعت است.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: 0,
          borderTop: DASHED_LINE,
          width: "100%",
        }}
      />

      <Box>
        <Typography
          component="h3"
          sx={{
            fontFamily: FONT_FAMILY,
            fontWeight: 800,
            fontSize: {
              xs: "14px",
              sm: "16px",
            },
            lineHeight: {
              xs: "28px",
              sm: "32px",
            },
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
            fontSize: {
              xs: "12px",
              sm: "14px",
            },
            lineHeight: {
              xs: "26px",
              sm: "32px",
            },
            textAlign: "right",
            color: "#4C4C4D",
          }}
        >
          شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(4, minmax(0, 1fr))",
          },
          gap: {
            xs: "12px",
            sm: "14px",
            md: "16px",
          },
          width: "100%",
        }}
      >
        {INCLUDED_ITEMS.map(({ id, label, iconSrc }) => (
          <Box
            key={id}
            sx={{
              boxSizing: "border-box",
              width: "100%",
              height: {
                xs: "105px",
                sm: "116px",
              },
              padding: {
                xs: "10px",
                sm: "15px",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
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
              style={{
                width: "52px",
                height: "52px",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />

            <Typography
              sx={{
                mt: {
                  xs: "2px",
                  sm: 0,
                },
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: {
                  xs: "11px",
                  sm: "13px",
                  md: "14px",
                },
                lineHeight: {
                  xs: "24px",
                  sm: "30px",
                  md: "32px",
                },
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

      <Box
        sx={{
          height: 0,
          borderTop: DASHED_LINE,
          width: "100%",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: {
            xs: "center",
            sm: "space-between",
          },
          alignItems: {
            xs: "stretch",
            sm: "center",
          },
          gap: {
            xs: "16px",
            sm: 0,
          },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: FONT_FAMILY,
            fontWeight: 800,
            fontSize: {
              xs: "14px",
              sm: "16px",
            },
            lineHeight: {
              xs: "28px",
              sm: "29px",
            },
            textAlign: {
              xs: "center",
              sm: "right",
            },
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
              width: {
                xs: "100%",
                sm: "178px",
              },
              minWidth: {
                xs: "100%",
                sm: "178px",
              },
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
                width: "100%",
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
                  flex: 1,
                  minWidth: 0,
                  height: "25px",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 800,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
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