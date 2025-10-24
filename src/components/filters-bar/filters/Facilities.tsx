import React from "react";
import * as accordion from "@/components/ui/accordion";
import equipmentsAndFacilities from "@/constants/propertyEquipmentsDatas";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Facilities = () => {
  return (
    <accordion.AccordionItem value="facilities">
      <accordion.AccordionTrigger>امکانات</accordion.AccordionTrigger>

      <accordion.AccordionContent className="flex flex-wrap gap-4 px-2">
        {equipmentsAndFacilities.map((equipment) => (
          <Label
            className={cn(
              "grow flex items-center gap-3 rounded-xl border shadow-sm p-3 text-foreground hover:bg-primary/10 hover:border-primary/30",
              "has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/50",
              "transition-all duration-200 ease-linear"
            )}
            key={equipment.id}
          >
            <Checkbox className="data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
            <p className="font-medium text-sm leading-none">
              {equipment.label}
            </p>
          </Label>
        ))}
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default Facilities;
