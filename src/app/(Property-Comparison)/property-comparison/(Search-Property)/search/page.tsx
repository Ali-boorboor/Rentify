import React, { Suspense } from "react";
import FiltersBar from "@/components/filters-bar";
import FiltersBarLoading from "@/components/filters-bar/FiltersBarLoading";
import PropertiesSection from "@comparisonSearch/components/PropertiesSection";

const PropertyComparisonSearchPage = () => {
  return (
    <section>
      <Suspense fallback={<FiltersBarLoading />}>
        <FiltersBar />
      </Suspense>

      <Suspense>
        <PropertiesSection />
      </Suspense>
    </section>
  );
};

export default PropertyComparisonSearchPage;
