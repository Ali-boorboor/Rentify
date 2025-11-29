"use client";

import React from "react";
import SortBar from "@/components/sort-bar";
import PropertyCard from "@/components/ui/PropertyCard";
import useGetPropertiesRequest from "@/hook/useGetPropertiesRequest";
import EmptyPropertiesAlert from "@/components/empty-properties-alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const PropertiesSection = () => {
  const { fetchNextPage, data, isPending, isFetchingNextPage, hasNextPage } =
    useGetPropertiesRequest();

  const allProperties = data?.pages.flatMap((page) => page.data.properties);

  return (
    <section className="px-4">
      <div className="container m-auto flex flex-col gap-6">
        {isPending || allProperties?.length ? (
          <>
            <h1 className="text-2xl md:text-4xl font-bold text-center sm:text-right">
              رهن و اجاره آپارتمان
            </h1>

            <SortBar />

            <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
              {allProperties?.map((property) => (
                <PropertyCard
                  propertyCategory={property.propertyDetails.propertyCategory}
                  province={property.address.province.faName}
                  mortgageAmount={property.mortgageAmount}
                  linkTo={`/properties/${property._id}`}
                  rentAmount={property.rentAmount}
                  image={property?.images?.[0]}
                  key={property._id as string}
                  title={property.title}
                />
              ))}

              {(isPending || isFetchingNextPage) &&
                [...Array(8).fill(0)].map((_, index) => (
                  <Skeleton className="h-96 sm:h-[28rem]" key={index} />
                ))}
            </div>

            {hasNextPage && (
              <Button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="m-auto my-6"
              >
                نمایش آگهی‌های بیشتر
              </Button>
            )}
          </>
        ) : (
          <EmptyPropertiesAlert />
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;
