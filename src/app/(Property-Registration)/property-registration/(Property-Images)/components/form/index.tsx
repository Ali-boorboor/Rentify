"use client";

import React from "react";
import * as formik from "formik";
import FileUploaders from "@propertyImagesRegistration/components/form/FileUploaders";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface UploadedImage {
  file: File | null;
  preview: string | null;
}

const initialValues = {
  uploadedImages: Array(6).fill({
    file: null,
    preview: null,
  }) as UploadedImage[],
};

const Form = () => {
  return (
    <formik.Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const formData = new FormData();

        values.uploadedImages.forEach(({ file }) => {
          if (file) formData.append("images", file);
        });

        console.log([...formData.entries()]);
      }}
    >
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
            <p>عکس‌‌های غیر مرتبط توسط پشتیبانی حذف خواهد شد.</p>
          </div>

          <div className="md:self-end self-center flex flex-wrap items-center justify-center gap-2">
            <Button className="min-w-36" variant="ghost" type="button">
              <ArrowRight className="size-4.5" />
              مرحله قبل
            </Button>

            <Button className="min-w-36" type="submit">
              ثبت نهایی
            </Button>
          </div>
        </formik.Form>
      )}
    </formik.Formik>
  );
};

export default Form;
