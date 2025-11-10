"use client";

import React from "react";
import * as dialog from "@/components/ui/dialog";
import DialogBody from "@/components/filters-bar/filters-dialog/DialogBody";
import DialogHeader from "@/components/filters-bar/filters-dialog/DialogHeader";
import DialogFooter from "@/components/filters-bar/filters-dialog/DialogFooter";
import FiltersCount from "@/components/filters-bar/filters-dialog/FiltersCount";
import { IEquipmentAndFacilitie } from "@models/EquipmentAndFacilitie";
import { IPropertyCategory } from "@models/PropertyCategory";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IProvince } from "@models/Province";
import { Funnel } from "lucide-react";
import { Form, Formik } from "formik";
import {
  toCommaDigits,
  toCommaFreeDigits,
  toEnglishDigits,
  toPersianDigits,
} from "@/utils/convertNumbers";

interface FiltersDialogProps {
  provinces: IProvince[];
  equipments: IEquipmentAndFacilitie[];
  propertyCategories: IPropertyCategory[];
}

const FiltersDialog = ({
  provinces,
  equipments,
  propertyCategories,
}: FiltersDialogProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialValues = {
    "property-category": searchParams.get("property-category") || "",
    province: searchParams.get("province") || "",
    "from-mortgage": toPersianDigits(
      toCommaDigits(searchParams.get("from-mortgage") || 0)
    ),
    "to-mortgage": toPersianDigits(
      toCommaDigits(searchParams.get("to-mortgage") || 0)
    ),
    "from-rent": toPersianDigits(
      toCommaDigits(searchParams.get("from-rent") || 0)
    ),
    "to-rent": toPersianDigits(toCommaDigits(searchParams.get("to-rent") || 0)),
    meterage: toPersianDigits(searchParams.get("meterage") || 0),
    rooms: searchParams.get("rooms") || 0,
    facilities: searchParams.getAll("facilities") || [],
    "only-with-image": searchParams.get("only-with-image") || null,
    "only-agency": searchParams.get("only-agency") || null,
  };

  const handleSubmit = (values: typeof initialValues) => {
    const searchParam = new URLSearchParams(searchParams.toString());

    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        searchParam.delete(key);
        Array.from(new Set(value)).forEach((v) => searchParam.append(key, v));
      } else if (["only-with-image", "only-agency"].includes(key)) {
        value ? searchParam.set(key, String(value)) : searchParam.delete(key);
      } else if (
        [
          "from-mortgage",
          "to-mortgage",
          "from-rent",
          "to-rent",
          "meterage",
        ].includes(key)
      ) {
        if (value !== "۰" && value) {
          searchParam.set(
            key,
            toEnglishDigits(toCommaFreeDigits(String(value)))
          );
        }
      } else Boolean(value) && searchParam.set(key, String(value));
    });

    router.replace(`?${searchParam.toString()}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <dialog.Dialog>
        <dialog.DialogTrigger asChild>
          <Button
            className="rounded-full relative m-auto sm:m-0"
            variant="outline"
          >
            <FiltersCount />
            <Funnel className="size-4.5" />
            فیلترها
          </Button>
        </dialog.DialogTrigger>

        <dialog.DialogContent
          className="max-w-svw max-h-svh overflow-y-auto"
          showCloseButton={false}
          dir="rtl"
        >
          <Form>
            <DialogHeader />

            <DialogBody
              propertyCategories={propertyCategories}
              equipments={equipments}
              provinces={provinces}
            />

            <DialogFooter />
          </Form>
        </dialog.DialogContent>
      </dialog.Dialog>
    </Formik>
  );
};

export default FiltersDialog;
