import React from "react";
import * as select from "@/components/ui/select";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "formik";
import { cn } from "@/lib/utils";

interface LabeledSelectboxProps
  extends React.ComponentProps<typeof SelectPrimitive.Root> {
  containerClassName?: string;
  children: React.ReactNode;
  ariaInvalid?: boolean;
  placeholder: string;
  disabled?: boolean;
  className?: string;
  label: string;
  id: string;
}

const LabeledSelectbox = ({
  containerClassName,
  ariaInvalid,
  placeholder,
  className,
  children,
  disabled,
  label,
  id,
  ...props
}: LabeledSelectboxProps) => {
  return (
    <div className={cn("grid flex-1 items-center gap-2", containerClassName)}>
      <Label htmlFor={id}>{label}</Label>

      <select.Select dir="rtl" disabled={disabled} {...props}>
        <select.SelectTrigger
          className={cn("w-full", className)}
          aria-invalid={ariaInvalid}
          id={id}
        >
          <select.SelectValue placeholder={placeholder} />
        </select.SelectTrigger>

        <select.SelectContent>{children}</select.SelectContent>
      </select.Select>

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

export default LabeledSelectbox;
