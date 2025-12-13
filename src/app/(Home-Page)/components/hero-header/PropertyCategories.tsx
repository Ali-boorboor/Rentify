import PropertyCategoryCard from "@home/components/hero-header/PropertyCategoryCard";
import PropertyCategoryModel from "@models/PropertyCategory";
import connectToDB from "@configs/database";
import React, { cache } from "react";

const getPropertyCategories = cache(async () => {
  await connectToDB();
  return await PropertyCategoryModel.find({}).lean();
});

const PropertyCategories = async () => {
  const propertyCategories = await getPropertyCategories();

  return (
    <section className="container m-auto flex flex-wrap gap-6 items-center justify-center md:justify-between lg:translate-y-[30%]">
      {propertyCategories.map((category) => (
        <PropertyCategoryCard
          categoryID={category._id as string}
          key={category._id as string}
          title={category.faTitle}
          linkTo={category.link}
          image={category.image}
        />
      ))}
    </section>
  );
};

export default PropertyCategories;
