import PropertiesSection from "@propertiesPage/components/properties-section";
import FiltersBar from "@propertiesPage/components/filters-bar";
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
