import React from "react";
import Step from "@homePage/components/how-it-works/Step";
import { CalendarDays, HandCoins, ScanEye, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Stepper = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-start justify-center md:justify-between gap-6">
      <Step
        description="ملک مورد علاقه‌‌ی خود را پیدا کنید"
        icon={<Search />}
        stepCount={1}
        title="جستجو"
      />

      <Separator className="shrink m-auto" />

      <Step
        description="زمان خود را برای بازدید از ملکتان مشخص کنید"
        icon={<CalendarDays />}
        title="برنامه بازدید"
        stepCount={2}
      />

      <Separator className="shrink m-auto" />

      <Step
        description="ملک خود را در زمان مشخص کرده بازدید کنید"
        title="بازدید از ملک"
        icon={<ScanEye />}
        stepCount={3}
      />

      <Separator className="shrink m-auto" />

      <Step
        description="به کمک مشاورین املاک ما معامله‌ی خود را نهایی کنید"
        title="نهایی کردن معامله"
        icon={<HandCoins />}
        stepCount={4}
      />
    </div>
  );
};

export default Stepper;
