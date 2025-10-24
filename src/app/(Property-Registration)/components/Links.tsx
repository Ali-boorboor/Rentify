import React from "react";
import Link from "next/link";
import steps from "@propertyRegistration/constants/sidebarDatas";
import { Button } from "@/components/ui/button";

const Links = () => {
  return (
    <div className="grow flex flex-wrap gap-6">
      {steps.map((step) => (
        <Button
          className="h-auto aspect-auto rounded-xl flex-1 text-card-foreground text-sm md:text-base font-medium"
          variant="outline"
          key={step.id}
          asChild
        >
          <Link href={step.href}>
            <span>{step.stepNumber} - </span>

            <span>{step.title}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Links;
