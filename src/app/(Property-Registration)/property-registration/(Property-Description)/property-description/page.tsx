import Form from "@propertyDescriptionRegistration/components/form";
import React from "react";

const PropertyDescriptionPage = () => {
  return (
    <section className="flex-1 bg-card border shadow-sm rounded-xl p-4 flex flex-col gap-6">
      <h4 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        توضیحات تکمیلی
      </h4>

      <Form />
    </section>
  );
};

export default PropertyDescriptionPage;
