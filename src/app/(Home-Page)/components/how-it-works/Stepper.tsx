import React from "react";
import Step from "@homePage/components/how-it-works/Step";
import { CalendarDays, HandCoins, ScanEye, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    id: 1,
    title: "جستجو",
    description: "ملک مورد علاقه‌‌ی خود را پیدا کنید",
    stepNumber: 1,
    icon: <Search />,
  },
  {
    id: 2,
    title: "برنامه بازدید",
    description: "زمان خود را برای بازدید از ملکتان مشخص کنید",
    stepNumber: 2,
    icon: <CalendarDays />,
  },
  {
    id: 3,
    title: "بازدید از ملک",
    description: "ملک خود را در زمان مشخص کرده بازدید کنید",
    stepNumber: 3,
    icon: <ScanEye />,
  },
  {
    id: 4,
    title: "نهایی کردن معامله",
    description: "به کمک مشاورین املاک ما معامله‌ی خود را نهایی کنید",
    stepNumber: 4,
    icon: <HandCoins />,
  },
];

const Stepper = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-start justify-center md:justify-between gap-6">
      {steps.map((step) => (
        <React.Fragment key={step.id}>
          <Step
            description={step.description}
            stepNumber={step.stepNumber}
            title={step.title}
            icon={step.icon}
          />

          <Separator className="shrink m-auto last:hidden" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
