import React from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import PropertyCard from "@/components/ui/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { parseJson } from "@/utils/json";

const MostViewedProperties = async () => {
  connectToDB();
  const properties = await PropertyModel.find({})
    .populate({
      path: "propertyDetails",
      populate: {
        path: "propertyCategory",
      },
    })
    .populate({
      path: "address",
      populate: {
        path: "province",
      },
    })
    .sort({ _id: -1 })
    .limit(8)
    .lean();

  return (
    <section className="container mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between">
        <h3 className="text-lg md:text-2xl font-semibold">
          پر بازدید ترین‌های هفته‌ی گذشته
        </h3>

        <Button variant="ghost">
          مشاهده همه
          <ArrowLeft className="size-4.5" />
        </Button>
      </div>

      <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {properties.map((property) => (
          <PropertyCard
            title={property.title}
            key={property._id as string}
            image={property?.images?.[0]}
            province={property.address.province.faName}
            rentAmount={property.propertyDetails.rentAmount}
            mortgageAmount={property.propertyDetails.mortgageAmount}
            propertyCategory={parseJson(
              property.propertyDetails.propertyCategory
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default MostViewedProperties;
