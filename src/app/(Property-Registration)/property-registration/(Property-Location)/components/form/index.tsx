"use client";

import React from "react";
import dynamic from "next/dynamic";
import LabeledInput from "@/components/ui/LabeledInput";
import LabeledSelectbox from "@/components/ui/LabeledSelectbox";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Map = dynamic(
  () => import("@propertyLocationRegistration/components/form/Map"),
  { ssr: false }
);

const Form = () => {
  return (
    <form className="grow flex flex-col justify-between gap-6">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-6">
          <LabeledSelectbox
            placeholder="شهر خود را انتخاب کنید"
            label="شهر"
            id="city"
          >
            <SelectItem value="tehran-niavaran">تهران - نیاوران</SelectItem>
          </LabeledSelectbox>

          <LabeledInput
            placeholder="آدرس خود را وارد کنید"
            containerClassName="min-w-40"
            label="خیابان فرعی یا کوچه"
            id="SideStreet"
          />
        </div>

        <div className="flex flex-wrap gap-6">
          <LabeledInput
            placeholder="آدرس خود را وارد کنید"
            containerClassName="min-w-40"
            label="خیابان یا محله‌ی اصلی"
            id="MainStreet"
          />

          <LabeledInput
            placeholder="آدرس دقیق خود را وارد کنید"
            containerClassName="min-w-40"
            label="آدرس دقیق و پلاک"
            id="SideStreetOrAlley"
          />
        </div>
      </div>

      <Map />

      <div className="md:self-end self-center flex flex-wrap items-center justify-center gap-2">
        <Button className="min-w-36" variant="ghost" type="button">
          <ArrowRight className="size-4.5" />
          مرحله قبل
        </Button>

        <Button className="min-w-36" type="submit">
          ادامه
          <ArrowLeft className="size-4.5" />
        </Button>
      </div>
    </form>
  );
};

export default Form;
