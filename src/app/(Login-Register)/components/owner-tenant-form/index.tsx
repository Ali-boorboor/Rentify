"use client";

import React from "react";
import LabeledInput from "@/components/ui/LabeledInput";
import { useOwnerTenantRegistration } from "@loginRegister/hooks/postRequests";
import { ownerTenantSchema } from "@validators/login-register";
import { Form, Formik, FormikHelpers } from "formik";
import { Checkbox } from "@/components/ui/checkbox";
import { TabsContent } from "@/components/ui/tabs";
import { Phone, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const initialValues = {
  hasAcceptTerms: false,
  familyName: "",
  phone: "",
  name: "",
};

const OwnerTenantForm = () => {
  const { mutate, isPending } = useOwnerTenantRegistration();

  const submitHandler = async (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    const { hasAcceptTerms: _, ...neededDataToSend } = values;

    mutate(neededDataToSend, {
      onSuccess: () => resetForm(),
    });
  };

  return (
    <TabsContent value="owner-tenant-form">
      <Formik
        validationSchema={ownerTenantSchema}
        initialValues={initialValues}
        onSubmit={submitHandler}
      >
        {({ values, errors, handleChange, setFieldValue }) => (
          <Form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <LabeledInput
                aria-invalid={!!errors.name}
                onChange={handleChange}
                icon={<UserRound />}
                value={values.name}
                placeholder="نام"
                label="نام"
                name="name"
                id="name"
              />

              <LabeledInput
                aria-invalid={!!errors.familyName}
                placeholder="نام خانوادگی"
                value={values.familyName}
                onChange={handleChange}
                icon={<UserRound />}
                label="نام خانوادگی"
                name="familyName"
                id="family-name"
              />
            </div>

            <LabeledInput
              aria-invalid={!!errors.phone}
              placeholder="۰۹۹۸۵۶۴۳۴۲۹"
              onChange={handleChange}
              convertToPersianDigits
              value={values.phone}
              label="تلفن همراه"
              icon={<Phone />}
              name="phone"
              id="phone"
            />

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={values.hasAcceptTerms}
                aria-invalid={!values.hasAcceptTerms}
                onCheckedChange={(checked) => {
                  setFieldValue("hasAcceptTerms", checked);
                }}
              />
              <Label htmlFor="terms">
                با قوانین<span className="text-primary">رنتی فای</span>موافق
                هستم
              </Label>
            </div>

            <Button
              disabled={!values.hasAcceptTerms || isPending}
              className="w-full"
              type="submit"
            >
              تایید و دریافت کد
            </Button>
          </Form>
        )}
      </Formik>
    </TabsContent>
  );
};

export default OwnerTenantForm;
