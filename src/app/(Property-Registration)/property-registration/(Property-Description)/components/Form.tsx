"use client";

import React from "react";
import * as formik from "formik";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const initialValues = {
  message: "",
  isReadyToBeUsed: false,
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
            <Textarea
              className="min-h-40 h-full max-h-96 resize-none"
              placeholder="توضیحات خود را اینجا بنویسید..."
              aria-invalid={!!errors.message}
              onChange={handleChange}
              value={values.message}
              name="message"
            />

            <div className="flex items-center space-x-2">
              <Checkbox
                id="isReadyToBeUsed"
                checked={values.isReadyToBeUsed}
                onCheckedChange={(checked) => {
                  setFieldValue("isReadyToBeUsed", checked);
                }}
              />
              <Label htmlFor="isReadyToBeUsed">
                ملک تخلیه و مناسب بازدید است.
              </Label>
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
