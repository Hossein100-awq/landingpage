import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FONT_FAMILY = '"Abar Mid FaNum", sans-serif';
const CUTOUT_COLOR = "#F5F8FA";
const SLIDE_COUNT = 4;
const ACTIVE_SLIDE_INDEX = 0;

interface CutoutShape {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

const CUTOUT_SHAPES: CutoutShape[] = [
  { id: "top-1", left: -60, top: -20, width: 108.74, height: 105.56 },
  { id: "top-2", left: -15.78, top: 68.5, width: 155, height: 106 },
  { id: "top-3", left: -60, top: 151.44, width: 108.74, height: 105.56 },
  { id: "top-4", left: 139.22, top: -20, width: 108.74, height: 105.56 },
  { id: "bottom-1", left: 556, top: 721.5, width: 146, height: 120 },
  { id: "bottom-2", left: 479.76, top: 619.92, width: 123, height: 119.47 },
  { id: "bottom-3", left: 536, top: 527, width: 166, height: 120.49 },
  { id: "bottom-4", left: 360, top: 721.5, width: 97, height: 120 },
];

const SpecialImage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        width: "602px",
        height: "815px",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <Image
        src="/Group 1707483778 (1).png"
        alt="کلبه‌ای چوبی کنار دریاچه در جنگل پاییزی"
        fill
        sizes="602px"
        style={{ objectFit: "cover" }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(0deg, rgba(7, 7, 8, 0.48) 0%, rgba(7, 7, 8, 0) 100%)",
          pointerEvents: "none",
        }}
      />

      {CUTOUT_SHAPES.map(({ id, left, top, width, height }) => (
        <Box
          key={id}
          sx={{
            position: "absolute",
            left: `${left}px`,
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: "16px",
            backgroundColor: CUTOUT_COLOR,
          }}
        />
      ))}

      <Box
        sx={{
          position: "absolute",
          left: "1px",
          top: "89.5px",
          width: "137px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: FONT_FAMILY,
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "32px",
            textAlign: "center",
            color: "#1A1A1A",
          }}
        >
          تجربه‌ای اقامتی اصیل در دل طبیعت شمال
        </Typography>
      </Box>

      <Box
        dir="ltr"
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: "29px",
          top: "789px",
          width: "320px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {Array.from({ length: SLIDE_COUNT }, (_, index) => (
          <Box
            key={index}
            sx={{
              width: "68px",
              height: "6px",
              borderRadius: "999px",
              backgroundColor: "#FFFFFF",
              opacity: index === ACTIVE_SLIDE_INDEX ? 1 : 0.5,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SpecialImage;