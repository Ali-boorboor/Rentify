import React from "react";
import * as select from "@/components/ui/select";
import * as accordion from "@/components/ui/accordion";

const Location = () => {
  return (
    <accordion.AccordionItem value="location">
      <accordion.AccordionTrigger>شهر</accordion.AccordionTrigger>

      <accordion.AccordionContent>
        <select.Select dir="rtl">
          <select.SelectTrigger className="w-full">
            <select.SelectValue placeholder="موقعیت مکانی" />
          </select.SelectTrigger>
          
          <select.SelectContent>
            <select.SelectItem value="tehran">تهران</select.SelectItem>
          </select.SelectContent>
        </select.Select>
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};

export default Location;
