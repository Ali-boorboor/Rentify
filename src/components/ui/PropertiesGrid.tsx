import React from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import { cn } from "@/lib/utils";

interface PropertiesGridProps {
  properties?: Array<object>;
  className?: string;
}

const PropertiesGrid = ({
  properties = [...Array(8)],
  className,
}: PropertiesGridProps) => {
  return (
    <div
      className={cn(
        "grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6",
        className
      )}
    >
      {properties.map((_, index) => (
        <PropertyCard
          key={index}
          title="۷۰ متری‌۲‌خوابه - تهران محمدیه"
          mortgageAmount={4_000_000_000}
          rentAmount={50_000_000}
          location="تهران-الهیه"
          type="apartment"
        />
      ))}
    </div>
  );
};

export default PropertiesGrid;
