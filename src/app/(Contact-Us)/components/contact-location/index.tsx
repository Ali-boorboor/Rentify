"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const Map = dynamic(
  () => import("@contactUs/components/contact-location/Map"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-96" />,
  }
);

const ContactLocation = () => {
  return (
    <section className="px-4">
      <div className="container m-auto h-96 rounded-xl border shadow-sm overflow-hidden">
        <Map />
      </div>
    </section>
  );
};

export default ContactLocation;
