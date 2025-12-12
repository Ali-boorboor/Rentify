import React, { cache } from "react";
import ServiceModel from "@models/Service";
import connectToDB from "@configs/database";
import ServiceCard from "@home/components/services/ServiceCard";

export const dynamic = "force-static";
export const revalidate = 24 * 60 * 60;

const getServices = cache(async () => {
  await connectToDB();
  return await ServiceModel.find({}).lean();
});

const ServiceCards = async () => {
  const services = await getServices();

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
