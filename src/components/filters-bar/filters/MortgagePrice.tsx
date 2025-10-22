import React from "react";
import * as accordion from "@/components/ui/accordion";
import * as inputGroup from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const MortgagePrice = () => {
  return (
    <accordion.AccordionItem value="mortgage-price">
      <accordion.AccordionTrigger>رهن</accordion.AccordionTrigger>

      <accordion.AccordionContent className="space-y-4 px-2">
        <div className="grid w-full flex-1 items-center gap-2">
          <Label htmlFor="fromMortgagePrice">از</Label>
          <inputGroup.InputGroup>
            <inputGroup.InputGroupInput
              defaultValue={0}
              className="pl-1"
              type="number"
              id="fromMortgagePrice"
            />
            <inputGroup.InputGroupAddon
              className="pl-2 pr-0"
              align="inline-end"
            >
              <X />
            </inputGroup.InputGroupAddon>
          </inputGroup.InputGroup>
        </div>

        <div className="grid w-full flex-1 items-center gap-2">
          <Label htmlFor="toMortgagePrice">تا</Label>
          <inputGroup.InputGroup>
            <inputGroup.InputGroupInput
              defaultValue={4_000_000_000}
              className="pl-1"
              type="number"
              id="toMortgagePrice"
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

export default MortgagePrice;
