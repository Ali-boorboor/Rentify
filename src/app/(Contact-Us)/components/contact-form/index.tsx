"use client";

import React from "react";
import Image from "next/image";
import LabeledInput from "@/components/ui/LabeledInput";
import usePostContactMessage from "@contactUs/hooks/usePostContactMessage";
import { contactUsMessageValidations } from "@validators/contact-us-message";
import { Formik, Form, FormikHelpers, ErrorMessage } from "formik";
import { Mail, Phone, UserRound } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const IMAGE = "/images/png/contact-us/contact-us-image.png";

const initialValues = {
  name: "",
  familyName: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const { mutate, isPending } = usePostContactMessage();

  const submitHandler = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    mutate(values, { onSuccess: () => resetForm() });
  };

  return (
    <section className="px-4">
      <div className="container m-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">تماس با ما</h1>
          <p className="text-primary font-medium">
            ما از اینکه شما را در جمع خود داریم بسیار خوشحالیم
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-between">
          <Formik
            validationSchema={contactUsMessageValidations}
            initialValues={initialValues}
            onSubmit={submitHandler}
          >
            {({ values, errors, handleChange }) => (
              <Form className="grow basis-1/2 flex flex-col gap-6 bg-card p-4 rounded-xl border shadow-sm">
                <div className="flex flex-wrap gap-6 items-baseline">
                  <LabeledInput
                    containerClassName="min-w-40"
                    aria-invalid={!!errors.name}
                    onChange={handleChange}
                    icon={<UserRound />}
                    value={values.name}
                    placeholder="نام"
                    name="name"
                    label="نام"
                    id="name"
                  />

                  <LabeledInput
                    aria-invalid={!!errors.familyName}
                    containerClassName="min-w-40"
                    placeholder="نام‌ خانوادگی"
                    value={values.familyName}
                    onChange={handleChange}
                    icon={<UserRound />}
                    label="نام‌ خانوادگی"
                    name="familyName"
                    id="familyName"
                  />
                </div>

                <div className="flex flex-wrap gap-6 items-baseline">
                  <LabeledInput
                    containerClassName="min-w-40"
                    aria-invalid={!!errors.email}
                    onChange={handleChange}
                    value={values.email}
                    placeholder="ایمیل"
                    icon={<Mail />}
                    label="ایمیل"
                    name="email"
                    id="email"
                    dir="ltr"
                  />

                  <LabeledInput
                    containerClassName="min-w-40"
                    aria-invalid={!!errors.phone}
                    placeholder="تلفن همراه"
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

                <div className="flex flex-col gap-2 h-full">
                  <Textarea
                    placeholder="پیام خود را اینجا بنویسید..."
                    className="min-h-40 grow resize-none"
                    aria-invalid={!!errors.message}
                    onChange={handleChange}
                    value={values.message}
                    name="message"
                  />
                  <ErrorMessage
                    className="text-destructive text-sm font-medium"
                    component="span"
                    name="message"
                  />
                </div>

                <Button disabled={isPending} className="w-full" type="submit">
                  ارسال پیام
                </Button>
              </Form>
            )}
          </Formik>

          <div className="relative w-md aspect-square rounded-xl overflow-hidden border shadow-sm grow">
            <Image
              className="object-cover object-center"
              alt="contact us image"
              sizes="500px"
              src={IMAGE}
              priority
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
