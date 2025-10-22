import PropertiesSection from "@properties/components/properties-section";
import FiltersBar from "@/components/filters-bar";
import React from "react";

const PropertiesPage = () => {
  return (
    <>
      <FiltersBar />

      <PropertiesSection />
    </>
  );
};

export default PropertiesPage;
