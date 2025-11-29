import React from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import PropertyDetailModel from "@models/PropertyDetail";
import PropertyCard from "@/components/ui/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { parseJson } from "@/utils/json";

interface SimilarPropertiesProps {
  propertyCategory: string;
  propertyID: string;
}

const SimilarProperties = async ({
  propertyCategory,
  propertyID,
}: SimilarPropertiesProps) => {
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
    <section className="px-4 py-6">
      <div className="container m-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <h4 className="text-lg md:text-2xl font-semibold">
            خانه هایی با ارزش مشابه
          </h4>

          <Button variant="ghost">
            مشاهده همه
            <ArrowLeft className="size-4.5" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {similarProperties.map((similarProperty) => (
            <PropertyCard
              title={similarProperty.title}
              key={similarProperty._id as string}
              image={similarProperty?.images?.[0]}
              rentAmount={similarProperty.rentAmount}
              linkTo={`/properties/${similarProperty._id}`}
              mortgageAmount={similarProperty.mortgageAmount}
              province={similarProperty.address.province.faName}
              propertyCategory={parseJson(
                similarProperty.propertyDetails.propertyCategory
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProperties;
