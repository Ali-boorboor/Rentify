import React from "react";
import * as accordion from "@/components/ui/accordion";
import { IEquipmentAndFacilitie } from "@models/EquipmentAndFacilitie";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useField } from "formik";
import { cn } from "@/lib/utils";

interface FacilitiesProps {
  equipments: IEquipmentAndFacilitie[];
}

const Facilities = ({ equipments }: FacilitiesProps) => {
  const [field, _, helpers] = useField("facilities");

  const onCheckedChange = (
    checked: CheckedState,
    equipment: { value: string }
  ) => {
    if (checked && !field.value.includes(equipment.value)) {
      helpers.setValue([...field.value, equipment.value]);
    } else {
      helpers.setValue(
        field.value.filter((value: string) => value !== equipment.value)
      );
    }
  };

  return (
    <accordion.AccordionItem value="facilities">
      <accordion.AccordionTrigger>امکانات</accordion.AccordionTrigger>

      <accordion.AccordionContent className="flex flex-wrap gap-4 px-2">
        {equipments.map((equipment) => (
          <Label
            className={cn(
              "grow flex items-center gap-3 rounded-xl border shadow-sm p-3 text-foreground hover:bg-primary/10 hover:border-primary/30",
              "has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/50",
              "transition-all duration-200 ease-linear"
            )}
            key={equipment._id as string}
            htmlFor={equipment.value}
          >
            <Checkbox
              className="data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              onCheckedChange={(checked) => onCheckedChange(checked, equipment)}
              checked={(field.value as string[]).includes(equipment.value)}
              id={equipment.value}
            />
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
