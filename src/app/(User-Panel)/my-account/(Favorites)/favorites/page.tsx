import PropertiesGrid from "@/components/ui/PropertiesGrid";
import React from "react";

const FavoritesPage = () => {
  return (
    <section className="flex flex-col gap-6 grow">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        آگهی‌های ذخیره شده
      </h2>

      <PropertiesGrid className="bg-card border shadow-sm p-6 rounded-xl" />
    </section>
  );
};

export default FavoritesPage;
