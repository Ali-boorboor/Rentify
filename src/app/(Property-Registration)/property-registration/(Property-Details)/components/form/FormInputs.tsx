import React from "react";
import LabeledInput from "@/components/ui/LabeledInput";
import LabeledSelectbox from "@/components/ui/LabeledSelectbox";
import { Values } from "@propertyDetailsRegistration/types";
import { toPersianDigits } from "@/utils/convertNumbers";
import { SelectItem } from "@/components/ui/select";
import { FormikErrors } from "formik";

interface FormInputsProps {
  setFieldValue: (field: string, value: string | boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormikErrors<Values>;
  values: Values;
}

const FormInputs = ({
  values,
  errors,
  handleChange,
  setFieldValue,
}: FormInputsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-baseline gap-6">
        <LabeledSelectbox
          placeholder="تعداد اتاق خواب را انتخاب کنید"
          ariaInvalid={!!errors.roomsCount}
          containerClassName="min-w-40"
          value={values.roomsCount}
          label="تعداد اتاق خواب"
          name="roomsCount"
          id="roomsCount"
          onValueChange={(value) => {
            setFieldValue("roomsCount", value);
          }}
        >
          {[...Array(5)].map((_, index) => (
            <SelectItem value={String(index + 1)} key={index}>
              {toPersianDigits(String(index + 1))} خوابه
            </SelectItem>
          ))}
          <SelectItem value="5+">بیش از ۵ خوابه</SelectItem>
        </LabeledSelectbox>

        <LabeledSelectbox
          placeholder="سن بنا را انتخاب کنید"
          ariaInvalid={!!errors.propertyAge}
          containerClassName="min-w-40"
          value={values.propertyAge}
          name="propertyAge"
          id="propertyAge"
          label="سن بنا"
          onValueChange={(value) => {
            setFieldValue("propertyAge", value);
          }}
        >
          {[...Array(10)].map((_, index) => (
            <SelectItem value={String((index + 1) * 2)} key={index}>
              حدود {toPersianDigits(String((index + 1) * 2))} ساله
            </SelectItem>
          ))}
          <SelectItem value="20+">بیش از ۲۰ ساله</SelectItem>
        </LabeledSelectbox>
      </div>

      <div className="flex flex-wrap items-baseline gap-6">
        <LabeledSelectbox
          placeholder="نوع واحد را انتخاب کنید"
          ariaInvalid={!!errors.propertyType}
          containerClassName="min-w-40"
          value={values.propertyType}
          name="propertyType"
          id="propertyType"
          label="نوع واحد"
          onValueChange={(value) => {
            setFieldValue("propertyType", value);
          }}
        >
          <SelectItem value="commercial">تجاری</SelectItem>
          <SelectItem value="residential">مسکونی</SelectItem>
        </LabeledSelectbox>

        <LabeledInput
          placeholder="متراژ  زیر بنا را وارد کنید"
          aria-invalid={!!errors.meterage}
          containerClassName="min-w-40"
          onChange={handleChange}
          value={values.meterage}
          label="زیر بنا (متر)"
          name="meterage"
          id="meterage"
          dir="ltr"
        />
      </div>

      <div className="flex flex-wrap items-baseline gap-6">
        <LabeledSelectbox
          placeholder="موقعیت جغرافیایی ملک را انتخاب کنید"
          ariaInvalid={!!errors.cardinalDirection}
          containerClassName="min-w-40"
          value={values.cardinalDirection}
          name="cardinalDirection"
          label="موقعیت"
          id="cardinalDirection"
          onValueChange={(value) => {
            setFieldValue("cardinalDirection", value);
          }}
        >
          <SelectItem value="north">شمال</SelectItem>
          <SelectItem value="south">جنوب</SelectItem>
          <SelectItem value="east">شرق</SelectItem>
          <SelectItem value="west">غرب</SelectItem>
        </LabeledSelectbox>

        <LabeledSelectbox
          placeholder="طبقه ملک را انتخاب کنید"
          containerClassName="min-w-40"
          ariaInvalid={!!errors.floor}
          value={values.floor}
          label="طبقه"
          name="floor"
          id="floor"
          onValueChange={(value) => {
            setFieldValue("floor", value);
          }}
        >
          {[...Array(6)].map((_, index) => (
            <SelectItem value={String(index + 1)} key={index}>
              طبقه {toPersianDigits(String(index + 1))}
            </SelectItem>
          ))}
          <SelectItem value="6+">طبقه ۶+</SelectItem>
        </LabeledSelectbox>
      </div>

      <div className="flex flex-wrap items-baseline gap-6">
        <LabeledSelectbox
          placeholder="تعداد طبقات ساختمان را انتخاب کنید"
          ariaInvalid={!!errors.floorsCount}
          containerClassName="min-w-40"
          value={values.floorsCount}
          label="تعداد طبقات"
          name="floorsCount"
          id="floorsCount"
          onValueChange={(value) => {
            setFieldValue("floorsCount", value);
          }}
        >
          {[...Array(6)].map((_, index) => (
            <SelectItem value={String(index + 1)} key={index}>
              {toPersianDigits(String(index + 1))} طبقه
            </SelectItem>
          ))}
          <SelectItem value="6+">+۶ طبقه</SelectItem>
        </LabeledSelectbox>

        <LabeledSelectbox
          placeholder="تعداد واحد هر طبقه را انتخاب کنید"
          ariaInvalid={!!errors.unitsCount}
          containerClassName="min-w-40"
          label="تعداد واحد هر طبقه"
          value={values.unitsCount}
          name="unitsCount"
          id="unitsCount"
          onValueChange={(value) => {
            setFieldValue("unitsCount", value);
          }}
        >
          {[...Array(4)].map((_, index) => (
            <SelectItem value={String(index + 1)} key={index}>
              {toPersianDigits(String(index + 1))} واحد
            </SelectItem>
          ))}
          <SelectItem value="4+">+۴ واحد</SelectItem>
        </LabeledSelectbox>
      </div>
    </div>
  );
};

export default FormInputs;
