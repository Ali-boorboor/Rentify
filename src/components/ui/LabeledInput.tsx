"use client";

import React from "react";
import * as inputGroup from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "formik";
import { cn } from "@/lib/utils";
import {
  toCommaDigits,
  toEnglishDigits,
  toPersianDigits,
} from "@/utils/convertNumbers";

interface LabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  shouldSeparateDigitsWithComma?: boolean;
  containerClassName?: string;
  icon?: React.ReactNode;
  label?: string;
  id: string;
}

const LabeledInput = ({
  shouldSeparateDigitsWithComma,
  containerClassName,
  label,
  icon,
  id,
  ...props
}: LabeledInputProps) => {
  const hasIcon = icon;

  const separateDigitsWithComma = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    if (!shouldSeparateDigitsWithComma) return;

    const englishDigits = toEnglishDigits(event.currentTarget.value);

    const cleaned = englishDigits.replace(/[^\d]/g, "");

    if (cleaned) {
      const formatted = toCommaDigits(cleaned);

      event.currentTarget.value = toPersianDigits(formatted);
    } else {
      event.currentTarget.value = "";
    }
  };

  return (
    <div
      className={cn(
        "grid w-full flex-1 items-center gap-2",
        containerClassName
      )}
    >
      {label && <Label htmlFor={id}>{label}</Label>}

      <inputGroup.InputGroup>
        <inputGroup.InputGroupInput
          id={id}
          {...props}
          className={cn("placeholder:text-right", props.className)}
          onInput={separateDigitsWithComma}
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
          name={props.name}
          component="span"
        />
      )}
    </div>
  );
};

export default LabeledInput;
