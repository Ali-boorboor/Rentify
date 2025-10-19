import MostViewedProperties from "@homePage/components/most-viewed-properties";
import PromoBanner from "@homePage/components/promo-banner";
import HowItWorks from "@homePage/components/how-it-works";
import Services from "@homePage/components/services";
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
