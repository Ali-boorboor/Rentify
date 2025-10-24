import PropertyComparisonCard from "@/components/ui/PropertyComparisonCard";
import FiltersBar from "@/components/filters-bar";
import SortBar from "@/components/sort-bar";
import React from "react";
import { Button } from "@/components/ui/button";

const PropertyComparisonSearchPage = () => {
  return (
    <>
      <FiltersBar />

      <section className="flex flex-col gap-6 mt-10 md:mt-20">
        <div className="text-center sm:text-right space-y-2 container m-auto px-4 sm:px-0">
          <h1 className="text-2xl md:text-4xl font-bold">مقایسه املاک</h1>

          <p className="text-sm md:text-base text-muted-foreground font-normal">
            (حداقل ۲ کارت و حداکثر ۳ کارت را برای مقایسه انتخاب کنید)
          </p>
        </div>

        <div className="container m-auto px-4 sm:px-0">
          <SortBar />
        </div>

        <form className="flex flex-col gap-6">
          <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 container m-auto px-4 sm:px-0">
            {[...Array(8)].map((_, index) => (
              <PropertyComparisonCard key={index} />
            ))}
          </div>

          <div className="p-4 sticky bottom-0 bg-card border shadow-sm z-40">
            <div className="flex flex-wrap-reverse justify-center items-center gap-6 container m-auto">
              <Button className="flex-1" variant="outline" type="button">
                بازگشت به صفحه مقایسه املاک
              </Button>

              <Button className="flex-1" type="submit">
                تأیید
              </Button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default PropertyComparisonSearchPage;
