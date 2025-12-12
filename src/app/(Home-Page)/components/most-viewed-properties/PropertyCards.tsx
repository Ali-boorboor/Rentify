import React, { cache } from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import authenticate from "@/utils/authenticate";
import PropertyCard from "@/components/property-card";
import { parseJson } from "@/utils/json";

const getProperties = cache(async () => {
  await connectToDB();
  return await PropertyModel.find({ propertyStatus: "success" })
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
});

const PropertyCards = async () => {
  const properties = await getProperties();

  const isUserLogin = await authenticate();

  return (
    <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {properties.map((property) => (
        <PropertyCard
          title={property.title}
          key={property._id as string}
          image={property?.images?.[0]}
          isUserLoggedIn={!!isUserLogin}
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
