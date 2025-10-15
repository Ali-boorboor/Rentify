import PropertyCard from "@/components/PropertyCard";
import React from "react";

const PropertiesGrid = () => {
  return (
    <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {[...Array(8)].map((_, index) => (
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
