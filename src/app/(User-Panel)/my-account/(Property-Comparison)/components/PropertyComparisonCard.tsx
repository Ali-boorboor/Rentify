import React from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const PropertyComparisonCard = () => {
  return (
    <Label
      className={cn(
        "rounded-xl border shadow-sm relative hover:opacity-80",
        "has-[[aria-checked=true]]:ring-2 has-[[aria-checked=true]]:ring-primary",
        "transition-all duration-200 ease-linear",
        "cursor-pointer"
      )}
      htmlFor="property-checkbox"
    >
      <PropertyCard
        className="border-0 shadow-none w-full h-full pointer-events-none"
        title="۷۰ متری‌۲‌خوابه - تهران محمدیه"
        mortgageAmount={4_000_000_000}
        rentAmount={50_000_000}
        location="تهران-الهیه"
        isFavourable={false}
        type="apartment"
      />

      <Checkbox
        className={cn(
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "absolute top-3 right-3 rounded-full size-8 [&_svg]:size-5 bg-card border shadow-sm"
        )}
        id="property-checkbox"
      />
    </Label>
  );
};

export default PropertyComparisonCard;
