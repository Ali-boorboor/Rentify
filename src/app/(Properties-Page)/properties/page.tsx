import PropertiesSection from "@properties/components/properties-section";
import QueryProvider from "@/components/providers/QueryProvider";
import FiltersBar from "@/components/filters-bar";
import React from "react";

const PropertiesPage = () => {
  return (
    <>
      <FiltersBar />

      <QueryProvider>
        <PropertiesSection />
      </QueryProvider>
    </>
  );
};

export default PropertiesPage;
