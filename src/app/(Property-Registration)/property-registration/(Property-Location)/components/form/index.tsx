"use client";

import React from "react";
import * as formik from "formik";
import dynamic from "next/dynamic";
import LabeledInput from "@/components/ui/LabeledInput";
import LabeledSelectbox from "@/components/ui/LabeledSelectbox";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LatLngExpression } from "leaflet";

const Map = dynamic(
  () => import("@propertyLocationRegistration/components/form/Map"),
  { ssr: false }
);

interface FormProps {
  provinces: { _id: string; faName: string; enName: string }[];
}

const initialValues = {
  province: "",
  sideStreet: "",
  mainStreet: "",
  address: "",
  locationCoordinates: [
    35.69977180653842, 51.33803060889542,
  ] as LatLngExpression,
};

const Form = ({ provinces }: FormProps) => {
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
                placeholder="شهر خود را انتخاب کنید"
                ariaInvalid={!!errors.province}
                value={values.province}
                name="province"
                id="province"
                label="شهر"
                onValueChange={(value) => {
                  setFieldValue("province", value);
                }}
              >
                {provinces.map((province) => (
                  <SelectItem value={province.enName} key={province._id}>
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
                aria-invalid={!!errors.address}
                containerClassName="min-w-40"
                onChange={handleChange}
                label="آدرس دقیق و پلاک"
                value={values.address}
                name="address"
                id="address"
              />
            </div>
          </div>

          <Map
            locationCoordinates={values.locationCoordinates}
            onLocationChange={(coords) => {
              setFieldValue("locationCoordinates", coords);
            }}
          />

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
