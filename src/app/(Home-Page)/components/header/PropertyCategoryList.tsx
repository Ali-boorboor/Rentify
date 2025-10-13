import PropertyCategoryCard from "@homePage/components/header/PropertyCategoryCard";
import propertyCategories from "@homePage/constants/propertyCategoryDatas";
import React from "react";

const PropertyCategoryList = () => {
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

export default PropertyCategoryList;
