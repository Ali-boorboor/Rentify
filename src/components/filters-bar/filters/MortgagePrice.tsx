import LabeledInput from "@/components/ui/LabeledInput";
import * as accordion from "@/components/ui/accordion";
import React from "react";

const MortgagePrice = () => {
  return (
    <accordion.AccordionItem value="mortgage-price">
      <accordion.AccordionTrigger>رهن</accordion.AccordionTrigger>

      <accordion.AccordionContent className="space-y-4 px-2">
        <LabeledInput
          id="fromMortgagePrice"
          defaultValue={0}
          type="number"
          label="از"
        />

        <LabeledInput
          defaultValue={4_000_000_000}
          id="toMortgagePrice"
          type="number"
          label="تا"
        />
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default MortgagePrice;
