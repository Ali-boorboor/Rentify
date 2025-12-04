import React from "react";
import connectToDB from "@configs/database";
import PropertyModel from "@models/Property";
import Table from "@propertyComparison/components/Table";
import FiltersBar from "@propertyComparison/components/FiltersBar";
import { redirect, RedirectType } from "next/navigation";
import { isValidObjectId } from "mongoose";
import { parseJson } from "@/utils/json";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyComparisonPageProps {
  searchParams: Promise<{ [key: string]: string[] | undefined }>;
}

const PropertyComparisonPage = async ({
  searchParams,
}: PropertyComparisonPageProps) => {
  const { properties } = await searchParams;

  const normalizeSearchParamsToArray = Array.isArray(properties)
    ? properties
    : properties
    ? [properties]
    : [];

  const isSearchParamInvalid =
    normalizeSearchParamsToArray.length < 2 ||
    normalizeSearchParamsToArray.length > 3;

  const isObjectIdInvalid = normalizeSearchParamsToArray?.some(
    (propertyID) => !isValidObjectId(propertyID)
  );

  if (isSearchParamInvalid || isObjectIdInvalid) {
    redirect("/property-comparison/search", RedirectType.replace);
  }

  connectToDB();

  const selectedProperties = await PropertyModel.find({
    _id: { $in: normalizeSearchParamsToArray },
  })
    .populate({
      path: "propertyDetails",
      populate: [{ path: "propertyCategory" }, { path: "contractType" }],
    })
    .populate({
      path: "address",
      populate: { path: "province" },
    })
    .lean();

  return (
    <section className="px-4">
      <div className="container m-auto space-y-6">
        <FiltersBar />

        <div className="text-muted-foreground text-sm md:text-base space-y-2 flex items-baseline gap-2">
          <p>
            توسط دکمه فیلتر در نوار بالا فیلتر های مد نظر خود را جهت مقایسه
            انتخاب کنید.
          </p>
        </div>

        <Table selectedProperties={parseJson(selectedProperties)} />
      </div>
    </section>
  );
};

export default PropertyComparisonPage;
