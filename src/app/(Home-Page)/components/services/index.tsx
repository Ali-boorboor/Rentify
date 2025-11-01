import ServiceCard from "@home/components/services/ServiceCard";
import connectToDB from "@configs/database";
import ServiceModel from "@models/Service";
import React from "react";

const Services = async () => {
  connectToDB();
  const services = await ServiceModel.find({}).lean();

  return (
    <section className="container mx-auto space-y-6 lg:space-y-8">
      <h3 className="text-lg md:text-2xl font-semibold text-center">
        با خدمات <span className="text-primary">رنتی‌فای</span> آشنا شوید
      </h3>

      <div className="flex flex-wrap justify-between gap-6">
        {services.map((service) => (
          <ServiceCard
            buttonTitle={service.buttonLabel}
            description={service.description}
            buttonHref={service.buttonHref}
            key={service._id as string}
            image={service.image}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
