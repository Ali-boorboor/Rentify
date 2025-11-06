import SuccessDialog from "@propertyImagesRegistration/components/SuccessDialog";
import QueryProvider from "@/components/providers/QueryProvider";
import Form from "@propertyImagesRegistration/components/form";
import React from "react";

const PropertyImagesPage = () => {
  return (
    <section className="flex-1 bg-card border shadow-sm rounded-xl p-4 flex flex-col gap-6">
      <h4 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        عکس‌‌های ملک خود را بارگذاری کنید
      </h4>

      <QueryProvider>
        <Form />
      </QueryProvider>

      <SuccessDialog />
    </section>
  );
};

export default PropertyImagesPage;
