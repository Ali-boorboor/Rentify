import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PropertyComparisonLoading = () => {
  return (
    <div className="bg-card border shadow-sm rounded-xl space-y-6 p-4">
      <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {[...Array(3).fill(0)].map((_, index) => (
          <Skeleton className="h-96 sm:h-[28rem]" key={index + 1} />
        ))}
      </div>

      <div className="flex flex-wrap-reverse justify-center items-center gap-6 p-4 sticky bottom-0 bg-card border shadow-sm rounded-xl z-40">
        <Skeleton className="flex-1 h-10 px-3 py-2 has-[>svg]:px-3" />

        <Skeleton className="flex-1 h-10 px-3 py-2 has-[>svg]:px-3" />
      </div>
    </div>
  );
};

export default PropertyComparisonLoading;
