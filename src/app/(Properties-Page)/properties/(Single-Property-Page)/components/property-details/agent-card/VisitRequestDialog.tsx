"use client";

import React from "react";
import Calendar from "@/components/ui/Calendar";
import * as dialog from "@/components/ui/dialog";
import TimePicker from "@/components/ui/TimePicker";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { X } from "lucide-react";
import { toast } from "sonner";

const initialValues = {
  date: undefined,
  time: "",
};

const VisitRequestDialog = () => {
  const submitHandler = () => {
    toast.success("درخواست بازدید با موفقیت ثبت شد");
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      {({ values, setFieldValue }) => (
        <dialog.Dialog>
          <dialog.DialogTrigger asChild>
            <Button className="w-full">درخواست بازدید</Button>
          </dialog.DialogTrigger>

          <dialog.DialogContent
            className="max-w-svw max-h-svh overflow-y-auto space-y-2"
            showCloseButton={false}
            dir="rtl"
          >
            <dialog.DialogClose asChild>
              <Button
                className="text-destructive absolute top-4 left-4 has-[>svg]:px-1"
                variant="link"
              >
                <X className="size-5" />
              </Button>
            </dialog.DialogClose>

            <dialog.DialogHeader className="sm:text-right">
              <dialog.DialogTitle>درخواست بازدید</dialog.DialogTitle>
              <dialog.DialogDescription className="sr-only">
                درخواست بازدید
              </dialog.DialogDescription>
            </dialog.DialogHeader>

            <Form className="space-y-4">
              <Calendar
                onSelect={(day) => setFieldValue("date", day)}
                disabled={{ before: new Date() }}
                defaultMonth={values.date}
                selected={values.date}
                mode="single"
              />

              <TimePicker setFieldValue={setFieldValue} values={values} />

              <dialog.DialogClose asChild>
                <Button
                  disabled={!values.date || !values.time}
                  className="hover:bg-primary w-full"
                  type="submit"
                >
                  ثبت درخواست بازدید
                </Button>
              </dialog.DialogClose>
            </Form>
          </dialog.DialogContent>
        </dialog.Dialog>
      )}
    </Formik>
  );
};

export default VisitRequestDialog;
