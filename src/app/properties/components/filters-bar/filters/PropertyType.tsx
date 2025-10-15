import React from "react";
import propertyTypes from "@/constants/propertyDatas";
import * as accordion from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const PropertyType = () => {
  return (
    <accordion.AccordionItem value="property-type">
      <accordion.AccordionTrigger>نوع ملک</accordion.AccordionTrigger>

      <accordion.AccordionContent className="space-y-4">
        {propertyTypes.map((propertyType) => (
          <Label
            className={cn(
              "flex items-center gap-3 rounded-xl border shadow-sm p-3 text-foreground hover:bg-primary/10 hover:border-primary/30",
              "has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/50"
            )}
            key={propertyType.id}
          >
            <Checkbox className="data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />

            <p className="font-medium text-sm leading-none">
              {propertyType.faTitle}
            </p>
          </Label>
        ))}
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default PropertyType;
