import PropertiesSection from "@properties/components/properties-section";
import FiltersBar from "@/components/filters-bar";
import authenticate from "@/utils/authenticate";
import React from "react";

const PropertiesPage = async () => {
  const isUserLogin = await authenticate();

  return (
    <>
      <FiltersBar />

      <PropertiesSection isUserLogin={!!isUserLogin} />
    </>
  );
};

export default PropertiesPage;
