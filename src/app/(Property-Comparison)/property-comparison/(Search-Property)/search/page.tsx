import React from "react";
import FiltersBar from "@/components/filters-bar";
import QueryProvider from "@/components/providers/QueryProvider";
import PropertiesSection from "@comparisonSearch/components/PropertiesSection";

const PropertyComparisonSearchPage = () => {
  return (
    <section>
      <FiltersBar />

      <QueryProvider>
        <PropertiesSection />
      </QueryProvider>
    </section>
  );
};

export default PropertyComparisonSearchPage;
