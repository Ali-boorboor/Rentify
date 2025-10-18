import React from "react";
import * as Icon from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const equipmentDetails = [
  { id: 1, label: "باشگاه", icon: <Icon.Dumbbell /> },
  { id: 2, label: "فضای سبز", icon: <Icon.TreePine /> },
  { id: 3, label: "استخر سرپوشیده", icon: <Icon.Waves /> },
  { id: 4, label: "برق اضطراری", icon: <Icon.Zap /> },
  { id: 5, label: "زمین بازی", icon: <Icon.Volleyball /> },
  { id: 6, label: "سونا و جکوزی", icon: <Icon.Waves /> },
  { id: 7, label: "روف گاردن", icon: <Icon.Sprout /> },
];

const EquipmentDetails = () => {
  return (
    <>
      <div className="space-y-6 scroll-mt-40 md:scroll-mt-96" id="equipment-details">
        <h3
          className={cn(
            "relative w-max font-semibold text-lg md:text-xl",
            "after:absolute after:-bottom-1 after:left-0 after:right-0 after:bg-primary after:h-0.5 after:rounded-md"
          )}
        >
          تجهیزات و امکانات
        </h3>

        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {equipmentDetails.map((detail) => (
            <div
              className="flex items-center gap-2 [svg]:size-4.5 w-full"
              key={detail.id}
            >
              {detail.icon}
              <p className="md:text-lg">{detail.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator />
    </>
  );
};

export default EquipmentDetails;
