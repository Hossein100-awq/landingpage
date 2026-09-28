"use client";

import React from "react";
import { motion } from "framer-motion";
import IntroSection from "@/Component/Sections/Intro/IntroSection";
import NestedImagesComponent from "@/Component/Sections/NestedImages/NestedImagesComponent";
import FeatureCardsComponent from "@/Component/Sections/FeatureCards/FeatureCardsComponent";
import GuestAmenitiesComponent from "@/Component/Sections/GuestAmenities/GuestAmenitiesComponent";
import Cart from "@/Component/Sections/Cart/Cart";
import VideoTour from "@/Component/Sections/VideoTour/VideoTour";
import Opinions from "./../../../Component/Sections/Opinions/Opinions";
import SpecialContainer from "@/Component/Sections/SpecialPackage/SpecialPackage";
import MagazinContainer from "@/Component/Sections/Magazine/MagazinContainer/MagazinContainer";
import QuestionMainPart from "./../../../Component/Sections/Question/QuestionMainPart/QuestionMainPart";
import Footer from "@/Component/Layout/Footer";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AnimatedSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {children}
    </motion.section>
  );
};

const Page = () => {
  return (
    <main className="w-full overflow-hidden">
      <IntroSection />

      <div className="flex w-full flex-col gap-[80px]">
        <AnimatedSection>
          <NestedImagesComponent />
        </AnimatedSection>

        <AnimatedSection>
          <FeatureCardsComponent />
        </AnimatedSection>

        <AnimatedSection>
          <GuestAmenitiesComponent />
        </AnimatedSection>

        <AnimatedSection>
          <Cart />
        </AnimatedSection>

        <AnimatedSection>
          <VideoTour />
        </AnimatedSection>

        <AnimatedSection>
          <Opinions />
        </AnimatedSection>

        <AnimatedSection>
          <SpecialContainer />
        </AnimatedSection>

        <AnimatedSection>
          <MagazinContainer />
        </AnimatedSection>

        <AnimatedSection>
          <QuestionMainPart />
        </AnimatedSection>

        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Page;