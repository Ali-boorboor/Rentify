import React from "react";
import ServiceModel from "@models/Service";
import connectToDB from "@configs/database";
import ServiceCard from "@home/components/services/ServiceCard";

const ServiceCards = async () => {
  connectToDB();

  const services = await ServiceModel.find({}).lean();

  return (
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
  );
};

export default ServiceCards;
