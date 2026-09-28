import Image from "next/image";
import Box from "@mui/material/Box";
import ImagePart from "./../../Question/ImagePart/ImagePart";
import TextPart from "./../../Question/TexrPart/TextPart";

const QuestionMainPart = () => {
  return (
    <Box
      component="section"
      dir="rtl"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        minHeight: { xs: "auto", md: "576px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "32px", md: "40px" },
        px: { xs: "16px", sm: "24px", md: "80px" },
        py: { xs: "50px", md: "0px" },
        overflow: "hidden",
        boxSizing: "border-box",
        backgroundColor: "#F5F8FA",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-94.5px", md: "-94.5px" },
          left: { xs: "auto", md: "791.1px" },
          right: { xs: "-180px", md: "auto" },
          width: "669.4px",
          height: "393.8px",
          pointerEvents: "none",
        }}
      >
        <Image
          src="/Vector (8).png"
          alt=""
          fill
          sizes="670px"
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "auto" },
          maxWidth: "100%",
          minWidth: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImagePart />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "auto" },
          maxWidth: "100%",
          minWidth: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextPart />
      </Box>
    </Box>
  );
};

export default QuestionMainPart;