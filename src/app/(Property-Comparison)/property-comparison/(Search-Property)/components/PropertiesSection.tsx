"use client";

import React from "react";
import SortBar from "@/components/sort-bar";
import Form from "@comparisonSearch/components/Form";
import useGetPropertiesRequest from "@/hook/useGetPropertiesRequest";
import EmptyPropertiesAlert from "@/components/empty-properties-alert";

const PropertiesSection = () => {
  const { fetchNextPage, data, isPending, isFetchingNextPage, hasNextPage } =
    useGetPropertiesRequest();

  const allProperties = data?.pages.flatMap((page) => page.data.properties);

  return (
    <div className="flex flex-col gap-6 mt-10 md:mt-20">
      {isPending || allProperties?.length ? (
        <>
          <div className="text-center sm:text-right space-y-2 container m-auto px-4 sm:px-0">
            <h1 className="text-2xl md:text-4xl font-bold">مقایسه املاک</h1>

            <p className="text-sm md:text-base text-muted-foreground font-normal">
              (حداقل ۲ کارت و حداکثر ۳ کارت را برای مقایسه انتخاب کنید)
            </p>
          </div>

          <div className="container m-auto px-4 sm:px-0">
            <SortBar />
          </div>

          <Form
            isFetchingNextPage={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
            allProperties={allProperties}
            hasNextPage={hasNextPage}
            isPending={isPending}
          />
        </>
      ) : (
        <EmptyPropertiesAlert linkTo="/property-comparison/search" />
      )}
    </div>
  );
};

export default PropertiesSection;
