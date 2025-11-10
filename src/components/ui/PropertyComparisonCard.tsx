import React from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { IProperty } from "@models/Property";
import { useField } from "formik";
import { cn } from "@/lib/utils";

interface PropertyComparisonCardProps {
  property: IProperty;
}

const PropertyComparisonCard = ({ property }: PropertyComparisonCardProps) => {
  const [field, _, helpers] = useField("selectedProperties");

  const onCheckedChange = (checked: CheckedState) => {
    if (checked && !field.value.includes(property._id)) {
      helpers.setValue([...field.value, property._id]);
    } else {
      helpers.setValue(
        field.value.filter((value: string) => value !== property._id)
      );
    }
  };

  return (
    <Label
      className={cn(
        "rounded-xl border shadow-sm relative hover:opacity-80",
        "has-[[aria-checked=true]]:ring-2 has-[[aria-checked=true]]:ring-primary",
        "transition-all duration-200 ease-linear",
        "cursor-pointer"
      )}
      htmlFor={property._id as string}
    >
      <PropertyCard
        className="border-0 shadow-none pointer-events-none grow"
        propertyCategory={property.propertyDetails.propertyCategory}
        province={property.address.province.faName}
        mortgageAmount={property.mortgageAmount}
        rentAmount={property.rentAmount}
        key={property._id as string}
        title={property.title}
        isFavourable={false}
      />
      <Checkbox
        className={cn(
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "absolute top-3 right-3 rounded-full size-8 [&_svg]:size-5 bg-card border shadow-sm"
        )}
        checked={(field.value as string[]).includes(property._id as string)}
        onCheckedChange={(checked) => onCheckedChange(checked)}
        id={property._id as string}
      />
    </Label>
  );
};

export default PropertyComparisonCard;
