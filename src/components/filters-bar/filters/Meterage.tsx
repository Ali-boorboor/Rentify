import LabeledInput from "@/components/ui/LabeledInput";
import * as accordion from "@/components/ui/accordion";
import React from "react";

const Meterage = () => {
  return (
    <accordion.AccordionItem value="meterage">
      <accordion.AccordionTrigger>متراژ</accordion.AccordionTrigger>

      <accordion.AccordionContent className="px-2">
        <LabeledInput
          label="زیر بنا (متر)"
          defaultValue={0}
          id="meterage"
          type="number"
        />
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default Meterage;
