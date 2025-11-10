import React from "react";
import LabeledInput from "@/components/ui/LabeledInput";
import LabeledSelectbox from "@/components/ui/LabeledSelectbox";
import { FormProps, Values } from "@propertyTypeRegistration/types";
import { SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormikErrors } from "formik";

interface FormInputsProps extends FormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: (field: string, value: string | boolean) => void;
  errors: FormikErrors<Values>;
  values: Values;
}

const FormInputs = ({
  values,
  errors,
  handleChange,
  setFieldValue,
  contractTypes,
  propertyCategories,
}: FormInputsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-baseline gap-6">
        <LabeledSelectbox
          placeholder="نوع ملک خود را انتخاب کنید"
          ariaInvalid={!!errors.propertyCategory}
          value={values.propertyCategory}
          containerClassName="min-w-40"
          name="propertyCategory"
          id="propertyCategory"
          label="نوع ملک"
          onValueChange={(value) => {
            setFieldValue("propertyCategory", value);
          }}
        >
          {propertyCategories.map((propertyCategory) => (
            <SelectItem
              key={propertyCategory._id as string}
              value={propertyCategory._id}
            >
              {propertyCategory.faTitle}
            </SelectItem>
          ))}
        </LabeledSelectbox>

        <LabeledSelectbox
          placeholder="نوع معامله‌ی خود را انتخاب کنید"
          ariaInvalid={!!errors.contractType}
          containerClassName="min-w-40"
          value={values.contractType}
          name="contractType"
          label="نوع معامله"
          id="contractType"
          onValueChange={(value) => {
            setFieldValue("contractType", value);
          }}
        >
          {contractTypes.map((contractType) => (
            <SelectItem
              key={contractType._id as string}
              value={contractType._id}
            >
              {contractType.title}
            </SelectItem>
          ))}
        </LabeledSelectbox>
      </div>

      <div className="flex flex-wrap items-baseline gap-6">
        <LabeledInput
          aria-invalid={!!errors.mortgageAmount}
          placeholder="مثلا ۵۰۰ میلیون تومان"
          value={values.mortgageAmount}
          shouldSeparateDigitsWithComma
          containerClassName="min-w-40"
          onChange={handleChange}
          name="mortgageAmount"
          id="mortgageAmount"
          label="رهن"
          dir="ltr"
        />

        <LabeledInput
          aria-invalid={!!errors.rentAmount}
          placeholder="مثلا ۵۰ میلیون تومان"
          shouldSeparateDigitsWithComma
          containerClassName="min-w-40"
          value={values.rentAmount}
          onChange={handleChange}
          name="rentAmount"
          id="rentAmount"
          label="اجاره"
          dir="ltr"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="isTransmutable"
          checked={values.isTransmutable}
          onCheckedChange={(checked) => {
            setFieldValue("isTransmutable", checked);
          }}
        />
        <Label htmlFor="isTransmutable">قابل تبدیل</Label>
      </div>
    </div>
  );
};

export default FormInputs;
