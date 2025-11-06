import EmptyFavoritesAlert from "@userPanel/favorites/components/EmptyFavoritesAlert";
import PropertyCard from "@/components/ui/PropertyCard";
import React from "react";
import { IPropertyCategory } from "@/models/PropertyCategory";

const FavoritesPage = () => {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        آگهی‌های ذخیره شده
      </h2>

      <div className="bg-card text-card-foreground border shadow-sm rounded-xl p-4">
        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {[...Array(8)].map((_, index) => (
            <PropertyCard
              title="{property.title}"
              key={index}
              rentAmount="0"
              province="tehran"
              mortgageAmount="0"
              propertyCategory={
                { faTitle: "test", labelColor: "orange" } as IPropertyCategory
              }
            />
          ))}
        </div>

        <EmptyFavoritesAlert />
      </div>
    </section>
  );
};

export default FavoritesPage;
