import Image from "next/image";
import Box from "@mui/material/Box";
import SpecialText from "./SpecialText";
import SpecialImage from "./SpecialImage";

const SpecialContainer = () => {
  return (
    <Box
      component="section"
      dir="rtl"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "center" },
        gap: { xs: "32px", md: "40px" },
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "1440px",
        height: { xs: "auto", md: "815px" },
        minHeight: { xs: "auto", md: "815px" },
        mx: "auto",
        paddingLeft: { xs: "16px", sm: "24px", md: "40px", lg: "98px" },
        paddingRight: { xs: "16px", sm: "24px", md: "40px", lg: "80px" },
        paddingTop: { xs: "60px", md: 0 },
        paddingBottom: { xs: "60px", md: 0 },
        overflow: "hidden",
        backgroundColor: "#F5F8FA",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-100px", sm: "-70px", md: "-35.5px" },
          left: { xs: "-250px", sm: "-100px", md: "791.1px" },
          width: { xs: "500px", sm: "580px", md: "669.4px" },
          height: { xs: "294px", sm: "341px", md: "393.8px" },
          pointerEvents: "none",
        }}
      >
        <Image
          src="/Vector (6).png"
          alt=""
          fill
          sizes="(max-width: 768px) 500px, 670px"
          style={{ objectFit: "contain" }}
        />
      </Box>

      <SpecialText />

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          flexShrink: 0,
        }}
      >
        <SpecialImage />
      </Box>
    </Box>
  );
};

export default SpecialContainer;