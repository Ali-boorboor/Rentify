"use client";

import React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Map = dynamic(
  () =>
    import(
      "@singlePropertyPage/components/property-details/details/location/Map"
    ),
  { ssr: false }
);

const LocationDetails = () => {
  return (
    <div
      className="space-y-6 scroll-mt-40 md:scroll-mt-96"
      id="location-details"
    >
      <h3
        className={cn(
          "relative w-max font-semibold text-lg md:text-xl",
          "after:absolute after:-bottom-1 after:left-0 after:right-0 after:bg-primary after:h-0.5 after:rounded-md"
        )}
      >
        موقعیت مکانی
      </h3>

      <div className="w-full h-96 overflow-hidden border shadow-sm rounded-xl">
        <Map />
      </div>
    </div>
  );
};

export default LocationDetails;
