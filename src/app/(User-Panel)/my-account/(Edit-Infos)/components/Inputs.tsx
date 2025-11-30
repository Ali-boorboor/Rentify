import React from "react";
import Image from "next/image";
import * as icon from "lucide-react";
import LabeledInput from "@/components/ui/LabeledInput";
import { Values } from "@userPanel/editInfos/types";
import { ErrorMessage, FormikErrors } from "formik";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface InputsProps {
  setFieldValue: (field: string, value: string | File | undefined) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormikErrors<Values>;
  profileImage?: string;
  values: Values;
}

const Inputs = ({
  values,
  errors,
  profileImage,
  handleChange,
  setFieldValue,
}: InputsProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-end gap-6">
        {profileImage ? (
          <Image
            className="w-24 h-24 md:w-28 md:h-28 object-cover object-center mx-auto md:mx-0 border shadow-sm rounded-full"
            src={profileImage}
            alt="user image"
            height={200}
            width={200}
            priority
          />
        ) : (
          <div className="w-24 h-24 md:w-28 md:h-28 flex justify-center items-center border shadow-sm rounded-full bg-muted text-muted-foreground">
            <icon.UserRound className="size-2/3" />
          </div>
        )}

        <Button
          className={
            values.profileImage
              ? "bg-success text-success-foreground hover:bg-success/80"
              : ""
          }
          type="button"
          asChild
        >
          <Label htmlFor="profileImage">
            {values.profileImage ? "عکس آپلود شد" : "تغییر عکس"}
          </Label>
        </Button>
        <Input
          onChange={(e) => {
            setFieldValue("profileImage", e.target.files?.[0]);
          }}
          accept="image/png, image/jpeg, image/jpg"
          id="profileImage"
          type="file"
          hidden
        />

        <ErrorMessage
          className="text-destructive text-sm font-medium"
          name="profileImage"
          component="span"
        />
      </div>

      <div className="flex flex-wrap items-baseline gap-6">
        <LabeledInput
          id="name"
          label="نام"
          name="name"
          placeholder="نام"
          value={values.name}
          onChange={handleChange}
          icon={<icon.UserRound />}
          aria-invalid={!!errors.name}
          containerClassName="min-w-52"
        />

        <LabeledInput
          id="familyName"
          name="familyName"
          label="نام‌ خانوادگی"
          onChange={handleChange}
          value={values.familyName}
          icon={<icon.UserRound />}
          placeholder="نام‌ خانوادگی"
          containerClassName="min-w-52"
          aria-invalid={!!errors.familyName}
        />

        {values.agencyName && (
          <LabeledInput
            id="agencyName"
            label="نام دفتر"
            name="agencyName"
            placeholder="نام دفتر"
            onChange={handleChange}
            value={values.agencyName}
            icon={<icon.Building2 />}
            containerClassName="min-w-52"
            aria-invalid={!!errors.agencyName}
          />
        )}

        <LabeledInput
          dir="ltr"
          id="phone"
          name="phone"
          maxLength={11}
          label="تلفن همراه"
          value={values.phone}
          icon={<icon.Phone />}
          onChange={handleChange}
          placeholder="تلفن همراه"
          containerClassName="min-w-52"
          aria-invalid={!!errors.phone}
        />

        <LabeledInput
          dir="ltr"
          id="email"
          name="email"
          label="ایمیل"
          placeholder="ایمیل"
          icon={<icon.Mail />}
          value={values.email}
          onChange={handleChange}
          containerClassName="min-w-52"
          aria-invalid={!!errors.email}
        />
      </div>
    </>
  );
};

export default Inputs;
