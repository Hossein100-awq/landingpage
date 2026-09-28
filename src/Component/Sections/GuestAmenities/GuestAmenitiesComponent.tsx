import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FONT_FAMILY = '"Abar Mid FaNum", sans-serif';
const CONTENT_WIDTH = 1280; // 620px متن + 40px gap + 620px عکس

const AmenitiesGallery = () => {
  return (
    <Box
      component="section"
      dir="rtl"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 4, md: 5 },
        backgroundColor: "#F5F8FA",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "24px", md: "40px" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            flex: { xs: "1 1 auto", md: "0 0 620px" },
            width: { xs: "100%", md: "620px" },
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-50px",
              right: "-40px",
              width: "260px",
              height: "200px",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <Image
              src="/Vector (9).png"
              alt=""
              fill
              sizes="260px"
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Image
            src="/Icon Container (3).png"
            alt=""
            width={84}
            height={52}
            style={{ position: "relative" }}
          />

          <Box sx={{ position: "relative" }}>
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
              خدمات رفاهی گیلمار برای اقامتی دلنشین
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
              در گیلمار، آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه
              می‌کنید؛ فضایی دنج و صمیمی که برای ساختن لحظاتی آرام، خوش و
              به‌یادماندنی آماده شده است.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            flex: "0 0 620px",
            maxWidth: "100%",
            [`@media (max-width: ${CONTENT_WIDTH}px)`]: {
              display: "none",
            },
          }}
        >
          <Image
            src="/Frame 2147238321 (1).png"
            alt="خدمات رفاهی گیلمار؛ دوچرخه‌سواری، قایق‌سواری و پرنده‌نگری"
            width={844}
            height={346}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AmenitiesGallery;