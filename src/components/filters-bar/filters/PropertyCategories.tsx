import React from "react";
import * as accordion from "@/components/ui/accordion";
import { IPropertyCategory } from "@models/PropertyCategory";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { useField } from "formik";

interface PropertyCategoriesProps {
  propertyCategories: IPropertyCategory[];
}

const PropertyCategories = ({
  propertyCategories,
}: PropertyCategoriesProps) => {
  const [field, _, helpers] = useField("property-category");

  return (
    <accordion.AccordionItem value="property-category">
      <accordion.AccordionTrigger>نوع ملک</accordion.AccordionTrigger>

      <accordion.AccordionContent className="space-y-4">
        {propertyCategories.map((propertyCategory) => (
          <Label
            className={cn(
              "flex items-center gap-3 rounded-xl border shadow-sm p-3 text-foreground hover:bg-primary/10 hover:border-primary/30",
              "has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/50",
              "transition-all duration-200 ease-linear"
            )}
            key={propertyCategory._id as string}
          >
            <Checkbox
              className="data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              onCheckedChange={() => helpers.setValue(propertyCategory.enTitle)}
              checked={field.value === propertyCategory.enTitle}
            />

            <p className="font-medium text-sm leading-none">
              {propertyCategory.faTitle}
            </p>
          </Label>
        ))}
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default PropertyCategories;
