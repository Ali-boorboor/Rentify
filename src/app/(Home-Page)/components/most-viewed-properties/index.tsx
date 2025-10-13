import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";

const MostViewedProperties = () => {
  return (
    <section className="container m-auto space-y-4 md:space-y-8">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between">
        <h3 className="text-lg md:text-2xl font-semibold">
          پر بازدید ترین‌های هفته‌ی گذشته
        </h3>

        <Button variant="ghost">
          مشاهده همه
          <ArrowLeft className="size-4.5" />
        </Button>
      </div>

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
    </section>
  );
};

export default MostViewedProperties;
