"use client";

import React from "react";
import Link from "next/link";
import * as formik from "formik";
import useFormsState from "@propertyRegistration/stores/useFormsState";
import useBuildFormData from "@propertyImagesRegistration/hooks/useBuildFormData";
import FileUploaders from "@propertyImagesRegistration/components/form/FileUploaders";
import usePropertyRegistration from "@propertyImagesRegistration/hooks/usePropertyRegistration";
import { FormValues } from "@propertyImagesRegistration/types";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const initialValues: FormValues = {
  uploadedImages: Array(6).fill({
    file: null,
    preview: null,
  }),
};

const Form = () => {
  const { mutate, isPending } = usePropertyRegistration();
  const { buildFormData } = useBuildFormData();
  const formsStates = useFormsState();

  const submitHandler = async (
    values: typeof initialValues,
    { resetForm }: formik.FormikHelpers<typeof initialValues>
  ) => {
    if (!formsStates.isAllFormsComplete()) {
      return toast.warning(
        "لطفا ابتدا تمامی مراحل و فرم ها را کامل کنید سپس برای ثبت نهایی اقدام کنید"
      );
    }

    const formData = buildFormData(formsStates, values);

    mutate(formData, {
      onSuccess: (result) => {
        if (result.status === 201) {
          formsStates.resetAllForms();
          resetForm();
        }
      },
    });
  };

  return (
    <formik.Formik initialValues={initialValues} onSubmit={submitHandler}>
      {({ values, setFieldValue }) => (
        <formik.Form className="grow flex flex-col justify-between gap-6">
          <FileUploaders
            uploadedImages={values.uploadedImages}
            setUploadedImages={(value) => {
              setFieldValue("uploadedImages", value);
            }}
          />

          <div className="text-muted-foreground text-sm md:text-base space-y-2">
            <p>فرمت عکس‌ها باید jpg، jpeg یا png باشد. </p>
            <p>سایز هر عکس حداکثر ۲ مگابایت باشد.</p>
            <p>عکس‌‌های غیر مرتبط توسط پشتیبانی حذف خواهد شد.</p>
          </div>

          <div className="md:self-end self-center flex flex-wrap items-center justify-center gap-2">
            <Button className="min-w-36" variant="ghost" type="button" asChild>
              <Link href="/property-registration/property-description">
                <ArrowRight className="size-4.5" />
                مرحله قبل
              </Link>
            </Button>

            <Button disabled={isPending} className="min-w-36" type="submit">
              ثبت نهایی
            </Button>
          </div>
        </formik.Form>
      )}
    </formik.Formik>
  );
};

export default Form;
