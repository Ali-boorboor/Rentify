import MostViewedProperties from "@home/components/most-viewed-properties";
import PromoBanner from "@home/components/promo-banner";
import HowItWorks from "@home/components/how-it-works";
import Services from "@home/components/services";
import React from "react";

const HomePage = () => {
  return (
    <>
      <MostViewedProperties />

      <Services />

      <HowItWorks />

      <PromoBanner />
    </>
  );
};

export default HomePage;
