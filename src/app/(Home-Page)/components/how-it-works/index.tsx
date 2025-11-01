import Stepper from "@home/components/how-it-works/Stepper";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="container mx-auto space-y-6">
      <h3 className="text-lg md:text-2xl font-semibold text-center">
        <span className="text-primary">رنتی‌فای</span> چه طور کار می کند؟
      </h3>

      <Stepper />
    </section>
  );
};

export default HowItWorks;
