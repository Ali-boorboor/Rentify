"use client";

import PropertyCard from "@/components/ui/PropertyCard";
import React from "react";

const UserPropertiesGrid = () => {
  return (
    <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {[...Array(6)].map((_, index) => (
        <PropertyCard
          title="۷۰ متری‌۲‌خوابه - تهران محمدیه"
          mortgageAmount={4_000_000_000}
          removeButtonHandler={() => {}}
          propertyStatus="warning"
          rentAmount={50_000_000}
          location="تهران-الهیه"
          isFavourable={false}
          type="apartment"
          hasRemoveButton
          key={index}
        />
      ))}
    </div>
  );
};

export default UserPropertiesGrid;
