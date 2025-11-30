import React from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import MainDetails from "@singleProperty/components/property-details/details/Main";
import PropertyMenu from "@singleProperty/components/property-details/PropertyMenu";
import PropertyHero from "@singleProperty/components/property-details/PropertyHero";
import PropertyAgentCard from "@singleProperty/components/property-details/agent-card";
import LocationDetails from "@singleProperty/components/property-details/details/location";
import EquipmentDetails from "@singleProperty/components/property-details/details/Equipment";
import DescriptionDetails from "@singleProperty/components/property-details/details/Description";
import { IEquipmentAndFacilitie } from "@models/EquipmentAndFacilitie";
import { redirect, RedirectType } from "next/navigation";

const PropertyDetails = async ({ propertyID }: { propertyID: string }) => {
  connectToDB();

  const property = await PropertyModel.findById(propertyID)
    .populate("user", "name agencyName")
    .populate({
      path: "propertyDetails",
      populate: [{ path: "equipments" }, { path: "contractType" }],
    })
    .populate({
      path: "address",
      populate: { path: "province" },
    })
    .lean();

  if (!property) redirect("/", RedirectType.replace);

  return (
    <div className="flex flex-wrap-reverse items-end justify-between gap-6">
      <div className="grow-10 space-y-10 md:space-y-20 basis-1/3">
        <PropertyHero
          title={property.title}
          createdAt={property.createdAt}
          rentAmount={property.rentAmount}
          propertyID={property._id.toString()}
          mortgageAmount={property.mortgageAmount}
          provinceName={property.address.province.faName}
        />

        <PropertyMenu />

        <MainDetails
          cardinalDirection={property.propertyDetails.cardinalDirection}
          contractType={property.propertyDetails.contractType.title}
          propertyType={property.propertyDetails.propertyType}
          propertyAge={property.propertyDetails.propertyAge}
          floorsCount={property.propertyDetails.floorsCount}
          roomsCount={property.propertyDetails.roomsCount}
          unitsCount={property.propertyDetails.unitsCount}
          meterage={property.propertyDetails.meterage}
          floor={property.propertyDetails.floor}
        />

        <EquipmentDetails
          equipments={
            property.propertyDetails.equipments as IEquipmentAndFacilitie[]
          }
        />

        <DescriptionDetails
          description={property.propertyDetails.descriptionMessage}
        />

        <LocationDetails
          locationCoordinates={property.address?.propertyLocationCoordinates}
          province={property.address.province.faName}
          fullAddress={property.address.fullAddress}
          mainStreet={property.address.mainStreet}
          sideStreet={property.address.sideStreet}
        />
      </div>

      <PropertyAgentCard
        agencyName={property.user?.agencyName as string}
        name={property.user.name}
      />
    </div>
  );
};

export default PropertyDetails;
