import localFont from "next/font/local";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EmotionRegistry from "@/theme/EmotionRegistry";

export const metadata: Metadata = {
  title: "گیلمار",
  description: "گیلمار",
  icons: {
    icon: "/content_a047f890-9b52-41b2-98b6-0d5cde0125b0-23.svg",
  },
};

const abar = localFont({
  src: [
    {
      path: "../assets/fonts/woff2/AbarMidFaNum-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/woff2/AbarMidFaNum-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/woff2/AbarMidFaNum-Bold.woff2",
      weight: "700",
    },
  ],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${abar.className} min-h-full flex flex-col`}>
        <EmotionRegistry>{children}</EmotionRegistry>
      </body>
    </html>
  );
}