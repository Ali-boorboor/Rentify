import Stepper from "@homePage/components/how-it-works/Stepper";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="container m-auto space-y-4 md:space-y-8">
      <h2 className="text-lg md:text-2xl font-semibold text-center">
        <span className="text-primary">رنتی‌فای</span> چه طور کار می کند؟
      </h2>

      <Stepper />
    </section>
  );
};

export default HowItWorks;
