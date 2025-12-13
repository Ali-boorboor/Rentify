import React from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import Slider from "@singleProperty/components/slider";
import PropertyDetails from "@singleProperty/components/property-details";
import SimilarProperties from "@singleProperty/components/similar-properties";
import { notFound } from "next/navigation";
import { isValidObjectId } from "mongoose";

export const revalidate = 86400;
export const dynamicParams = true;

const SinglePropertyPage = async ({
  params,
}: {
  params: { propertyID: string };
}) => {
  await connectToDB();

  const { propertyID } = params;

  if (!isValidObjectId(propertyID)) return notFound();

  const property = await PropertyModel.findById(propertyID)
    .populate("propertyDetails")
    .lean();

  if (!property) return notFound();

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

export async function generateStaticParams() {
  await connectToDB();

  const properties = await PropertyModel.find({}, { _id: 1 }).limit(20).lean();

  return properties.map((property) => ({
    propertyID: property._id.toString(),
  }));
}

export default SinglePropertyPage;
