import React from "react";
import propertyTypes from "@/constants/propertyDatas";
import LabeledInput from "@/components/ui/LabeledInput";
import LabeledSelectbox from "@/components/ui/LabeledSelectbox";
import { SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

const Form = () => {
  return (
    <form className="grow flex flex-col justify-between gap-6">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-6">
          <LabeledSelectbox
            placeholder="نوع ملک خود را انتخاب کنید"
            id="property-types"
            label="نوع ملک"
          >
            {propertyTypes.map((propertyType) => (
              <SelectItem value={propertyType.enTitle} key={propertyType.id}>
                {propertyType.faTitle}
              </SelectItem>
            ))}
          </LabeledSelectbox>

          <LabeledSelectbox
            placeholder="نوع معامله‌ی خود را انتخاب کنید"
            id="contract-type"
            label="نوع معامله"
          >
            <SelectItem value="mortgage">رهن</SelectItem>
            <SelectItem value="rent">اجاره</SelectItem>
          </LabeledSelectbox>
        </div>

        <div className="flex flex-wrap gap-6">
          <LabeledInput
            placeholder="مثلا ۵۰۰ میلیون تومان"
            containerClassName="min-w-40"
            id="mortgage-price"
            label="رهن"
          />

          <LabeledInput
            placeholder="مثلا ۵۰ میلیون تومان"
            containerClassName="min-w-40"
            id="rent-price"
            label="اجاره"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="transmutable" />
          <Label htmlFor="transmutable">قابل تبدیل</Label>
        </div>
      </div>

      <Button className="self-end min-w-36" type="submit">
        ادامه
        <ArrowLeft className="size-4.5" />
      </Button>
    </form>
  );
};

export default Form;
