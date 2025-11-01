import React from "react";
import connectToDB from "@configs/database";
import ContractTypeModel from "@models/ContractType";
import LabeledInput from "@/components/ui/LabeledInput";
import PropertyCategoryModel from "@models/PropertyCategory";
import LabeledSelectbox from "@/components/ui/LabeledSelectbox";
import { SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

const Form = async () => {
  connectToDB();
  const propertyCategories = await PropertyCategoryModel.find({}).lean();
  const contractTypes = await ContractTypeModel.find({}).lean();

  return (
    <form className="grow flex flex-col justify-between gap-6">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-6">
          <LabeledSelectbox
            placeholder="نوع ملک خود را انتخاب کنید"
            id="property-types"
            label="نوع ملک"
          >
            {propertyCategories.map((propertyCategory) => (
              <SelectItem
                key={propertyCategory._id as string}
                value={propertyCategory.enTitle}
              >
                {propertyCategory.faTitle}
              </SelectItem>
            ))}
          </LabeledSelectbox>

          <LabeledSelectbox
            placeholder="نوع معامله‌ی خود را انتخاب کنید"
            id="contract-type"
            label="نوع معامله"
          >
            {contractTypes.map((contractType) => (
              <SelectItem
                key={contractType._id as string}
                value={contractType.value}
              >
                {contractType.title}
              </SelectItem>
            ))}
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
