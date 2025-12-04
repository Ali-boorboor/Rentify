import React from "react";
import FiltersBar from "@/components/filters-bar";
import PropertiesSection from "@comparisonSearch/components/PropertiesSection";

const PropertyComparisonSearchPage = () => {
  return (
    <section>
      <FiltersBar />

      <PropertiesSection />
    </section>
  );
};

export default PropertyComparisonSearchPage;
