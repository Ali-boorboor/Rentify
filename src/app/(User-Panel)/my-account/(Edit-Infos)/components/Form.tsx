"use client";

import React from "react";
import * as formik from "formik";
import Inputs from "@userPanel/editInfos/components/Inputs";
import * as validators from "@validators/user-panel/editInfos";
import useEditUserInfos from "@userPanel/editInfos/hooks/useEditUserInfos";
import { Values } from "@userPanel/editInfos/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IUser } from "@models/User";

interface FormProps {
  user: IUser;
}

const Form = ({ user }: FormProps) => {
  const { mutate, isPending } = useEditUserInfos();
  const router = useRouter();

  const initialValues: Values = user
    ? {
        agencyName: user.agencyName || "",
        familyName: user.familyName,
        email: user.email || "",
        profileImage: null,
        phone: user.phone,
        name: user.name,
      }
    : {
        profileImage: null,
        agencyName: "",
        familyName: "",
        email: "",
        phone: "",
        name: "",
      };

  const submitHandler = async (
    values: Values,
    { setFieldValue }: formik.FormikHelpers<Values>
  ) => {
    const formData = new FormData();

    const formsEntries = [
      ["name", values.name],
      ["phone", values.phone],
      ["email", values.email],
      ["familyName", values.familyName],
      ["agencyName", values.agencyName],
      ["profileImage", values.profileImage],
    ] as const;

    for (const [key, value] of formsEntries) {
      if (value) formData.append(key, value);
    }

    mutate(formData, {
      onSuccess: () => {
        setFieldValue("profileImage", null);
        router.refresh();
      },
    });
  };

  return (
    <formik.Formik
      enableReinitialize
      onSubmit={submitHandler}
      initialValues={initialValues}
      validationSchema={
        user.agencyName
          ? validators.estateAgencySchema
          : validators.ownerTenantSchema
      }
    >
      {({ values, errors, handleChange, setFieldValue }) => (
        <formik.Form className="flex flex-col gap-6">
          <div className="bg-card text-card-foreground border shadow-sm p-4 rounded-xl space-y-6">
            <Inputs
              profileImage={user?.profileImage}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
              values={values}
              errors={errors}
            />
          </div>

          <Button
            className="w-full md:w-fit self-end"
            disabled={isPending}
            type="submit"
          >
            ثبت تغییرات
          </Button>
        </formik.Form>
      )}
    </formik.Formik>
  );
};

export default Form;
