import React from "react";
import * as accordion from "@/components/ui/accordion";
import * as inputGroup from "@/components/ui/input-group";
import { CircleMinus, CirclePlus } from "lucide-react";

const Rooms = () => {
  return (
    <accordion.AccordionItem value="rooms">
      <accordion.AccordionTrigger>تعداد اتاق</accordion.AccordionTrigger>

      <accordion.AccordionContent>
        <accordion.AccordionContent className="space-y-4 p-2">
          <inputGroup.InputGroup className="rounded-full">
            <inputGroup.InputGroupInput
              className="!px-2 text-center"
              defaultValue="0 اتاق"
              type="text"
            />
            <inputGroup.InputGroupAddon
              className="pl-0 pr-2"
              align="inline-start"
            >
              <CirclePlus />
            </inputGroup.InputGroupAddon>
            <inputGroup.InputGroupAddon
              className="pl-2 pr-0"
              align="inline-end"
            >
              <CircleMinus />
            </inputGroup.InputGroupAddon>
          </inputGroup.InputGroup>
        </accordion.AccordionContent>
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default Rooms;
