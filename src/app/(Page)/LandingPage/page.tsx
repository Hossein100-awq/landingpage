import IntroSection from "@/Component/Sections/Intro/IntroSection";
import NestedImagesComponent from "@/Component/Sections/NestedImages/NestedImagesComponent";
import FeatureCardsComponent from "@/Component/Sections/FeatureCards/FeatureCardsComponent";
import GuestAmenitiesComponent from "@/Component/Sections/GuestAmenities/GuestAmenitiesComponent";
import Cart from "@/Component/Sections/Cart/Cart";
import VideoTour from "@/Component/Sections/VideoTour/VideoTour";
import Opinions from "@/Component/Sections/Opinions/Opinions";
import SpecialContainer from "@/Component/Sections/SpecialPackage/SpecialPackage";
import MagazinContainer from "@/Component/Sections/Magazine/MagazinContainer/MagazinContainer";
import QuestionMainPart from "@/Component/Sections/Question/QuestionMainPart/QuestionMainPart";
import Footer from "@/Component/Layout/Footer";
import AnimatedSection from "./../../../Component/Motion/Motion";

const Page = () => {
  return (
    <main className="w-full overflow-hidden">
      <div className="flex w-full flex-col gap-[80px]">
        <IntroSection />

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