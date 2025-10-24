import React from "react";
import * as inputGroup from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface LabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  icon?: React.ReactNode;
  label: string;
  id: string;
}

const LabeledInput = ({
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
        <inputGroup.InputGroupInput id={id} {...props} />

        {hasIcon && (
          <inputGroup.InputGroupAddon className="pl-0 pr-2">
            {icon}
          </inputGroup.InputGroupAddon>
        )}
      </inputGroup.InputGroup>
    </div>
  );
};

export default LabeledInput;
