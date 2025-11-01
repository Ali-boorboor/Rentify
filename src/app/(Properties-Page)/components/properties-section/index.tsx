import React from "react";
import SortBar from "@/components/sort-bar";
import PropertyCard from "@/components/ui/PropertyCard";
import { Button } from "@/components/ui/button";

const PropertiesSection = () => {
  return (
    <section className="px-4">
      <div className="container m-auto flex flex-col gap-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center sm:text-right">
          رهن و اجاره آپارتمان در تهران
        </h1>

        <SortBar />

        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {[...Array(8)].map((_, index) => (
            <PropertyCard
              title="{property.title}"
              key={index}
              rentAmount={0}
              location="{property.location.faName}"
              mortgageAmount={0}
              propertyType="{property.propertyCategory.faTitle}"
            />
          ))}
        </div>

        <Button className="m-auto my-6">نمایش آگهی‌های بیشتر</Button>
        {/* if datas was loading show => <Button className="m-auto mt-6 md:mt-12" disabled>
          در حال بارگذاری
          <Spinner />
        </Button> */}
      </div>
    </section>
  );
};

export default PropertiesSection;
