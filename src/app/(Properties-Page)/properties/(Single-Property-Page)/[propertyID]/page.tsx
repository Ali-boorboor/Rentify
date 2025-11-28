import React from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import Slider from "@singleProperty/components/slider";
import PropertyDetails from "@singleProperty/components/property-details";
import SimilarProperties from "@singleProperty/components/similar-properties";
import { redirect, RedirectType } from "next/navigation";
import { isValidObjectId } from "mongoose";

const SinglePropertyPage = async ({
  params,
}: {
  params: Promise<{ propertyID: string }>;
}) => {
  connectToDB();

  const { propertyID } = await params;

  if (!isValidObjectId(propertyID)) redirect("/", RedirectType.replace);

  const property = await PropertyModel.findById(propertyID)
    .populate("propertyDetails")
    .lean();

  return (
    <>
      <section className="bg-card px-4 py-6 border shadow-sm">
        <div className="container m-auto space-y-6">
          <Slider slidesImage={property?.images} />

          <PropertyDetails propertyID={property?._id as string} />
        </div>
      </section>

      <SimilarProperties
        propertyID={property?._id as string}
        propertyCategory={
          property?.propertyDetails.propertyCategory._id as string
        }
      />
    </>
  );
};

export default SinglePropertyPage;
