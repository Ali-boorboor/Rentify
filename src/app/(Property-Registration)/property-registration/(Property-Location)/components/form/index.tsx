"use client";

import * as formik from "formik";
import React, { memo } from "react";
import useFormsState from "@propertyRegistration/stores/useFormsState";
import FormInputs from "@propertyLocationRegistration/components/form/FormInputs";
import propertyLocationValidations from "@validators/property-registration/propertyLocation";
import { useLocationStore } from "@propertyLocationRegistration/stores/locationState";
import { FormProps } from "@propertyLocationRegistration/types";
import { Values } from "@propertyLocationRegistration/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Form = ({ provinces }: FormProps) => {
  const { propertyLocationDatas, setPropertyLocationDatas } =
    useFormsState.getState();
  const { setLocationCoordinates, setShouldRecenterMap } =
    useLocationStore.getState();

  const router = useRouter();

  const initialValues = propertyLocationDatas || {
    province: "",
    sideStreet: "",
    mainStreet: "",
    fullAddress: "",
  };

  const handleProvinceChange = (
    value: string,
    setFieldValue: (field: string, value: string) => void
  ) => {
    setFieldValue("province", value);

    const province = provinces.find((province) => province._id === value);

    if (province) {
      setLocationCoordinates(province.locationCoordinates);
      setShouldRecenterMap(true);
    }
  };

  const handleSubmit = (values: Values) => {
    setPropertyLocationDatas(values);

    toast.success("اطلاعات شما با موفقیت ثبت شد");
    router.push("/property-registration/property-details");
  };

  return (
    <formik.Formik
      validationSchema={propertyLocationValidations}
      initialValues={initialValues as Values}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, errors, handleChange, setFieldValue }) => (
        <formik.Form className="grow flex flex-col justify-between gap-6">
          <FormInputs
            values={values}
            errors={errors}
            provinces={provinces}
            handleChange={handleChange}
            handleProvinceChange={(value: string) => {
              handleProvinceChange(value, setFieldValue);
            }}
          />

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button className="flex-1" variant="ghost" type="button">
              <ArrowRight className="size-4.5" />
              مرحله قبل
            </Button>

            <Button className="flex-1" type="submit">
              ادامه
              <ArrowLeft className="size-4.5" />
            </Button>
          </div>
        </formik.Form>
      )}
    </formik.Formik>
  );
};

export default memo(Form);
