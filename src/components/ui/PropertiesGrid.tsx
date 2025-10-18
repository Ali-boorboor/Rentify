import PropertyCard from "@/components/ui/PropertyCard";
import React from "react";

interface PropertiesGridProps {
  properties?: Array<object>;
}

const PropertiesGrid = ({
  properties = [...Array(8)],
}: PropertiesGridProps) => {
  return (
    <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
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
