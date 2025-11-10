import React from "react";
import * as accordion from "@/components/ui/accordion";
import LabeledInput from "@/components/ui/LabeledInput";
import { useField } from "formik";

const Meterage = () => {
  const [meterageField, meterageMetaProps, meterageHelpers] =
    useField("meterage");

  return (
    <accordion.AccordionItem value="meterage">
      <accordion.AccordionTrigger>متراژ</accordion.AccordionTrigger>

      <accordion.AccordionContent className="px-2">
        <LabeledInput
          onChange={(e) => {
            meterageHelpers.setValue(e.target.value);
          }}
          aria-invalid={!!meterageMetaProps.error}
          value={meterageField.value}
          label="زیر بنا (متر)"
          id="meterage"
        />
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default Meterage;
