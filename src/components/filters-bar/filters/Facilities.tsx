import React from "react";
import * as accordion from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const equipmentsAndFacilities = [
  { id: 1, title: "آسانسور" },
  { id: 2, title: "کاغذ دیواری" },
  { id: 3, title: "چیلر" },
  { id: 4, title: "پارکینگ" },
  { id: 5, title: "گاز رو میزی" },
  { id: 6, title: "کولر آبی" },
  { id: 7, title: "انباری" },
  { id: 8, title: "هود" },
  { id: 9, title: "بخاری" },
  { id: 10, title: "کمد دیواری" },
  { id: 11, title: "حمام مستر" },
  { id: 12, title: "پکیج" },
  { id: 13, title: "نقاشی" },
  { id: 14, title: "استخر" },
  { id: 15, title: "رادیاتور" },
  { id: 16, title: "تراس" },
  { id: 17, title: "سونا" },
  { id: 18, title: "آبگرم کن" },
  { id: 19, title: "درب ضد سرقت" },
  { id: 20, title: "جکوزی" },
  { id: 21, title: "کولر گازی" },
  { id: 22, title: "آیفون تصویری" },
  { id: 23, title: "لابی" },
  { id: 24, title: "شوفاژ" },
  { id: 25, title: "دوربین مدار بسته" },
  { id: 26, title: "روف گاردن" },
  { id: 27, title: "گرمایش از کف" },
  { id: 28, title: "سرویس فرنگی" },
  { id: 29, title: "سالن ورزش" },
  { id: 30, title: "هواساز" },
];

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
              {equipment.title}
            </p>
          </Label>
        ))}
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default Facilities;
