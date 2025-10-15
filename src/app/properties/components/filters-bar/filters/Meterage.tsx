import React from "react";
import * as accordion from "@/components/ui/accordion";
import * as inputGroup from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const Meterage = () => {
  return (
    <accordion.AccordionItem value="meterage">
      <accordion.AccordionTrigger>متراژ</accordion.AccordionTrigger>

      <accordion.AccordionContent className="px-2">
        <div className="grid w-full flex-1 items-center gap-2">
          <Label htmlFor="meterage">زیر بنا (متر)</Label>
          <inputGroup.InputGroup>
            <inputGroup.InputGroupInput
              defaultValue={0}
              className="pl-1"
              type="number"
              id="meterage"
            />
            <inputGroup.InputGroupAddon
              className="pl-2 pr-0"
              align="inline-end"
            >
              <X />
            </inputGroup.InputGroupAddon>
          </inputGroup.InputGroup>
        </div>
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default Meterage;
