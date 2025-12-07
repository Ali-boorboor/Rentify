import React from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import PropertyCard from "@/components/ui/PropertyCard";
import { parseJson } from "@/utils/json";

const PropertyCards = async () => {
  connectToDB();

  const properties = await PropertyModel.find({})
    .populate({
      path: "propertyDetails",
      populate: { path: "propertyCategory" },
    })
    .populate({
      path: "address",
      populate: { path: "province" },
    })
    .sort({ _id: -1 })
    .limit(8)
    .lean();

  return (
    <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {properties.map((property) => (
        <PropertyCard
          title={property.title}
          key={property._id as string}
          image={property?.images?.[0]}
          rentAmount={property.rentAmount}
          propertyID={String(property._id)}
          linkTo={`/properties/${property._id}`}
          mortgageAmount={property.mortgageAmount}
          province={property.address.province.faName}
          propertyCategory={parseJson(
            property.propertyDetails.propertyCategory
          )}
        />
      ))}
    </div>
  );
};

export default PropertyCards;
