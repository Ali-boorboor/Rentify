import React, { Suspense } from "react";
import Table from "@propertyComparison/components/table";
import FiltersBar from "@propertyComparison/components/FiltersBar";
import TableLoading from "@propertyComparison/components/table/TableLoading";
import { redirect, RedirectType } from "next/navigation";
import { isValidObjectId } from "mongoose";

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

        <Suspense fallback={<TableLoading />}>
          <Table searchParamProperties={normalizeSearchParamsToArray} />
        </Suspense>
      </div>
    </section>
  );
};

export default PropertyComparisonPage;
