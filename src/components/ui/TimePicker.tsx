"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const visitingHours = [
  { id: 1, time: "۱۰:۰۰" },
  { id: 2, time: "۱۱:۰۰" },
  { id: 3, time: "۱۲:۰۰" },
  { id: 4, time: "۱۳:۰۰" },
  { id: 5, time: "۱۴:۰۰" },
  { id: 6, time: "۱۵:۰۰" },
  { id: 7, time: "۱۶:۰۰" },
  { id: 8, time: "۱۷:۰۰" },
  { id: 9, time: "۱۸:۰۰" },
  { id: 10, time: "۱۹۰۰" },
  { id: 11, time: "۲۰:۰۰" },
  { id: 12, time: "۲۱:۰۰" },
];

const TimePicker = () => {
  return (
    <div className="bg-accent text-accent-foreground border shadow-sm p-3 rounded-xl space-y-4">
      <p className="text-center md:text-right">
        ساعت بازدید خود را انتخاب کنید
      </p>

      <div className="flex flex-row-reverse flex-wrap gap-2">
        {visitingHours.map((hour) => (
          <Label
            className={cn(
              "grow w-32 justify-center rounded-xl border shadow-sm p-3 text-accent-foreground",
              "hover:bg-primary/10 has-[[aria-checked=true]]:bg-primary",
              "transition-all duration-200 ease-linear"
            )}
            key={hour.id}
          >
            <Checkbox className="sr-only" />

            <p className="font-medium text-sm leading-none">{hour.time}</p>
          </Label>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
