import LabeledInput from "@/components/ui/LabeledInput";
import * as accordion from "@/components/ui/accordion";
import React from "react";

const RentPrice = () => {
  return (
    <accordion.AccordionItem value="rent-price">
      <accordion.AccordionTrigger>اجاره</accordion.AccordionTrigger>

      <accordion.AccordionContent className="space-y-4 px-2">
        <LabeledInput
          id="fromRentPrice"
          defaultValue={0}
          type="number"
          label="از"
        />

        <LabeledInput
          defaultValue={4_000_000_000}
          id="toRentPrice"
          type="number"
          label="تا"
        />
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default RentPrice;
