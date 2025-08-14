import React from "react";
import HomeSection from "../components/landing-sections/home-section";
import AboutSection from "../components/landing-sections/about-section";
import FeaturesSection from "../components/landing-sections/features-section";
import RoadmapSection from "../components/landing-sections/roadmap-section";
import FaqSection from "../components/landing-sections/faq-section";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <FeaturesSection />
      <RoadmapSection />
      <FaqSection/>
    </>
  );
};

export default HomePage;