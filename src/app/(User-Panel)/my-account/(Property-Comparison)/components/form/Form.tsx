"use client";

import React from "react";
import Link from "next/link";
import * as formik from "formik";
import EmptyPropertiesAlert from "@/components/empty-properties-alert";
import PropertyComparisonCard from "@/components/ui/PropertyComparisonCard";
import { propertyComparisonValidations } from "@validators/property-comparison";
import { Button } from "@/components/ui/button";
import { IProperty } from "@models/Property";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormProps {
  properties: IProperty[];
}

const initialValues = {
  properties: [],
};

const Form = ({ properties }: FormProps) => {
  const router = useRouter();

  const handleSubmit = (values: typeof initialValues) => {
    const searchParam = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        searchParam.delete(key);
        Array.from(new Set(value)).forEach((v) => searchParam.append(key, v));
      }
    });

    router.push(`/property-comparison?${searchParam.toString()}`);
  };

  return (
    <formik.Formik
      validationSchema={propertyComparisonValidations}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <formik.Form
          className={cn(
            "bg-card border shadow-sm rounded-xl space-y-6 p-4",
            !!errors.properties && "border-destructive"
          )}
        >
          <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {properties?.length ? (
              properties?.map((property) => (
                <PropertyComparisonCard
                  key={property._id as string}
                  property={property}
                />
              ))
            ) : (
              <EmptyPropertiesAlert
                description="از طریق آیکون «نشان‌کردن» می‌تونید آگهی‌های مورد نظرتون رو در این لیست ذخیره کنید."
                image="/images/png/user-panel/empty-favourites.png"
                title="شما هنوز آگهی‌ای رو ذخیره نکردید!"
                linkButtonText="مشاهده املاک"
              />
            )}
          </div>

          <div>
            <formik.ErrorMessage
              className="text-destructive text-sm font-medium"
              name="properties"
              component="span"
            />
          </div>

          <div className="flex flex-wrap-reverse justify-center items-center gap-6 p-4 sticky bottom-0 bg-card border shadow-sm rounded-xl z-40">
            <Button className="flex-1" variant="outline" type="button" asChild>
              <Link href="/property-comparison/search">
                <Search />
                جستجو
              </Link>
            </Button>

            {properties?.length > 0 && (
              <Button className="flex-1" type="submit">
                تأیید
              </Button>
            )}
          </div>
        </formik.Form>
      )}
    </formik.Formik>
  );
};

export default Form;
