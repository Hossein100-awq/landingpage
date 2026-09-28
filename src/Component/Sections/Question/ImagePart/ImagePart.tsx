import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FONT_FAMILY = '"Abar Mid FaNum", sans-serif';

const ImagePart = () => {
  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        width: "620px",
        height: "576px",
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
          gap: "20px",
        }}
      >
        <Image src="/Icon Container (6).svg" alt="" width={84} height={52} />

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
            سوالات متداول مهمانان گیلمار
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
            پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا
            پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ position: "relative", width: "420px", height: "382px" }}>
        <Image
          src="/Image (5).png"
          alt=""
          width={399}
          height={362.9}
          style={{
            position: "absolute",
            left: "10.5px",
            top: "9.55px",
            filter: "blur(140px)",
          }}
        />
        <Image
          src="/Image (5).png"
          alt=""
          width={420}
          height={382}
          style={{ position: "relative" }}
        />
      </Box>
    </Box>
  );
};

export default ImagePart;