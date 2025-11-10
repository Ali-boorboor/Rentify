import React from "react";
import * as accordion from "@/components/ui/accordion";
import LabeledInput from "@/components/ui/LabeledInput";
import { useField } from "formik";

const RentPrice = () => {
  const [fromRentField, fromRentMetaProps, fromRentHelpers] =
    useField("from-rent");

  const [toRentField, toRentMetaProps, toRentHelpers] = useField("to-rent");

  return (
    <accordion.AccordionItem value="rent-price">
      <accordion.AccordionTrigger>اجاره</accordion.AccordionTrigger>

      <accordion.AccordionContent className="space-y-4 px-2">
        <LabeledInput
          onChange={(e) => {
            fromRentHelpers.setValue(e.target.value);
          }}
          value={fromRentField.value}
          aria-invalid={!!fromRentMetaProps.error}
          shouldSeparateDigitsWithComma
          id="from-rent"
          label="از"
        />

        <LabeledInput
          onChange={(e) => {
            toRentHelpers.setValue(e.target.value);
          }}
          value={toRentField.value}
          aria-invalid={!!toRentMetaProps.error}
          shouldSeparateDigitsWithComma
          id="to-rent"
          label="تا"
        />
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default RentPrice;
