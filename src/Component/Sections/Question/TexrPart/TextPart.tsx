"use client";

import { useState } from "react";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FONT_FAMILY = '"Abar Mid FaNum", sans-serif';
const CLOSED_SHADOW = "0px 0px 0px 6px #FFFFFF";
const OPEN_SHADOW =
  "0px 24px 48px rgba(0, 46, 37, 0.12), 0px 0px 0px 6px #FFFFFF";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "cancellation",
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    id: "check-in",
    question: "ساعت ورود و خروج از اقامتگاه چه زمانی است؟",
    answer:
      "ساعت ورود از ۱۴ و ساعت خروج تا ۱۲ ظهر است. اگر قصد دارید زودتر وارد شوید یا دیرتر خارج شوید، پیش از سفر موضوع را با پشتیبانی هماهنگ کنید تا در صورت خالی بودن اقامتگاه، امکان آن فراهم شود.",
  },
  {
    id: "breakfast",
    question: "آیا صبحانه در قیمت اقامت شامل می‌شود؟",
    answer:
      "بسته به پکیج انتخابی، صبحانه‌ی محلی می‌تواند جزو خدمات اقامت شما باشد. جزئیات هر پکیج در صفحه‌ی همان پکیج آمده است و اگر سوالی داشتید، می‌توانید پیش از رزرو از پشتیبانی بپرسید.",
  },
  {
    id: "pets",
    question: "آیا امکان همراه داشتن حیوان خانگی وجود دارد؟",
    answer:
      "برای حفظ آرامش همه‌ی مهمانان، همراه داشتن حیوان خانگی نیازمند هماهنگی قبلی است. لطفاً پیش از ثبت رزرو با پشتیبانی تماس بگیرید تا شرایط و امکانات لازم را با شما بررسی کنیم.",
  },
  {
    id: "route",
    question: "برای رسیدن به گیلمار چه مسیری را پیشنهاد می‌کنید؟",
    answer:
      "راهنمای دقیق مسیر پس از ثبت رزرو برای شما ارسال می‌شود. برای رسیدن راحت‌تر پیشنهاد می‌کنیم مسیر را از قبل روی نقشه بررسی کنید و اگر در راه به کمک نیاز داشتید، با پشتیبانی در تماس باشید.",
  },
];

interface ToggleIconProps {
  isOpen: boolean;
}

const ToggleIcon = ({ isOpen }: ToggleIconProps) => (
  <Box sx={{ position: "relative", flexShrink: 0, width: "30px", height: "30px" }}>
    <Image src="/Ellipse 11800.svg" alt="" width={30} height={30} />

    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "10px",
        height: "1.5px",
        borderRadius: "2px",
        backgroundColor: "#FFFFFF",
        transform: "translate(-50%, -50%)",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "1.5px",
        height: "10px",
        borderRadius: "2px",
        backgroundColor: "#FFFFFF",
        transform: `translate(-50%, -50%) scaleY(${isOpen ? 0 : 1})`,
        transition: "transform 0.3s ease",
      }}
    />
  </Box>
);

const TextPart = () => {
  const [expandedId, setExpandedId] = useState<string | null>(FAQ_ITEMS[0].id);

  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        width: "620px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {FAQ_ITEMS.map(({ id, question, answer }) => {
        const isOpen = expandedId === id;

        return (
          <Accordion
            key={id}
            expanded={isOpen}
            onChange={(_, isExpanded) => setExpandedId(isExpanded ? id : null)}
            disableGutters
            elevation={0}
            sx={{
              "&&": { borderRadius: isOpen ? "20px" : "32px" },
              "&::before": { display: "none" },
              overflow: "hidden",
              backgroundColor: "#FCFDFD",
              border: "1px solid #EEF3F7",
              boxShadow: isOpen ? OPEN_SHADOW : CLOSED_SHADOW,
              transition: "border-radius 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <AccordionSummary
              disableRipple
              expandIcon={<ToggleIcon isOpen={isOpen} />}
              sx={{
                minHeight: "auto",
                padding: "15px",
                transition: "padding 0.3s ease",
                "&.Mui-expanded": {
                  minHeight: "auto",
                  padding: "23px 15px 0",
                },
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "none",
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 800,
                  fontSize: "14px",
                  lineHeight: "32px",
                  textAlign: "right",
                  color: "#1A1A1A",
                }}
              >
                {question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ padding: "16px 15px 23px" }}>
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
                {answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default TextPart;