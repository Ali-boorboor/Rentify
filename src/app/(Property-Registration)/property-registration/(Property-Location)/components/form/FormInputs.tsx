import React from "react";
import LabeledInput from "@/components/ui/LabeledInput";
import LabeledSelectbox from "@/components/ui/LabeledSelectbox";
import { FormProps, Values } from "@propertyLocationRegistration/types";
import { SelectItem } from "@/components/ui/select";
import { FormikErrors } from "formik";

interface FormInputsProps extends FormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProvinceChange: (value: string) => void;
  errors: FormikErrors<Values>;
  values: Values;
}

const FormInputs = ({
  handleProvinceChange,
  handleChange,
  provinces,
  values,
  errors,
}: FormInputsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-baseline gap-6">
        <LabeledSelectbox
          onValueChange={handleProvinceChange}
          placeholder="شهر خود را انتخاب کنید"
          ariaInvalid={!!errors.province}
          containerClassName="min-w-40"
          value={values.province}
          name="province"
          id="province"
          label="شهر"
        >
          {provinces.map((province) => (
            <SelectItem value={province._id} key={province._id}>
              {province.faName}
            </SelectItem>
          ))}
        </LabeledSelectbox>

        <LabeledInput
          placeholder="آدرس خود را وارد کنید"
          aria-invalid={!!errors.sideStreet}
          containerClassName="min-w-40"
          label="خیابان فرعی یا کوچه"
          value={values.sideStreet}
          onChange={handleChange}
          name="sideStreet"
          id="sideStreet"
        />
      </div>

      <div className="flex flex-wrap items-baseline gap-6">
        <LabeledInput
          placeholder="آدرس خود را وارد کنید"
          aria-invalid={!!errors.mainStreet}
          containerClassName="min-w-40"
          label="خیابان یا محله‌ی اصلی"
          value={values.mainStreet}
          onChange={handleChange}
          name="mainStreet"
          id="mainStreet"
        />

        <LabeledInput
          placeholder="آدرس دقیق خود را وارد کنید"
          aria-invalid={!!errors.fullAddress}
          containerClassName="min-w-40"
          value={values.fullAddress}
          onChange={handleChange}
          label="آدرس دقیق و پلاک"
          name="fullAddress"
          id="fullAddress"
        />
      </div>
    </div>
  );
};

export default FormInputs;
