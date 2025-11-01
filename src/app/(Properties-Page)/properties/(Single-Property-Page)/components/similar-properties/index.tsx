import React from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SimilarProperties = () => {
  return (
    <section className="px-4 py-6">
      <div className="container m-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <h4 className="text-lg md:text-2xl font-semibold">
            خانه هایی با ارزش مشابه
          </h4>

          <Button variant="ghost">
            مشاهده همه
            <ArrowLeft className="size-4.5" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {[...Array(4)].map((_, index) => (
            <PropertyCard
              title="{property.title}"
              key={index}
              rentAmount={0}
              location="{property.location.faName}"
              mortgageAmount={0}
              propertyType="{property.propertyCategory.faTitle}"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProperties;
