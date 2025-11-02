"use client";

import React from "react";
import * as formik from "formik";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface FormProps {
  equipmentsAndFacilities: { _id: string; label: string; value: string }[];
}

const initialValues = {
  equipments: [] as string[],
};

const Form = ({ equipmentsAndFacilities }: FormProps) => {
  return (
    <formik.Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <formik.Form className="grow flex flex-col justify-between gap-6">
          <div className="flex flex-wrap justify-between gap-6 border shadow-sm rounded-xl p-4">
            {equipmentsAndFacilities.map((equipment) => (
              <div
                className="flex items-center space-x-2 min-w-40"
                key={equipment._id}
              >
                <Checkbox
                  id={equipment.value}
                  checked={values.equipments.includes(equipment._id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFieldValue("equipments", [
                        ...values.equipments,
                        equipment._id,
                      ]);
                    } else {
                      setFieldValue(
                        "equipments",
                        values.equipments.filter((id) => id !== equipment._id)
                      );
                    }
                  }}
                />
                <Label htmlFor={equipment.value}>{equipment.label}</Label>
              </div>
            ))}
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
