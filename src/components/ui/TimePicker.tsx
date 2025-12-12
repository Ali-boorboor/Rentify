"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

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

interface TimePickerProps {
  setFieldValue: (field: string, value: string) => void;
  values: { time: string };
}

const TimePicker = ({ values, setFieldValue }: TimePickerProps) => {
  const onCheckedChange = (checked: CheckedState, selectedTime: string) => {
    if (checked) setFieldValue("time", selectedTime);
  };

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
            <Checkbox
              onCheckedChange={(checked) => {
                onCheckedChange(checked, hour.time);
              }}
              checked={values.time === hour.time}
              className="sr-only"
            />

            <p className="font-medium text-sm leading-none">{hour.time}</p>
          </Label>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
