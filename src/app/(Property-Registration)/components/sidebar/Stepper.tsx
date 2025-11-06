"use client";

import React from "react";
import Link from "next/link";
import steps from "@propertyRegistration/constants/sidebarDatas";
import useFormsState from "@propertyRegistration/stores/useFormsState";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ACTIVE_STEP_STYLE = cn(
  "text-secondary-foreground",
  "[&_span]:bg-card [&_span]:text-card-foreground"
);

const COMPLETE_STEP_STYLE = "text-secondary-foreground [&_span]:bg-success";

const BASE_STYLE = "text-muted-foreground [&_span]:bg-transparent";

const Stepper = () => {
  const states = useFormsState();
  const pathname = usePathname();

  return (
    <>
      {steps.map((step) => {
        const stepState = states[step.stateName as keyof typeof states];

        const isStepComplete = !!stepState;
        const isActiveStep = pathname.includes(step.href);

        return (
          <React.Fragment key={step.id}>
            <Link
              href={step.href}
              className={cn(
                "flex items-center gap-6 font-medium text-sm md:text-base transition-colors",
                isActiveStep
                  ? ACTIVE_STEP_STYLE
                  : isStepComplete
                  ? COMPLETE_STEP_STYLE
                  : BASE_STYLE
              )}
            >
              <h3 className="text-nowrap">{step.title}</h3>

              <span className="border rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center items-center">
                {step.stepNumber}
              </span>
            </Link>

            <Separator className="shrink mx-auto bg-muted-foreground last:hidden !h-px !w-full md:!h-full md:!w-px md:min-h-6" />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Stepper;
