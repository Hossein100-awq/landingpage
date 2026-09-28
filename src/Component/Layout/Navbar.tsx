"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../Ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "خانه",
    "سوئیت‌ها و اقامت",
    "درباره‌ی گیلمار",
    "راهنمای مهمان‌ها",
    "مجله گیلمار",
    "تماس با ما",
  ];

  return (
    <nav
      dir="rtl"
      className="
        relative
        w-[calc(100%-32px)]
        max-w-[1280px]
        h-[66px]
        mx-auto
        mt-[40px]
        px-2
        py-[6.5px]
        flex
        items-center
        justify-between
        rounded-full
        bg-[#FCFDFD]
        border
        border-[#EEF3F6]
        shadow-[0px_0px_0px_6px_#FFFFFF]
        z-50
      "
    >
      <Image
        src="/IMG_1413 6 (1).svg"
        alt="logo"
        width={169}
        height={53}
        className="
          transition-transform
          duration-300
          hover:scale-105
          shrink-0
        "
      />

      <ul
        className="
          hidden
          lg:flex
          items-center
          gap-[40px]
          font-semibold
          text-[14px]
          whitespace-nowrap
        "
      >
        {menuItems.map((item) => (
          <li
            key={item}
            className="
              cursor-pointer
              transition-all
              duration-300
              hover:text-[#02ADF7]
              hover:-translate-y-1
            "
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <Button
          text="ورود یا ثبت‌نام"
          icon="/Vector (1).svg"
          iconPosition="right"
          className="
            group
            w-[154px]
            h-[52px]
            rounded-full
            gap-[10px]
            bg-[radial-gradient(circle_at_50%_100%,#26E05A_0%,#02ADF7_100%)]
            shadow-[0px_4px_12px_rgba(2,173,247,0.2)]
            transition-all
            duration-300
            hover:scale-105
            active:scale-95
            text-white
            font-extrabold
            text-[14px]
            leading-[32px]
          "
          iconClassName="
            w-[22px]
            h-[22px]
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      <button
        type="button"
        aria-label="باز کردن منو"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="
          lg:hidden
          w-[48px]
          h-[48px]
          flex
          items-center
          justify-center
          rounded-full
          bg-[#F5F8FA]
          border
          border-[#EEF3F6]
          transition-all
          duration-300
          hover:bg-[#EEF8FC]
          hover:scale-105
          active:scale-95
        "
      >
        <div className="relative w-[22px] h-[18px]">
          <span
            className={`
              absolute
              right-0
              top-0
              w-[22px]
              h-[2px]
              rounded-full
              bg-[#1A1A1A]
              transition-all
              duration-300
              ${isOpen ? "top-[8px] rotate-45" : ""}
            `}
          />

          <span
            className={`
              absolute
              right-0
              top-[8px]
              w-[16px]
              h-[2px]
              rounded-full
              bg-[#1A1A1A]
              transition-all
              duration-300
              ${isOpen ? "opacity-0 translate-x-2" : ""}
            `}
          />

          <span
            className={`
              absolute
              right-0
              bottom-0
              w-[22px]
              h-[2px]
              rounded-full
              bg-[#1A1A1A]
              transition-all
              duration-300
              ${isOpen ? "top-[8px] rotate-[-45deg]" : ""}
            `}
          />
        </div>
      </button>

      <div
        className={`
          lg:hidden
          absolute
          top-[76px]
          right-0
          w-full
          rounded-[24px]
          bg-[#FCFDFD]
          border
          border-[#EEF3F6]
          shadow-[0px_8px_30px_rgba(0,0,0,0.08)]
          overflow-hidden
          origin-top-right
          transition-all
          duration-300
          ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100 visible"
              : "opacity-0 -translate-y-3 scale-95 invisible pointer-events-none"
          }
        `}
      >
        <ul
          className="
            flex
            flex-col
            items-stretch
            p-[12px]
            gap-[4px]
            font-semibold
            text-[14px]
          "
        >
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setIsOpen(false)}
              className="
                w-full
                px-[16px]
                py-[13px]
                text-right
                cursor-pointer
                rounded-[12px]
                transition-all
                duration-300
                hover:text-[#02ADF7]
                hover:-translate-y-1
              "
            >
              {item}
            </li>
          ))}

          <li className="pt-[8px]">
            <Button
              text="ورود یا ثبت‌نام"
              icon="/Vector (1).svg"
              iconPosition="right"
              className="
                group
                w-full
                h-[52px]
                rounded-full
                gap-[10px]
                bg-[radial-gradient(circle_at_50%_100%,#26E05A_0%,#02ADF7_100%)]
                shadow-[0px_4px_12px_rgba(2,173,247,0.2)]
                transition-all
                duration-300
                hover:scale-[1.02]
                active:scale-95
                text-white
                font-extrabold
                text-[14px]
                leading-[32px]
              "
              iconClassName="
                w-[22px]
                h-[22px]
                object-contain
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;