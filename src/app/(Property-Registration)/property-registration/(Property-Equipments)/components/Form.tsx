"use client";

import React from "react";
import Link from "next/link";
import * as formik from "formik";
import useFormsState from "@propertyRegistration/stores/useFormsState";
import FormCheckboxs from "@propertyEquipmentsRegistration/components/form/FormCheckboxs";
import propertyEquipmentsValidations from "@validators/property-registration/propertyEquipments";
import { Values, FormProps } from "@propertyEquipmentsRegistration/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Form = ({ equipmentsAndFacilities }: FormProps) => {
  const { propertyEquipmentsDatas, setPropertyEquipmentsDatas } =
    useFormsState.getState();

  const router = useRouter();

  const initialValues = propertyEquipmentsDatas || {
    equipments: [],
  };

  const handleSubmit = (values: Values) => {
    setPropertyEquipmentsDatas(values);

    toast.success("اطلاعات شما با موفقیت ثبت شد");
    router.push("/property-registration/property-description");
  };

  return (
    <formik.Formik
      validationSchema={propertyEquipmentsValidations}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, errors, setFieldValue }) => (
        <formik.Form className="grow flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-6">
            <FormCheckboxs
              equipmentsAndFacilities={equipmentsAndFacilities}
              setFieldValue={setFieldValue}
              values={values}
              errors={errors}
            />

            <formik.ErrorMessage
              className="text-destructive text-sm font-medium"
              name="equipments"
              component="span"
            />
          </div>

          <div className="md:self-end self-center flex flex-wrap items-center justify-center gap-2">
            <Button className="min-w-36" variant="ghost" type="button" asChild>
              <Link href="/property-registration/property-details">
                <ArrowRight className="size-4.5" />
                مرحله قبل
              </Link>
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
