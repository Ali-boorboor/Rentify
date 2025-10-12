import React from "react";
import PropertyCategoryCard from "@homePage/components/header/PropertyCategoryCard";

const PropertyCategoryList = () => {
  return (
    <section className="container m-auto flex flex-wrap gap-6 items-center justify-center md:justify-between lg:translate-y-[30%]">
      <PropertyCategoryCard
        image="/images/png/home-page/property-category/villa.png"
        title="ویلا"
      />
      <PropertyCategoryCard
        image="/images/png/home-page/property-category/apartment.png"
        title="آپارتمان"
      />
      <PropertyCategoryCard
        image="/images/png/home-page/property-category/villa-house.png"
        title="خانه ویلایی"
      />
    </section>
  );
};

export default PropertyCategoryList;
