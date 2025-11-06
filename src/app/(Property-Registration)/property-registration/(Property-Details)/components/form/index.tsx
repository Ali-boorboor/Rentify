"use client";

import React from "react";
import * as formik from "formik";
import FormInputs from "@propertyDetailsRegistration/components/form/FormInputs";
import useFormsState from "@propertyRegistration/stores/useFormsState";
import { Values } from "@propertyDetailsRegistration/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Form = () => {
  const { propertyDetailsDatas, setPropertyDetailsDatas } =
    useFormsState.getState();

  const router = useRouter();

  const initialValues = propertyDetailsDatas || {
    roomsCount: "",
    propertyAge: "",
    propertyType: "",
    meterage: "",
    cardinalDirection: undefined,
    floor: "",
    floorsCount: "",
    unitsCount: "",
  };

  const handleSubmit = (values: Values) => {
    setPropertyDetailsDatas(values);

    toast.success("اطلاعات شما با موفقیت ثبت شد");
    router.push("/property-registration/property-equipments");
  };

  return (
    <formik.Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, errors, handleChange, setFieldValue }) => (
        <formik.Form className="grow flex flex-col justify-between gap-6">
          <FormInputs
            setFieldValue={setFieldValue}
            handleChange={handleChange}
            values={values}
            errors={errors}
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
