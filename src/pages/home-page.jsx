import React from "react";
import HomeSection from "../components/landing-sections/home-section";
import AboutSection from "../components/landing-sections/about-section";
import FeaturesSection from "../components/landing-sections/features-section";
import ExplorerSection from "../components/landing-sections/explorer-section";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <FeaturesSection />
      <ExplorerSection />
    </>
  );
};

export default HomePage;
