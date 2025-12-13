import React from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import PropertyCard from "@/components/property-card";
import PropertyDetailModel from "@models/PropertyDetail";
import { parseJson } from "@/utils/json";

interface PropertyCardsProps {
  propertyCategory: string;
  propertyID: string;
}

const PropertyCards = async ({
  propertyCategory,
  propertyID,
}: PropertyCardsProps) => {
  connectToDB();

  const propertyDetailsID = await PropertyDetailModel.find({
    propertyCategory: propertyCategory,
  }).lean();

  const similarProperties = await PropertyModel.find({
    _id: { $ne: propertyID },
    propertyDetails: propertyDetailsID,
  })
    .populate({
      path: "propertyDetails",
      populate: { path: "propertyCategory" },
    })
    .populate({
      path: "address",
      populate: { path: "province" },
    })
    .limit(4)
    .lean();

  return (
    <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {similarProperties.map((similarProperty) => (
        <PropertyCard
          title={similarProperty.title}
          key={similarProperty._id as string}
          image={similarProperty?.images?.[0]}
          rentAmount={similarProperty.rentAmount}
          propertyID={parseJson(similarProperty._id)}
          linkTo={`/properties/${similarProperty._id}`}
          mortgageAmount={similarProperty.mortgageAmount}
          province={similarProperty.address.province.faName}
          propertyCategory={parseJson(
            similarProperty.propertyDetails.propertyCategory
          )}
        />
      ))}
    </div>
  );
};

export default PropertyCards;
