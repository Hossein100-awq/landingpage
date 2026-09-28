import React from "react";
import Navbar from "../../Layout/Navbar";
import IntroContent from "./IntroContent";
import IntroImage from "./IntroImage";

const IntroSection = () => {
  return (
    <section
      className="
      relative
      w-full
      min-h-screen
      bg-[#F5F8FA]
      overflow-hidden
      "
    >
      <div
        className="
        absolute
        w-[640px]
        h-[640px]
        -top-[140px]
        -left-[140px]
        rounded-full
        bg-[#C5D8FF]
        blur-[420px]
        opacity-100
        pointer-events-none
        "
      />

      <div
        className="
        absolute
        w-[640px]
        h-[640px]
        -top-[140px]
        -right-[140px]
        rounded-full
        bg-[#C5D8FF]
        blur-[420px]
        opacity-100
        pointer-events-none
        "
      />

      <div className="relative z-10">
        <Navbar />

        <IntroContent />

        <div className="hidden md:block">
          <IntroImage />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;