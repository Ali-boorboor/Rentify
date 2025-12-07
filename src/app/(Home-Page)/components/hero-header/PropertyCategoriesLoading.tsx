import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PropertyCategoriesLoading = () => {
  return (
    <div className="container m-auto flex flex-wrap gap-6 items-center justify-center md:justify-between lg:translate-y-[30%]">
      {[...Array(3).fill(0)].map((_, index) => (
        <Skeleton
          className="grow w-60 max-h-80 lg:max-h-max aspect-square"
          key={index + 1}
        />
      ))}
    </div>
  );
};

export default PropertyCategoriesLoading;
