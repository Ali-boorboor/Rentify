"use client";

import React, { useState } from "react";
import LabeledInput from "@/components/ui/LabeledInput";
import { useEstateAgencyRegistration } from "@loginRegister/hooks/postRequests";
import { estateAgencySchema } from "@validators/login-register";
import { Building2, Eye, EyeOff, Phone, UserRound } from "lucide-react";
import { Form, Formik, FormikHelpers } from "formik";
import { Checkbox } from "@/components/ui/checkbox";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const initialValues = {
  hasAcceptTerms: false,
  agencyName: "",
  familyName: "",
  password: "",
  phone: "",
  name: "",
};

const EstateAgencyForm = () => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);

  const { mutate, isPending } = useEstateAgencyRegistration();

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
    <TabsContent value="estate-agency-form">
      <Formik
        validationSchema={estateAgencySchema}
        initialValues={initialValues}
        onSubmit={submitHandler}
      >
        {({ values, errors, handleChange, setFieldValue }) => (
          <Form className="space-y-6">
            <div className="flex flex-col md:flex-row items-baseline gap-6">
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

            <div className="flex flex-col md:flex-row items-baseline gap-6">
              <LabeledInput
                aria-invalid={!!errors.agencyName}
                value={values.agencyName}
                onChange={handleChange}
                placeholder="نام دفتر"
                icon={<Building2 />}
                name="agencyName"
                id="agency-name"
                label="نام دفتر"
              />

              <LabeledInput
                aria-invalid={!!errors.phone}
                placeholder="۰۹۹۸۵۶۴۳۴۲۹ مثلا"
                onChange={handleChange}
                value={values.phone}
                label="تلفن همراه"
                icon={<Phone />}
                maxLength={11}
                name="phone"
                id="phone"
                dir="ltr"
              />
            </div>

            <LabeledInput
              icon={
                shouldShowPassword ? (
                  <Eye
                    className="cursor-pointer"
                    onClick={() => setShouldShowPassword(false)}
                  />
                ) : (
                  <EyeOff
                    className="cursor-pointer"
                    onClick={() => setShouldShowPassword(true)}
                  />
                )
              }
              type={shouldShowPassword ? "text" : "password"}
              aria-invalid={!!errors.password}
              placeholder="کلمه عبور"
              onChange={handleChange}
              value={values.password}
              label="کلمه عبور"
              name="password"
              id="password"
              dir="ltr"
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
              ورود
            </Button>
          </Form>
        )}
      </Formik>
    </TabsContent>
  );
};

export default EstateAgencyForm;
