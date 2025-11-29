import React from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import EmptyPropertiesAlert from "@/components/empty-properties-alert";
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
              linkTo={`/properties/12`}
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

        <EmptyPropertiesAlert
          description="از طریق آیکون «نشان‌کردن» می‌تونید آگهی‌های مورد نظرتون رو در این لیست ذخیره کنید."
          image="/images/png/user-panel/empty-favorites.png"
          title="شما هنوز آگهی‌ای رو ذخیره نکردید!"
          linkTo=""
        />
      </div>
    </section>
  );
};

export default FavoritesPage;
