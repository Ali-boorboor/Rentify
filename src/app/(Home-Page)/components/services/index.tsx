import ServicesLoading from "@home/components/services/ServicesLoading";
import ServiceCards from "@home/components/services/ServiceCards";
import React, { Suspense } from "react";

const Services = () => {
  return (
    <section className="container mx-auto space-y-6 lg:space-y-8">
      <h3 className="text-lg md:text-2xl font-semibold text-center">
        با خدمات <span className="text-primary">رنتی‌فای</span> آشنا شوید
      </h3>

      <Suspense fallback={<ServicesLoading />}>
        <ServiceCards />
      </Suspense>
    </section>
  );
};

export default Services;
