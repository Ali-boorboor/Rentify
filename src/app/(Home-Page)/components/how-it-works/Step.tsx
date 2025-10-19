import React from "react";
import { toPersianDigits } from "@/utils/convertNumbers";

interface StepProps {
  icon: React.ReactNode;
  stepNumber: number;
  title: string;
  description: string;
}

const Step = ({ icon, stepNumber, title, description }: StepProps) => {
  const persianStepNumber = toPersianDigits(String(stepNumber));

  return (
    <div className="flex flex-col items-center max-w-40 w-full">
      <div className="relative bg-accent text-accent-foreground rounded-full w-16 h-16 md:w-20 md:h-20 flex justify-center items-center [&_svg]:size-6 md:[&_svg]:size-8">
        {icon}

        <span className="absolute top-0 left-0 bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex justify-center items-center border text-sm">
          {persianStepNumber}
        </span>
      </div>

      <div className="text-center">
        <h5 className="text-lg font-medium">{title}</h5>

        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Step;
