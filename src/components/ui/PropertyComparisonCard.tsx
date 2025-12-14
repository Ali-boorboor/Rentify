import React from "react";
import PropertyCard from "@/components/property-card";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { IProperty } from "@models/Property";
import { parseJson } from "@/utils/json";
import { useField } from "formik";
import { cn } from "@/lib/utils";

interface PropertyComparisonCardProps {
  property: IProperty;
  className?: string;
  children?: React.ReactNode;
}

const PropertyComparisonCard = ({
  property,
  children,
  className,
}: PropertyComparisonCardProps) => {
  const [field, _, helpers] = useField("properties");

  const onCheckedChange = (checked: CheckedState) => {
    let updated = [...field.value];

    if (checked) {
      if (!updated.includes(property._id)) {
        updated.push(property._id);
      }

      if (updated.length > 3) {
        updated = updated.slice(1);
      }
    } else {
      updated = updated.filter((v) => v !== property._id);
    }

    helpers.setValue(updated);
  };

  return (
    <Label
      className={cn(
        "rounded-xl border shadow-sm relative hover:opacity-80",
        "has-[[aria-checked=true]]:ring-2 has-[[aria-checked=true]]:ring-primary",
        "transition-all duration-200 ease-linear",
        "cursor-pointer",
        className
      )}
      htmlFor={property._id as string}
    >
      <PropertyCard
        className="border-0 shadow-none pointer-events-none grow"
        propertyCategory={parseJson(property.propertyDetails.propertyCategory)}
        province={property.address.province.faName}
        mortgageAmount={property.mortgageAmount}
        linkTo={`/properties/${property._id}`}
        propertyID={String(property._id)}
        rentAmount={property.rentAmount}
        image={property?.images?.[0]}
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

      {children}
    </Label>
  );
};

export default PropertyComparisonCard;
