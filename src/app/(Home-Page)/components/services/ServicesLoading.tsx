import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ServicesLoading = () => {
  return (
    <div className="flex flex-wrap justify-between gap-6">
      {[...Array(3).fill(0)].map((_, index) => (
        <Skeleton
          className="grow w-60 border-0 lg:nth-[2]:scale-y-105 h-124"
          key={index + 1}
        />
      ))}
    </div>
  );
};

export default ServicesLoading;
