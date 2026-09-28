import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FONT_FAMILY = '"Abar Mid FaNum", sans-serif';

const EXPLORE_LINKS = [
  "سوئیت‌ها و اقامت",
  "راهنمای مهمان‌ها",
  "درباره گیلمار",
  "مجله گیلمار",
];

const SOCIAL_ICONS = [
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z",
  },
  {
    label: "YouTube",
    path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57-6.27-3.57Z",
  },
  {
    label: "Telegram",
    path: "M11.94 0A12 12 0 1 0 24 12 12 12 0 0 0 11.94 0Zm5.89 8.16-1.97 9.3c-.15.66-.54.82-1.1.51l-3-2.21-1.45 1.4a.76.76 0 0 1-.61.29l.21-3.05 5.56-5.02c.24-.21-.05-.33-.37-.12l-6.87 4.33-2.96-.93c-.64-.2-.66-.64.14-.95l11.57-4.46c.54-.2 1.01.12.84.95Z",
  },
  {
    label: "LinkedIn",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 2.06-2.06 2.06 2.06 0 0 1-2.06-2.06ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.45A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.22 0Z",
  },
];

const titleSx = {
  fontFamily: FONT_FAMILY,
  fontWeight: 800,
  fontSize: "16px",
  lineHeight: "29px",
  color: "#1A1A1A",
  textAlign: "right",
  height: "53px",
  display: "flex",
  alignItems: "center",
  m: 0,
} as const;

const bodySx = {
  fontFamily: FONT_FAMILY,
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "32px",
  color: "#4C4C4D",
  textAlign: "right",
  m: 0,
} as const;

const ColumnsSection = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", lg: "row" },
      alignItems: { xs: "stretch", lg: "center" },
      gap: { xs: "28px", lg: "72px" },
      flex: 1,
      minWidth: 0,
      width: "100%",
      pr: { xs: 0, lg: "24px" },
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        width: { xs: "100%", lg: "314px" },
        flexShrink: 0,
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          height: "53px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/IMG_1413 5.svg"
          alt="اقامتگاه بوم‌گردی گیلمار"
          width={169}
          height={53}
        />
      </Box>

      <Typography sx={{ ...bodySx, textAlign: "justify" }}>
        اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با امکانات
        رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز رسمی میراث فرهنگی
        گیلان فعالیت می‌کند.
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        width: { xs: "100%", lg: "auto" },
        flexShrink: 0,
        minWidth: 0,
      }}
    >
      <Typography component="h3" sx={titleSx}>
        کاوش در گیلمار
      </Typography>

      {EXPLORE_LINKS.map((link) => (
        <Typography
          key={link}
          component="a"
          href="#"
          sx={{
            ...bodySx,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            "&::before": {
              content: '"•"',
              fontSize: "10px",
            },
            "&:hover": {
              color: "#1A1A1A",
            },
          }}
        >
          {link}
        </Typography>
      ))}
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        width: { xs: "100%", lg: "370px" },
        flexShrink: 0,
        minWidth: 0,
      }}
    >
      <Typography component="h3" sx={titleSx}>
        راه‌های ارتباط با گیلمار
      </Typography>

      <Typography sx={bodySx}>
        تلفن پشتیبانی: ۰۱۳۳۴۷۷۵۴۰۰ - ۰۱۳۳۴۷۷۵۴۱۱
      </Typography>

      <Typography sx={bodySx}>
        ایمیل:{" "}
        <Box
          component="span"
          dir="ltr"
          sx={{
            unicodeBidi: "isolate",
          }}
        >
          Info@Gilmar-Gilan.Com
        </Box>
      </Typography>

      <Typography sx={bodySx}>
        موقعیت گیلمار: گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان کوزه‌گران،
        اقامتگاه گیلمار
      </Typography>
    </Box>
  </Box>
);

const MapSection = () => (
  <Box
    sx={{
      position: "relative",
      display: { xs: "none", lg: "block" },
      width: "364px",
      maxWidth: "364px",
      height: "276px",
      flexShrink: 0,
    }}
  >
    <Image
      src="/Step section (3).png"
      alt="موقعیت گیلمار روی نقشه"
      fill
      sizes="364px"
      style={{
        objectFit: "cover",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08))",
      }}
    />

    <Box
      component="svg"
      viewBox="0 0 60 276"
      preserveAspectRatio="none"
      sx={{
        position: "absolute",
        right: "-1px",
        top: 0,
        width: "60px",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <path
        d="M60 0 C30 40 55 80 28 120 C5 158 40 210 12 276 L60 276 Z"
        fill="#FCFDFD"
      />
    </Box>
  </Box>
);

const MainCard = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", lg: "row" },
      alignItems: { xs: "stretch", lg: "center" },
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "1280px",
      minHeight: { xs: "auto", lg: "276px" },
      backgroundColor: "#FCFDFD",
      border: "1px solid #EEF3F7",
      boxShadow: "0px 0px 0px 6px #FFFFFF",
      borderRadius: "20px",
      overflow: "hidden",
      boxSizing: "border-box",
    }}
  >
    <ColumnsSection />
    <MapSection />
  </Box>
);

const SocialButton = ({
  label,
  path,
}: {
  label: string;
  path: string;
}) => (
  <Box
    component="a"
    href="#"
    aria-label={label}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      flexShrink: 0,
      borderRadius: "9999px",
      background:
        "radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)",
      transition: "transform 0.2s ease",
      "&:hover": {
        transform: "scale(1.08)",
      },
    }}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#FFFFFF"
    >
      <path d={path} />
    </svg>
  </Box>
);

const BottomBar = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column-reverse", sm: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      gap: { xs: "14px", sm: 0 },
      width: "100%",
      maxWidth: "1280px",
      minHeight: "56px",
      padding: "8px 24px",
      boxSizing: "border-box",
      backgroundColor: "#FCFDFD",
      border: "1px solid #EEF3F7",
      boxShadow: "0px 0px 0px 6px #FFFFFF",
      borderRadius: "9999px",
    }}
  >
    <Typography
      sx={{
        fontFamily: '"Urbanist", "Abar Mid FaNum", sans-serif',
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "32px",
        color: "#4C4C4D",
        m: 0,
        textAlign: {
          xs: "center",
          sm: "right",
        },
      }}
    >
      © تمامی حقوق این وب‌سایت متعلق به گیلمار میباشد.
    </Typography>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        flexShrink: 0,
      }}
    >
      {SOCIAL_ICONS.map((icon) => (
        <SocialButton
          key={icon.label}
          label={icon.label}
          path={icon.path}
        />
      ))}
    </Box>
  </Box>
);

const Footer = () => (
  <Box
    component="footer"
    dir="rtl"
    sx={{
      position: "relative",
      width: "100%",
      maxWidth: "1280px",
      mx: "auto",
      px: {
        xs: "16px",
        sm: "24px",
        md: 0,
      },
      py: "40px",
      boxSizing: "border-box",
      overflow: "hidden",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        left: "-140px",
        bottom: "-400px",
        width: "640px",
        height: "640px",
        borderRadius: "50%",
        backgroundColor: "#C5D8FF",
        filter: "blur(210px)",
        pointerEvents: "none",
      }}
    />

    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100%",
        minWidth: 0,
      }}
    >
      <MainCard />
      <BottomBar />
    </Box>
  </Box>
);

export default Footer;