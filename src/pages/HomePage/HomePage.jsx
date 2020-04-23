import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection.component";
import TrendingSection from "../../components/TrendingSection/TrendingSection.component";
import HappeningNowSection from "../../components/HappeningNowSection/HappeningNowSection.component";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrendingSection />
      <HappeningNowSection />
    </div>
  );
};

export default HomePage;
