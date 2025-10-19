import React from "react";
import MainDetails from "@singlePropertyPage/components/property-details/details/Main";
import PropertyMenu from "@singlePropertyPage/components/property-details/PropertyMenu";
import PropertyHero from "@singlePropertyPage/components/property-details/PropertyHero";
import PropertyAgentCard from "@singlePropertyPage/components/property-details/agent-card";
import LocationDetails from "@singlePropertyPage/components/property-details/details/location";
import EquipmentDetails from "@singlePropertyPage/components/property-details/details/Equipment";
import DescriptionDetails from "@singlePropertyPage/components/property-details/details/Description";

const PropertyDetails = () => {
  return (
    <div className="flex flex-wrap-reverse items-end justify-between gap-4 md:gap-8">
      <div className="grow-[10] space-y-10 md:space-y-20">
        <PropertyHero />

        <PropertyMenu />

        <MainDetails />

        <EquipmentDetails />

        <DescriptionDetails />

        <LocationDetails />
      </div>

      <PropertyAgentCard />
    </div>
  );
};

export default PropertyDetails;
