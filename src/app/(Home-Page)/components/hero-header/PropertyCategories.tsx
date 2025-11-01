import PropertyCategoryCard from "@home/components/hero-header/PropertyCategoryCard";
import PropertyCategoryModel from "@models/PropertyCategory";
import connectToDB from "@configs/database";
import React from "react";

const PropertyCategories = async () => {
  connectToDB();
  const propertyCategories = await PropertyCategoryModel.find({}).lean();

  return (
    <section className="container m-auto flex flex-wrap gap-6 items-center justify-center md:justify-between lg:translate-y-[30%]">
      {propertyCategories.map((category) => (
        <PropertyCategoryCard
          key={category._id as string}
          title={category.faTitle}
          image={category.image}
        />
      ))}
    </section>
  );
};

export default PropertyCategories;
