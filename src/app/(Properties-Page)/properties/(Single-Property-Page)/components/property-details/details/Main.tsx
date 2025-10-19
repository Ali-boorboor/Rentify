import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const mainDetails = [
  { id: 1, label: "مساحت زیر بنا", value: "۱۳۰ متر" },
  { id: 2, label: "مساحت زمین", value: "۴۰۰ متر" },
  { id: 3, label: "طبقات", value: "۱۴" },
  { id: 4, label: "خواب", value: "۲ خوابه" },
  { id: 5, label: "سرویس بهداشتی", value: "۳ عدد" },
  { id: 6, label: "طبقه", value: "۱۲" },
  { id: 7, label: "هر طبقه", value: "۱" },
];

const MainDetails = () => {
  return (
    <>
      <div className="space-y-6 scroll-mt-40 md:scroll-mt-96" id="main-details">
        <h3
          className={cn(
            "relative w-max font-semibold text-lg md:text-xl",
            "after:absolute after:-bottom-1 after:left-0 after:right-0 after:bg-primary after:h-0.5 after:rounded-md"
          )}
        >
          اطلاعات اصلی
        </h3>

        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {mainDetails.map((detail) => (
            <p className="md:text-lg" key={detail.id}>
              {detail.label}:
              <span className="font-medium"> {detail.value}</span>
            </p>
          ))}
        </div>
      </div>

      <Separator />
    </>
  );
};

export default MainDetails;
