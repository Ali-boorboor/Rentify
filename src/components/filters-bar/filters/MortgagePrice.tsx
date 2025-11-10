import React from "react";
import * as accordion from "@/components/ui/accordion";
import LabeledInput from "@/components/ui/LabeledInput";
import { useField } from "formik";

const MortgagePrice = () => {
  const [fromMortgageField, fromMortgageMetaProps, fromMortgageHelpers] =
    useField("from-mortgage");

  const [toMortgageField, toMortgageMetaProps, toMortgageHelpers] =
    useField("to-mortgage");

  return (
    <accordion.AccordionItem value="mortgage-price">
      <accordion.AccordionTrigger>رهن</accordion.AccordionTrigger>

      <accordion.AccordionContent className="space-y-4 px-2">
        <LabeledInput
          onChange={(e) => {
            fromMortgageHelpers.setValue(e.target.value);
          }}
          value={fromMortgageField.value}
          aria-invalid={!!fromMortgageMetaProps.error}
          shouldSeparateDigitsWithComma
          id="from-mortgage"
          label="از"
        />

        <LabeledInput
          onChange={(e) => {
            toMortgageHelpers.setValue(e.target.value);
          }}
          value={toMortgageField.value}
          aria-invalid={!!toMortgageMetaProps.error}
          shouldSeparateDigitsWithComma
          id="to-mortgage"
          label="تا"
        />
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default MortgagePrice;
