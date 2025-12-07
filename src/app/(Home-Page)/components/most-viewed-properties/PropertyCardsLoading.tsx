import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PropertyCardsLoading = () => {
  return (
    <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {[...Array(4).fill(0)].map((_, index) => (
        <Skeleton className="h-96 sm:h-[28rem]" key={index + 1} />
      ))}
    </div>
  );
};

export default PropertyCardsLoading;
