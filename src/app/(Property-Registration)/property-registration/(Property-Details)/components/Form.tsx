"use client";

import React from "react";
import * as formik from "formik";
import LabeledInput from "@/components/ui/LabeledInput";
import LabeledSelectbox from "@/components/ui/LabeledSelectbox";
import { toPersianDigits } from "@/utils/convertNumbers";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const initialValues = {
  roomsCount: "",
  propertyAge: "",
  propertyType: "",
  meterage: "",
  location: "",
  floor: "",
  floorsCount: "",
  unitsCount: "",
};

const Form = () => {
  return (
    <formik.Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, handleChange, setFieldValue }) => (
        <formik.Form className="grow flex flex-col justify-between gap-6">
          <div className="space-y-6">
            <div className="flex flex-wrap items-baseline gap-6">
              <LabeledSelectbox
                placeholder="تعداد اتاق خواب را انتخاب کنید"
                ariaInvalid={!!errors.roomsCount}
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
                ariaInvalid={!!errors.location}
                value={values.location}
                name="location"
                label="موقعیت"
                id="location"
                onValueChange={(value) => {
                  setFieldValue("location", value);
                }}
              >
                <SelectItem value="north">شمال</SelectItem>
                <SelectItem value="south">جنوب</SelectItem>
                <SelectItem value="east">شرق</SelectItem>
                <SelectItem value="west">غرب</SelectItem>
              </LabeledSelectbox>

              <LabeledSelectbox
                placeholder="طبقه ملک را انتخاب کنید"
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

          <div className="md:self-end self-center flex flex-wrap items-center justify-center gap-2">
            <Button className="min-w-36" variant="ghost" type="button">
              <ArrowRight className="size-4.5" />
              مرحله قبل
            </Button>

            <Button className="min-w-36" type="submit">
              ادامه
              <ArrowLeft className="size-4.5" />
            </Button>
          </div>
        </formik.Form>
      )}
    </formik.Formik>
  );
};

export default Form;
