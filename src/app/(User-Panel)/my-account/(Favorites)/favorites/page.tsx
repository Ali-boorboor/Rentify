import EmptyFavoritesAlert from "@userPanel/favorites/components/EmptyFavoritesAlert";
import PropertiesGrid from "@/components/ui/PropertiesGrid";
import React from "react";

const FavoritesPage = () => {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        آگهی‌های ذخیره شده
      </h2>

      <div className="bg-card text-card-foreground border shadow-sm rounded-xl p-6">
        <PropertiesGrid />

        <EmptyFavoritesAlert />
      </div>
    </section>
  );
};

export default FavoritesPage;
