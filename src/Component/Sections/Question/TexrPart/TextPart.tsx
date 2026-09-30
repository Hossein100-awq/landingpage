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
      "در گیلمار امکان کنسلی یا تغییر تاریخ رزرو طبق قوانین هر پکیج و شرایط رزرو وجود دارد. برای اطلاع از جزئیات شرایط کنسلی، هنگام رزرو قوانین مربوط به همان اقامتگاه را بررسی کنید.",
  },
  {
    id: "check-in",
    question: "ساعت ورود و خروج از اقامتگاه چه زمانی است؟",
    answer:
      "ساعت ورود از ۱۴ و ساعت خروج تا ۱۲ ظهر است. در صورت هماهنگی قبلی و وجود ظرفیت، امکان تغییر این زمان‌ها ممکن است.",
  },
  {
    id: "breakfast",
    question: "آیا صبحانه در قیمت اقامت شامل می‌شود؟",
    answer:
      "بسته به پکیج انتخابی، صبحانه ممکن است در هزینه اقامت لحاظ شده باشد. جزئیات مربوط به هر پکیج هنگام رزرو نمایش داده می‌شود.",
  },
  {
    id: "pets",
    question: "آیا امکان همراه داشتن حیوان خانگی وجود دارد؟",
    answer:
      "برای حفظ آرامش و راحتی تمام مهمانان، قوانین مربوط به همراه داشتن حیوان خانگی برای هر اقامتگاه متفاوت است. پیش از رزرو شرایط اقامتگاه موردنظر را بررسی کنید.",
  },
  {
    id: "route",
    question: "برای رسیدن به گیلمار چه مسیری را پیشنهاد می‌کنید؟",
    answer:
      "راهنمای دقیق مسیر و اطلاعات دسترسی به گیلمار در اختیار مهمانان قرار می‌گیرد تا بتوانند به‌راحتی مسیر مناسب خود را انتخاب کنند.",
  },
];

const ToggleIcon = ({ expanded }: { expanded: boolean }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "26px", sm: "30px" },
        height: { xs: "26px", sm: "30px" },
        flexShrink: 0,
      }}
    >
      <Image
        src={expanded ? "/Icon Container (5).svg" : "/Icon Container (4).svg"}
        alt=""
        fill
        sizes="30px"
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
};

const TextPart = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 1,
        width: "100%",
        maxWidth: "620px",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: { xs: "16px", sm: "24px", md: "32px" },
      }}
    >
      {FAQ_ITEMS.map((item) => {
        const isExpanded = expanded === item.id;

        return (
          <Accordion
            key={item.id}
            expanded={isExpanded}
            onChange={handleChange(item.id)}
            disableGutters
            elevation={0}
            sx={{
              width: "100%",
              minWidth: 0,
              margin: "0 !important",
              borderRadius: { xs: "14px", sm: "18px" },
              backgroundColor: "#FCFDFD",
              boxShadow: isExpanded ? OPEN_SHADOW : CLOSED_SHADOW,
              overflow: "hidden",
              "&::before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ToggleIcon expanded={isExpanded} />}
              sx={{
                minHeight: "unset",
                width: "100%",
                minWidth: 0,
                padding: {
                  xs: "12px",
                  sm: "15px",
                },
                "&.Mui-expanded": {
                  minHeight: "unset",
                  padding: {
                    xs: "16px 12px 0",
                    sm: "23px 15px 0",
                  },
                },
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                  minWidth: 0,
                  alignItems: "center",
                },
                "& .MuiAccordionSummary-content.Mui-expanded": {
                  margin: 0,
                },
                "& .MuiAccordionSummary-expandIconWrapper": {
                  marginRight: { xs: "8px", sm: "12px" },
                  marginLeft: 0,
                },
              }}
            >
              <Typography
                sx={{
                  minWidth: 0,
                  fontFamily: FONT_FAMILY,
                  fontWeight: 700,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
                  lineHeight: {
                    xs: "26px",
                    sm: "32px",
                  },
                  color: "#1A1A1A",
                  textAlign: "right",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box",
                padding: {
                  xs: "12px",
                  sm: "16px 15px 23px",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 500,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                  },
                  lineHeight: {
                    xs: "26px",
                    sm: "32px",
                  },
                  color: "#4C4C4D",
                  textAlign: "right",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default TextPart;