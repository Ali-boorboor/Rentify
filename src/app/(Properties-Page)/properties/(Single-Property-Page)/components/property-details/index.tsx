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
import { redirect, RedirectType } from "next/navigation";
import { parseJson } from "@/utils/json";

const PropertyDetails = async ({ propertyID }: { propertyID: string }) => {
  connectToDB();

  const property = await PropertyModel.findById(propertyID)
    .populate("user", "name agencyName profileImage")
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
          title={parseJson(property.title)}
          createdAt={parseJson(property.createdAt)}
          rentAmount={parseJson(property.rentAmount)}
          propertyID={parseJson(property._id)}
          mortgageAmount={parseJson(property.mortgageAmount)}
          provinceName={parseJson(property.address.province.faName)}
        />

        <PropertyMenu />

        <MainDetails
          cardinalDirection={parseJson(
            property.propertyDetails.cardinalDirection
          )}
          contractType={parseJson(property.propertyDetails.contractType.title)}
          propertyType={parseJson(property.propertyDetails.propertyType)}
          propertyAge={parseJson(property.propertyDetails.propertyAge)}
          floorsCount={parseJson(property.propertyDetails.floorsCount)}
          roomsCount={parseJson(property.propertyDetails.roomsCount)}
          unitsCount={parseJson(property.propertyDetails.unitsCount)}
          meterage={parseJson(property.propertyDetails.meterage)}
          floor={parseJson(property.propertyDetails.floor)}
        />

        <EquipmentDetails
          equipments={parseJson(property.propertyDetails.equipments)}
        />

        <DescriptionDetails
          description={parseJson(property.propertyDetails.descriptionMessage)}
        />

        <LocationDetails
          locationCoordinates={parseJson(
            property.address?.propertyLocationCoordinates
          )}
          province={parseJson(property.address.province.faName)}
          fullAddress={parseJson(property.address.fullAddress)}
          mainStreet={parseJson(property.address.mainStreet)}
          sideStreet={parseJson(property.address.sideStreet)}
        />
      </div>

      <PropertyAgentCard
        agencyName={property.user?.agencyName?.toString()}
        profileImage={parseJson(property.user?.profileImage)}
        name={parseJson(property.user.name)}
      />
    </div>
  );
};

export default PropertyDetails;
