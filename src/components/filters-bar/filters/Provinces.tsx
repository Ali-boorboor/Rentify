import React from "react";
import * as select from "@/components/ui/select";
import * as accordion from "@/components/ui/accordion";
import { IProvince } from "@models/Province";
import { useField } from "formik";

interface ProvincesProps {
  provinces: IProvince[];
}

const Provinces = ({ provinces }: ProvincesProps) => {
  const [field, _, helpers] = useField("province");

  return (
    <accordion.AccordionItem value="province">
      <accordion.AccordionTrigger>شهر</accordion.AccordionTrigger>

      <accordion.AccordionContent>
        <select.Select
          onValueChange={(value) => helpers.setValue(value)}
          value={field.value}
          dir="rtl"
        >
          <select.SelectTrigger className="w-full">
            <select.SelectValue placeholder="موقعیت مکانی" />
          </select.SelectTrigger>

          <select.SelectContent>
            {provinces.map((province) => (
              <select.SelectItem
                key={province._id as string}
                value={province.enName}
              >
                {province.faName}
              </select.SelectItem>
            ))}
          </select.SelectContent>
        </select.Select>
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default Provinces;
