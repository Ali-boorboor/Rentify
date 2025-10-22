import FiltersBar from "@propertyComparison/components/FiltersBar";
import Table from "@propertyComparison/components/Table";
import React from "react";

const PropertyComparisonPage = () => {
  return (
    <section className="px-4">
      <div className="container m-auto space-y-6">
        <FiltersBar />

        <Table />
      </div>
    </section>
  );
};

export default PropertyComparisonPage;
