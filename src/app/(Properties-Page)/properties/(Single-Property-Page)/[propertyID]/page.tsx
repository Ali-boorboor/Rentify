import SimilarProperties from "@singleProperty/components/similar-properties";
import PropertyDetails from "@singleProperty/components/property-details";
import Slider from "@singleProperty/components/slider";
import React from "react";

const SinglePropertyPage = () => {
  return (
    <>
      <section className="bg-card px-4 py-6 border shadow-sm">
        <div className="container m-auto space-y-6">
          <Slider />

          <PropertyDetails />
        </div>
      </section>

      <SimilarProperties />
    </>
  );
};

export default SinglePropertyPage;
