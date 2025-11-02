"use client";

import React from "react";
import * as inputGroup from "@/components/ui/input-group";
import { toEnglishDigits, toPersianDigits } from "@/utils/convertNumbers";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "formik";
import { cn } from "@/lib/utils";

interface LabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  separateDigitsWithComma?: boolean;
  containerClassName?: string;
  icon?: React.ReactNode;
  label: string;
  id: string;
}

const LabeledInput = ({
  separateDigitsWithComma,
  containerClassName,
  label,
  icon,
  id,
  ...props
}: LabeledInputProps) => {
  const hasIcon = icon;

  return (
    <div
      className={cn(
        "grid w-full flex-1 items-center gap-2",
        containerClassName
      )}
    >
      <Label htmlFor={id}>{label}</Label>

      <inputGroup.InputGroup>
        <inputGroup.InputGroupInput
          id={id}
          {...props}
          className={cn("placeholder:text-right", props.className)}
          onInput={(event) => {
            if (!separateDigitsWithComma) return;

            const englishDigits = toEnglishDigits(event.currentTarget.value);

            const cleaned = englishDigits.replace(/[^\d]/g, "");

            if (cleaned) {
              const formatted = Number(cleaned).toLocaleString("en-US");

              event.currentTarget.value = toPersianDigits(formatted);
            } else {
              event.currentTarget.value = "";
            }
          }}
          onChange={(event) => {
            event.target.value = toPersianDigits(event.target.value);

            props.onChange?.(event);
          }}
        />

        {hasIcon && (
          <inputGroup.InputGroupAddon className="pl-0 pr-2">
            {icon}
          </inputGroup.InputGroupAddon>
        )}
      </inputGroup.InputGroup>

      {props.name && (
        <ErrorMessage
          className="text-destructive text-sm font-medium"
          component="span"
          name={props.name}
        />
      )}
    </div>
  );
};

export default LabeledInput;
