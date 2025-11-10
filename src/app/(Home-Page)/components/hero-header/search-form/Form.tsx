"use client";

import React from "react";
import * as formik from "formik";
import * as select from "@/components/ui/select";
import { IPropertyCategory } from "@models/PropertyCategory";
import { Button } from "@/components/ui/button";
import { IProvince } from "@models/Province";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { toast } from "sonner";

interface FormProps {
  provinces: IProvince[];
  propertyCategories: IPropertyCategory[];
}

const initialValues = {
  province: "",
  "property-category": "",
};

const Form = ({ provinces, propertyCategories }: FormProps) => {
  const router = useRouter();

  const handleSubmit = (value: typeof initialValues) => {
    let address = "/properties?";

    if (value["property-category"] && value.province) {
      address = address.concat(
        `property-category=${value["property-category"]}&province=${value.province}`
      );

      router.push(address);
    } else if (value["property-category"]) {
      address = address.concat(
        `property-category=${value["property-category"]}`
      );

      router.push(address);
    } else if (value.province) {
      address = address.concat(`province=${value.province}`);

      router.push(address);
    } else {
      toast.warning("لطفا موقعیت مکانی و یا نوع ملک را برای جستجو انتخاب کنید");
    }
  };

  return (
    <formik.Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <formik.Form className="bg-card text-card-foreground p-4 pl-28 rounded-4xl md:rounded-full overflow-hidden relative border-2 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <select.Select
              onValueChange={(value) => setFieldValue("province", value)}
              value={values.province}
              dir="rtl"
            >
              <select.SelectTrigger className="w-36 grow lg:w-60 border-0 outline-0 md:shadow-none">
                <select.SelectValue placeholder="موقعیت مکانی" />
              </select.SelectTrigger>
              <select.SelectContent>
                {provinces.map((province) => (
                  <select.SelectItem
                    key={province._id as string}
                    value={province.enName}
                  >
                    {province.faName}
                  </select.SelectItem>
                ))}
              </select.SelectContent>
            </select.Select>

            <select.Select
              onValueChange={(value) => {
                setFieldValue("property-category", value);
              }}
              value={values["property-category"]}
              dir="rtl"
            >
              <select.SelectTrigger className="w-36 grow lg:w-60 border-0 outline-0 md:shadow-none">
                <select.SelectValue placeholder="نوع ملک" />
              </select.SelectTrigger>
              <select.SelectContent>
                {propertyCategories.map((propertyCategory) => (
                  <select.SelectItem
                    key={propertyCategory._id as string}
                    value={propertyCategory.enTitle}
                  >
                    {propertyCategory.faTitle}
                  </select.SelectItem>
                ))}
              </select.SelectContent>
            </select.Select>
          </div>

          <Button
            className="rounded-none absolute left-0 top-0 h-full w-24"
            type="submit"
          >
            <Search className="size-4" />
            جستجو
          </Button>
        </formik.Form>
      )}
    </formik.Formik>
  );
};

export default Form;
