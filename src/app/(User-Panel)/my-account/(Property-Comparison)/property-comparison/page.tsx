import React from "react";
import PropertyComparisonCard from "@userPanel/propertyComparison/components/PropertyComparisonCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const PropertyComparisonPage = () => {
  return (
    <section className="w-full space-y-6">
      <div className="text-center md:text-right">
        <h2 className="text-xl md:text-2xl font-semibold">مقایسه املاک</h2>

        <p className="text-sm md:text-base text-muted-foreground font-normal">
          (حداقل ۲ کارت و حداکثر ۳ کارت را برای مقایسه انتخاب کنید)
        </p>
      </div>

      <form className="bg-card border shadow-sm rounded-xl space-y-6 p-2">
        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-4">
          {[...Array(10)].map((_, index) => (
            <PropertyComparisonCard key={index} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 p-4 sticky bottom-0 bg-card border shadow-sm rounded-xl z-40">
          <Button className="flex-1" variant="outline" type="button">
            <Search />
            جستجو
          </Button>

          <Button className="flex-1" type="submit">
            تأیید
          </Button>
        </div>
      </form>
    </section>
  );
};

export default PropertyComparisonPage;
