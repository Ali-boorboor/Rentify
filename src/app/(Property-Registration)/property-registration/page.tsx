import Links from "@propertyRegistration/components/Links";
import React from "react";

const PropertyRegistrationPage = () => {
  return (
    <section className="flex-1 bg-card border shadow-sm rounded-xl p-4 flex flex-col gap-6">
      <h4 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        مراحل ثبت آگهی
      </h4>

      <Links />
    </section>
  );
};

export default PropertyRegistrationPage;
