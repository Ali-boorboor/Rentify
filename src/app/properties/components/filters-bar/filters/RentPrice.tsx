import React from "react";
import * as accordion from "@/components/ui/accordion";
import * as inputGroup from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const RentPrice = () => {
  return (
    <accordion.AccordionItem value="rent-price">
      <accordion.AccordionTrigger>اجاره</accordion.AccordionTrigger>

      <accordion.AccordionContent className="space-y-4 px-2">
        <div className="grid w-full flex-1 items-center gap-2">
          <Label htmlFor="fromRentPrice">از</Label>
          <inputGroup.InputGroup>
            <inputGroup.InputGroupInput
              defaultValue={0}
              className="pl-1"
              type="number"
              id="fromRentPrice"
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
          <Label htmlFor="toRentPrice">تا</Label>
          <inputGroup.InputGroup>
            <inputGroup.InputGroupInput
              defaultValue={4_000_000_000}
              className="pl-1"
              type="number"
              id="toRentPrice"
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

export default RentPrice;
