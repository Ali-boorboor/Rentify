import PropertyCategoryCard from "@home/components/hero-header/PropertyCategoryCard";
import propertyCategories from "@home/constants/propertyCategoryDatas";
import React from "react";

const PropertyCategories = () => {
  return (
    <section className="container m-auto flex flex-wrap gap-6 items-center justify-center md:justify-between lg:translate-y-[30%]">
      {propertyCategories.map((category) => (
        <PropertyCategoryCard
          image={category.image}
          title={category.title}
          key={category.id}
        />
      ))}
    </section>
  );
};

export default PropertyCategories;
