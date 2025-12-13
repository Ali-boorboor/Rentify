import FiltersBarLoading from "@/components/filters-bar/FiltersBarLoading";
import PropertiesSection from "@properties/components/properties-section";
import FiltersBar from "@/components/filters-bar";
import React, { Suspense } from "react";

const PropertiesPage = () => {
  return (
    <>
      <Suspense fallback={<FiltersBarLoading />}>
        <FiltersBar />
      </Suspense>

      <Suspense>
        <PropertiesSection />
      </Suspense>
    </>
  );
};

export default PropertiesPage;
