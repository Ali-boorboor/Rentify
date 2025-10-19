import SimilarProperties from "@singleProperty/components/similar-properties";
import PropertyDetails from "@singleProperty/components/property-details";
import Slider from "@singleProperty/components/slider";
import React from "react";

const SinglePropertyPage = () => {
  return (
    <>
      <section className="bg-card px-4 py-10 border shadow-sm">
        <div className="container m-auto space-y-4 md:space-y-8">
          <Slider />

          <PropertyDetails />
        </div>
      </section>

      <SimilarProperties />
    </>
  );
};

export default SinglePropertyPage;
