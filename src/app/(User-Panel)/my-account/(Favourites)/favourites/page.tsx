import PropertyCardsLoading from "@userPanel/favourites/components/PropertyCardsLoading";
import PropertyCards from "@userPanel/favourites/components/PropertyCards";
import React, { Suspense } from "react";

const FavouritesPage = () => {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        آگهی‌های ذخیره شده
      </h2>

      <div className="bg-card text-card-foreground border shadow-sm rounded-xl p-4">
        <Suspense fallback={<PropertyCardsLoading />}>
          <PropertyCards />
        </Suspense>
      </div>
    </section>
  );
};

export default FavouritesPage;
