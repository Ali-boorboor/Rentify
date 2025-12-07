"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { LatLngExpression } from "leaflet";
import { cn } from "@/lib/utils";

const Map = dynamic(
  () =>
    import("@singleProperty/components/property-details/details/location/Map"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-96" />,
  }
);

interface LocationDetailsProps {
  province: string;
  sideStreet: string;
  mainStreet: string;
  fullAddress: string;
  locationCoordinates?: LatLngExpression;
}

const LocationDetails = ({
  province,
  sideStreet,
  mainStreet,
  fullAddress,
  locationCoordinates,
}: LocationDetailsProps) => {
  const details = [
    {
      id: 1,
      label: "شهر",
      value: province,
    },
    {
      id: 2,
      label: "خیابان فرعی یا کوچه",
      value: sideStreet,
    },
    {
      id: 3,
      label: "خیابان یا محله‌ی اصلی",
      value: mainStreet,
    },
    {
      id: 4,
      label: "آدرس دقیق و پلاک",
      value: fullAddress,
    },
  ];

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

      <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {details.map((detail) => (
          <p className="md:text-lg flex gap-1" key={detail.id}>
            <span className="flex gap-1">{detail.label}:</span>
            <span className="font-medium"> {detail.value}</span>
          </p>
        ))}
      </div>

      {locationCoordinates && (
        <div className="w-full h-96 overflow-hidden border shadow-sm rounded-xl">
          <Map position={locationCoordinates} />
        </div>
      )}
    </div>
  );
};

export default LocationDetails;
