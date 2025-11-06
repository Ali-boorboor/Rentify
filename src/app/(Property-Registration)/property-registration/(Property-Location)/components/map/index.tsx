"use client";

import React from "react";
import dynamic from "next/dynamic";
import useFormsState from "@propertyRegistration/stores/useFormsState";
import { useLocationStore } from "@propertyLocationRegistration/stores/locationState";
import { Button } from "@/components/ui/button";
import { MapPinned } from "lucide-react";
import { toast } from "sonner";

const MapComponent = dynamic(
  () => import("@propertyLocationRegistration/components/map/Map"),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-muted animate-pulse rounded-xl" />,
  }
);

const Map = () => {
  const { setPropertyLocationCoordinates } = useFormsState();
  const { locationCoordinates } = useLocationStore();

  const handleClick = () => {
    setPropertyLocationCoordinates(locationCoordinates);

    toast.success("موقعیت شما با موفقیت ثبت شد");
  };

  return (
    <div className="space-y-6">
      <MapComponent />

      <Button className="w-full" onClick={handleClick}>
        ثبت روی نقشه
        <MapPinned className="size-4.5" />
      </Button>
    </div>
  );
};

export default Map;
