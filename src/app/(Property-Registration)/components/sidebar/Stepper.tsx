"use client";

import React from "react";
import steps from "@propertyRegistration/constants/sidebarDatas";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ACTIVE_STEP_STYLE = cn(
  "text-secondary-foreground",
  "[&_span]:bg-card [&_span]:text-card-foreground"
);

const Stepper = () => {
  const pathname = usePathname();

  return (
    <>
      {steps.map((step) => (
        <React.Fragment key={step.id}>
          <Link
            href={step.href}
            className={cn(
              "flex items-center gap-6 font-medium text-sm md:text-base",
              pathname.includes(step.href)
                ? ACTIVE_STEP_STYLE
                : "text-muted-foreground [&_span]:bg-transparent"
            )}
          >
            <h3 className="text-nowrap">{step.title}</h3>

            <span className="border rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center items-center">
              {step.stepNumber}
            </span>
          </Link>

          <Separator className="shrink mx-auto bg-muted-foreground last:hidden !h-px !w-full md:!h-full md:!w-px md:min-h-6" />
        </React.Fragment>
      ))}
    </>
  );
};

export default Stepper;
