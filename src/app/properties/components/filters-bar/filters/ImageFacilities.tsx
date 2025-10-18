import React from "react";
import * as accordion from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const ImageFacilities = () => {
  return (
    <accordion.AccordionItem value="image-facilities">
      <accordion.AccordionTrigger>
        امکانات تصویری آگهی
      </accordion.AccordionTrigger>

      <accordion.AccordionContent className="space-y-4">
        <Label
          className={cn(
            "flex items-center justify-between gap-4 rounded-xl border shadow-sm p-3 text-foreground hover:bg-primary/10 hover:border-primary/30",
            "has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/50",
            "transition-all duration-200 ease-linear"
          )}
          dir="ltr"
        >
          <Switch
            className="data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            defaultChecked
          />
          <p className="font-medium text-sm leading-none">
            فقط آگهی های عکس دار
          </p>
        </Label>

        <Label
          className={cn(
            "flex items-center justify-between gap-4 rounded-xl border shadow-sm p-3 text-foreground hover:bg-primary/10 hover:border-primary/30",
            "has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/50",
            "transition-all duration-200 ease-linear"
          )}
          dir="ltr"
        >
          <Switch className="data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
          <p className="font-medium text-sm leading-none">
            فقط آگهی های ‌آژانس املاک
          </p>
        </Label>
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default ImageFacilities;
