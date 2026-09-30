import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FONT_FAMILY = '"Abar Mid FaNum", sans-serif';

const ImagePart = () => {
  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 1,
        width: "100%",
        maxWidth: "620px",
        minWidth: 0,
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: "12px", sm: "16px", md: "20px" },
        }}
      >
        <Image
          src="/Icon Container (6).svg"
          alt=""
          width={84}
          height={52}
          style={{
            width: "84px",
            height: "52px",
            maxWidth: "100%",
          }}
        />

        <Box sx={{ width: "100%" }}>
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
              letterSpacing: {
                xs: "-0.5px",
                sm: "-1px",
                md: "-1.4px",
              },
              textAlign: "right",
              color: "#1A1A1A",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            سوالات متداول مهمانان گیلمار
          </Typography>

          <Typography
            sx={{
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
              textAlign: "right",
              color: "#4C4C4D",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا
            پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: {
            xs: "min(100%, 420px)",
            sm: "420px",
          },
          aspectRatio: "420 / 382",
          mt: {
            xs: "24px",
            sm: "32px",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            filter: "blur(80px)",
            opacity: 0.9,
          }}
        >
          <Image
            src="/Image (5).png"
            alt=""
            fill
            sizes="(max-width: 600px) 100vw, 420px"
            style={{
              objectFit: "contain",
            }}
          />
        </Box>

        <Image
          src="/Image (5).png"
          alt=""
          fill
          sizes="(max-width: 600px) 100vw, 420px"
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default ImagePart;