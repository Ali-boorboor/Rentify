import React from "react";
import Slider from "@singlePropertyPage/components/property-details/Slider";
import MainDetails from "@singlePropertyPage/components/property-details/details/Main";
import PropertyMenu from "@singlePropertyPage/components/property-details/PropertyMenu";
import PropertyHeader from "@singlePropertyPage/components/property-details/PropertyHeader";
import LocationDetails from "@singlePropertyPage/components/property-details/details/Location";
import EquipmentDetails from "@singlePropertyPage/components/property-details/details/Equipment";
import PropertyAgentCard from "@singlePropertyPage/components/property-details/PropertyAgentCard";
import DescriptionDetails from "@singlePropertyPage/components/property-details/details/Description";

const PropertyDetails = () => {
  return (
    <section className="bg-card px-4 py-10 border shadow-sm">
      <div className="container m-auto space-y-4 md:space-y-8">
        <Slider />

        <div className="flex flex-wrap-reverse items-end justify-between gap-4 md:gap-8">
          <div className="grow-[10] space-y-10 md:space-y-20">
            <PropertyHeader />

            <PropertyMenu />

            <MainDetails />

            <EquipmentDetails />

            <DescriptionDetails />

            <LocationDetails />
          </div>

          <PropertyAgentCard />
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
