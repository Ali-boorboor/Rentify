import ServiceCard from "@home/components/services/ServiceCard";
import services from "@home/constants/servicesDatas";
import React from "react";

const Services = () => {
  return (
    <section className="container m-auto space-y-6 lg:space-y-8">
      <h3 className="text-lg md:text-2xl font-semibold text-center">
        با خدمات <span className="text-primary">رنتی‌فای</span> آشنا شوید
      </h3>

      <div className="flex flex-wrap justify-between gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            buttonTitle={service.buttonTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
