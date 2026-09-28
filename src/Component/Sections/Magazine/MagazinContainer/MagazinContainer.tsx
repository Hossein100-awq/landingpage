import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import TextMagazin from "../Text/TextMagazin";
import MagazinCarts from "../Cart/MagazinCarts";

const MagazinContainer = () => {
  return (
    <Box
      dir="rtl"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-4px",
          left: "-14.6px",
          width: { xs: 300, sm: 450, md: "669px" },
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/Vector (7).png"
          alt=""
          width={669}
          height={394}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "32px", md: "40px" },
          px: { xs: "16px", sm: "24px", md: 0 },
          boxSizing: "border-box",
        }}
      >
        <TextMagazin />
        <MagazinCarts />
      </Box>
    </Box>
  );
};

export default MagazinContainer;