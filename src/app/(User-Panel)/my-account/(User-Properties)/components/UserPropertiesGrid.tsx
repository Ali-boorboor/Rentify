"use client";

import PropertyCard from "@/components/ui/PropertyCard";
import { IPropertyCategory } from "@/models/PropertyCategory";
import React from "react";

const UserPropertiesGrid = () => {
  return (
    <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {[...Array(6)].map((_, index) => (
        <PropertyCard
          // image={property?.images?.[0]}
          linkTo={`/properties/12`}
          title="۷۰ متری‌۲‌خوابه - تهران محمدیه"
          mortgageAmount="4_000_000_000"
          removeButtonHandler={() => {}}
          propertyStatus="warning"
          rentAmount="50_000_000"
          province="تهران-الهیه"
          isFavourable={false}
          hasRemoveButton
          propertyCategory={
            { faTitle: "test", labelColor: "orange" } as IPropertyCategory
          }
        />
      ))}
    </div>
  );
};

export default UserPropertiesGrid;
