import React from "react";
import { IEquipmentAndFacilitie } from "@models/EquipmentAndFacilitie";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface EquipmentDetailsProps {
  equipments: IEquipmentAndFacilitie[];
}

const EquipmentDetails = ({ equipments }: EquipmentDetailsProps) => {
  return (
    <>
      <div
        className="space-y-6 scroll-mt-40 md:scroll-mt-96"
        id="equipment-details"
      >
        <h3
          className={cn(
            "relative w-max font-semibold text-lg md:text-xl",
            "after:absolute after:-bottom-1 after:left-0 after:right-0 after:bg-primary after:h-0.5 after:rounded-md"
          )}
        >
          تجهیزات و امکانات
        </h3>

        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {equipments.map((equipment) => (
            <div
              className="flex items-center gap-2 [svg]:size-4.5 w-full"
              key={equipment._id as string}
            >
              <p className="md:text-lg">{equipment.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator />
    </>
  );
};

export default EquipmentDetails;
