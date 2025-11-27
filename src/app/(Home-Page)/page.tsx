import MostViewedProperties from "@home/components/most-viewed-properties";
import PromoBanner from "@home/components/promo-banner";
import HowItWorks from "@home/components/how-it-works";
import ScrollToTop from "@/components/scroll-to-top";
import Services from "@home/components/services";
import React from "react";

const HomePage = () => {
  return (
    <>
      <MostViewedProperties />

      <Services />

      <HowItWorks />

      <PromoBanner />

      <ScrollToTop />
    </>
  );
};

export default HomePage;
