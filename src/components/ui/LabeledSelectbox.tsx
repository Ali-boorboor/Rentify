import React from "react";
import * as select from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface LabeledSelectboxProps {
  containerClassName?: string;
  children: React.ReactNode;
  placeholder: string;
  disabled?: boolean;
  className?: string;
  label: string;
  id: string;
}

const LabeledSelectbox = ({
  containerClassName,
  placeholder,
  className,
  children,
  disabled,
  label,
  id,
}: LabeledSelectboxProps) => {
  return (
    <div className={cn("grid flex-1 items-center gap-2", containerClassName)}>
      <Label htmlFor={id}>{label}</Label>

      <select.Select dir="rtl" disabled={disabled}>
        <select.SelectTrigger className={cn("w-full", className)} id={id}>
          <select.SelectValue placeholder={placeholder} />
        </select.SelectTrigger>

        <select.SelectContent>{children}</select.SelectContent>
      </select.Select>
    </div>
  );
};

export default LabeledSelectbox;
