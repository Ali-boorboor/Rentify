import SimilarProperties from "@singlePropertyPage/components/similar-properties";
import PropertyDetails from "@singlePropertyPage/components/property-details";
import Slider from "@singlePropertyPage/components/slider";
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
