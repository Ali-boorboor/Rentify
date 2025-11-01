import * as accordion from "@/components/ui/accordion";
import * as select from "@/components/ui/select";
import ProvinceModel from "@models/Province";
import connectToDB from "@configs/database";
import React from "react";

const Location = async () => {
  connectToDB();
  const provinces = await ProvinceModel.find({}).lean();

  return (
    <accordion.AccordionItem value="location">
      <accordion.AccordionTrigger>شهر</accordion.AccordionTrigger>

      <accordion.AccordionContent>
        <select.Select dir="rtl">
          <select.SelectTrigger className="w-full">
            <select.SelectValue placeholder="موقعیت مکانی" />
          </select.SelectTrigger>

          {provinces.map((province) => (
            <select.SelectContent key={province._id as string}>
              <select.SelectItem value={province.enName}>
                {province.faName}
              </select.SelectItem>
            </select.SelectContent>
          ))}
        </select.Select>
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default Location;
