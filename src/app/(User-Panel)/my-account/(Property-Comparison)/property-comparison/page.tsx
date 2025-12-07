import PropertyComparisonLoading from "@userPanel/propertyComparison/components/PropertyComparisonLoading";
import Form from "@userPanel/propertyComparison/components/form";
import React, { Suspense } from "react";

const PropertyComparisonPage = () => {
  return (
    <section className="w-full space-y-6">
      <div className="text-center md:text-right space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold">
          مقایسه املاک ذخیره شده
        </h2>

        <p className="text-sm md:text-base text-muted-foreground font-normal">
          (حداقل ۲ کارت و حداکثر ۳ کارت را برای مقایسه انتخاب کنید)
        </p>
      </div>

      <Suspense fallback={<PropertyComparisonLoading />}>
        <Form />
      </Suspense>
    </section>
  );
};

export default PropertyComparisonPage;
