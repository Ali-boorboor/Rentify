"use client";

import dynamic from "next/dynamic";
import React from "react";

const Map = dynamic(() => import("@contactUsPage/components/Map"), {
  ssr: false,
});

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
