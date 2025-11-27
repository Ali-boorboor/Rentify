"use client";

import React from "react";
import * as formik from "formik";
import useFormsState from "@propertyRegistration/stores/useFormsState";
import FormInputs from "@propertyTypeRegistration/components/form/FormInputs";
import propertyTypeValidations from "@validators/property-registration/propertyType";
import { FormProps, Values } from "@propertyTypeRegistration/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import {
  toCommaFreeDigits,
  toCommaDigits,
  toEnglishDigits,
  toPersianDigits,
} from "@/utils/convertNumbers";

const Form = ({ propertyCategories, contractTypes }: FormProps) => {
  const { propertyTypeDatas, setPropertyTypeDatas } = useFormsState.getState();

  const router = useRouter();

  const initialValues = propertyTypeDatas
    ? {
        ...propertyTypeDatas,
        rentAmount: toPersianDigits(
          toCommaDigits(propertyTypeDatas.rentAmount)
        ),
        mortgageAmount: toPersianDigits(
          toCommaDigits(propertyTypeDatas.mortgageAmount)
        ),
      }
    : {
        propertyCategory: "",
        contractType: "",
        mortgageAmount: "",
        rentAmount: "",
        isTransmutable: false,
      };

  const handleSubmit = (values: Values) => {
    const commaFreeMortgageAmount = toCommaFreeDigits(
      toEnglishDigits(values.mortgageAmount)
    );
    const commaFreeRentAmount = toCommaFreeDigits(
      toEnglishDigits(values.rentAmount)
    );

    setPropertyTypeDatas({
      ...values,
      mortgageAmount: commaFreeMortgageAmount,
      rentAmount: commaFreeRentAmount,
    });

    toast.success("اطلاعات شما با موفقیت ثبت شد");
    router.push("/property-registration/property-location");
  };

  return (
    <formik.Formik
      validationSchema={propertyTypeValidations}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, errors, handleChange, setFieldValue }) => (
        <formik.Form className="grow flex flex-col justify-between gap-6">
          <FormInputs
            errors={errors}
            values={values}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            contractTypes={contractTypes}
            propertyCategories={propertyCategories}
          />

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
