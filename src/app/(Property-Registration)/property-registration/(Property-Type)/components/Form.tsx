"use client";

import React from "react";
import * as formik from "formik";
import LabeledInput from "@/components/ui/LabeledInput";
import LabeledSelectbox from "@/components/ui/LabeledSelectbox";
import { toCommaFree } from "@/utils/convertNumbers";
import { SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

interface FormProps {
  propertyCategories: { _id: string; enTitle: string; faTitle: string }[];
  contractTypes: { _id: string; title: string; value: string }[];
}

const initialValues = {
  propertyCategory: "",
  contractType: "",
  mortgageAmount: "",
  rentAmount: "",
  isTransmutable: false,
};

const Form = ({ propertyCategories, contractTypes }: FormProps) => {
  return (
    <formik.Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const commaFreeMortgage = toCommaFree(values.mortgageAmount);
        const commaFreeRent = toCommaFree(values.rentAmount);

        console.log(values, commaFreeMortgage, commaFreeRent);
      }}
    >
      {({ values, errors, handleChange, setFieldValue }) => (
        <formik.Form className="grow flex flex-col justify-between gap-6">
          <div className="space-y-6">
            <div className="flex flex-wrap items-baseline gap-6">
              <LabeledSelectbox
                placeholder="نوع ملک خود را انتخاب کنید"
                ariaInvalid={!!errors.propertyCategory}
                value={values.propertyCategory}
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
                    value={propertyCategory.enTitle}
                  >
                    {propertyCategory.faTitle}
                  </SelectItem>
                ))}
              </LabeledSelectbox>

              <LabeledSelectbox
                placeholder="نوع معامله‌ی خود را انتخاب کنید"
                ariaInvalid={!!errors.contractType}
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
                    value={contractType.value}
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
                containerClassName="min-w-40"
                separateDigitsWithComma
                onChange={handleChange}
                name="mortgageAmount"
                id="mortgageAmount"
                label="رهن"
                dir="ltr"
              />

              <LabeledInput
                aria-invalid={!!errors.rentAmount}
                placeholder="مثلا ۵۰ میلیون تومان"
                containerClassName="min-w-40"
                value={values.rentAmount}
                separateDigitsWithComma
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

          <Button className="self-end min-w-36" type="submit">
            ادامه
            <ArrowLeft className="size-4.5" />
          </Button>
        </formik.Form>
      )}
    </formik.Formik>
  );
};

export default Form;
