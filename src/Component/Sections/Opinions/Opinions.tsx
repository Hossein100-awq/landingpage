"use client";

import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FONT_FAMILY = '"Abar Mid FaNum", sans-serif';
const PRIMARY_GRADIENT =
  "linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)";
const DOT_COLOR = "rgba(105, 118, 135, 0.3)";
const DRAG_THRESHOLD = 80;
const QUOTE_MARK_OFFSETS = [0, 14.93];

interface Review {
  id: string;
  text: string;
  name: string;
  role: string;
  avatarIndex: number;
}

interface AvatarSlot {
  size: number;
  left: string;
  top: string;
}

const REVIEWS: Review[] = [
  {
    id: "ehsan-abdipour",
    text: "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.",
    name: "احسان عبدی پور",
    role: "مهمان",
    avatarIndex: 0,
  },
  {
    id: "sara-mohammadi",
    text: "از لحظه‌ی ورود، احساس کردم مهمان یک خانه‌ی صمیمی‌ام. صبح‌ها با صدای پرنده‌ها بیدار می‌شدم و عصرها توی حیاط با یک استکان چای آرامش می‌گرفتم.",
    name: "سارا محمدی",
    role: "مهمان",
    avatarIndex: 1,
  },
  {
    id: "reza-karimi",
    text: "برای فرار از شلوغی شهر آمده بودیم و دقیقاً همان چیزی را پیدا کردیم که می‌خواستیم؛ اتاق‌های تمیز، سکوت جنگل و برخورد گرم میزبان‌ها.",
    name: "رضا کریمی",
    role: "مهمان",
    avatarIndex: 2,
  },
  {
    id: "maryam-nouri",
    text: "سفر خانوادگی‌مان به گیلمار بی‌نقص بود. بچه‌ها از طبیعت و فضای بازی لذت بردند و ما هم بعد از مدت‌ها واقعاً استراحت کردیم. حتماً برمی‌گردیم.",
    name: "مریم نوری",
    role: "مهمان",
    avatarIndex: 3,
  },
];

const AVATAR_SRCS: string[] = [
  "/Reviewer Image.svg",
  "/Reviewer Image (1).svg",
  "/Reviewer Image (2).svg",
  "/Reviewer Image (3).svg",
  "/Reviewer Image (4).svg",
  "/Reviewer Image (5).svg",
  "/Reviewer Image (6).svg",
  "/Reviewer Image (7).svg",
];

const AVATAR_SLOTS: AvatarSlot[] = [
  { size: 100, left: "calc(50% - 50px)", top: "21.03%" },
  { size: 60, left: "75.71%", top: "33.77%" },
  { size: 60, left: "80.67%", top: "72.85%" },
  { size: 60, left: "19.76%", top: "79.97%" },
  { size: 60, left: "16.25%", top: "21.19%" },
  { size: 60, left: "8.38%", top: "57.62%" },
  { size: 50, left: "87.77%", top: "47.68%" },
  { size: 50, left: "18.65%", top: "44.54%" },
];

const getDisplayAvatars = (activeAvatarIndex: number): string[] => {
  const avatars = [...AVATAR_SRCS];
  [avatars[0], avatars[activeAvatarIndex]] = [
    avatars[activeAvatarIndex],
    avatars[0],
  ];
  return avatars;
};

interface UseDragSlideOptions {
  onNext: () => void;
  onPrev: () => void;
}

const useDragSlide = ({ onNext, onPrev }: UseDragSlideOptions) => {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    startXRef.current = event.clientX;
    setIsDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setDragX(event.clientX - startXRef.current);
  };

  const handlePointerEnd = () => {
    if (!isDragging) return;
    if (dragX >= DRAG_THRESHOLD) onNext();
    else if (dragX <= -DRAG_THRESHOLD) onPrev();
    setIsDragging(false);
    setDragX(0);
  };

  return {
    dragX,
    isDragging,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerEnd,
      onPointerCancel: handlePointerEnd,
    },
  };
};

const QuoteIcon = () => (
  <Box
    aria-hidden="true"
    sx={{
      position: "relative",
      flexShrink: 0,
      width: "28px",
      height: "28px",
      pointerEvents: "none",
    }}
  >
    {QUOTE_MARK_OFFSETS.map((left) => (
      <Image
        key={left}
        src="/Vector (5).png"
        alt=""
        width={13.07}
        height={20.72}
        style={{ position: "absolute", top: "3.64px", left: `${left}px` }}
      />
    ))}
  </Box>
);

const GuestReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  const { dragX, isDragging, handlers } = useDragSlide({
    onNext: goNext,
    onPrev: goPrev,
  });

  const activeReview = REVIEWS[activeIndex];
  const displayAvatars = getDisplayAvatars(activeReview.avatarIndex);

  return (
    <Box
      component="section"
      dir="rtl"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        height: "698px",
        mx: "auto",
        backgroundColor: "#F5F8FA",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "calc(50% - 584.5px)",
          top: "94px",
          width: "1169px",
          height: "604px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "14.24%",
            right: "-1.18%",
            bottom: "-13.16%",
            left: "-1.11%",
            pointerEvents: "none",
          }}
        >
          <Image
            src="/Vector (4).png"
            alt=""
            fill
            sizes="1200px"
            style={{ objectFit: "fill" }}
          />
        </Box>

        {displayAvatars.map((src, slotIndex) => {
          const { size, left, top } = AVATAR_SLOTS[slotIndex];
          return (
            <Image
              key={src}
              src={src}
              alt=""
              width={size}
              height={size}
              style={{ position: "absolute", left, top }}
            />
          );
        })}

        <Box
          sx={{
            position: "absolute",
            left: "calc(50% - 250px)",
            top: "247px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Box
            {...handlers}
            sx={{
              boxSizing: "border-box",
              width: "100%",
              height: "264px",
              padding: "23px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              backgroundColor: "#FCFDFD",
              border: "1px solid #EEF3F7",
              borderRadius: "16px",
              boxShadow:
                "0px 24px 48px rgba(0, 46, 37, 0.12), 0px 0px 0px 6px #FFFFFF",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
              touchAction: "pan-y",
              transform: `translateX(${dragX}px)`,
              transition: isDragging ? "none" : "transform 0.3s ease",
            }}
          >
            <QuoteIcon />

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                minHeight: "96px",
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "32px",
                textAlign: "center",
                color: "#4C4C4D",
              }}
            >
              {activeReview.text}
            </Typography>

            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 800,
                  fontSize: "14px",
                  lineHeight: "32px",
                  textAlign: "center",
                  color: "#1A1A1A",
                }}
              >
                {activeReview.name}
              </Typography>

              <Typography
                sx={{
                  mt: "-4px",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "32px",
                  textAlign: "center",
                  color: "#4C4C4D",
                }}
              >
                {activeReview.role}
              </Typography>
            </Box>
          </Box>

          <Box
            aria-hidden="true"
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            {REVIEWS.map((review, index) => (
              <Box
                key={review.id}
                sx={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: index === activeIndex ? PRIMARY_GRADIENT : DOT_COLOR,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "calc(50% - 366px)",
          width: "732px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Image src="/Icon Container (1).svg" alt="" width={84} height={52} />

        <Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: FONT_FAMILY,
              fontWeight: 800,
              fontSize: "32px",
              lineHeight: "58px",
              letterSpacing: "-1.4px",
              textAlign: "center",
              color: "#1A1A1A",
            }}
          >
            گیلمار از نگاه مهمانان
          </Typography>

          <Typography
            sx={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "32px",
              textAlign: "center",
              color: "#4C4C4D",
            }}
          >
            تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GuestReviews;