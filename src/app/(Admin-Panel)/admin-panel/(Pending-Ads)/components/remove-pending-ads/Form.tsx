"use client";

import React from "react";
import Link from "next/link";
import * as formik from "formik";
import useRemoveAds from "@adminPanel/pendingAds/hooks/useRemoveAds";
import PropertyComparisonCard from "@/components/ui/PropertyComparisonCard";
import { pendingAdsValidations } from "@validators/admin-panel";
import { Button } from "@/components/ui/button";
import { IProperty } from "@models/Property";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface FormProps {
  allPendingProperties: IProperty[];
}

const initialValues: { properties: string[] | [] } = { properties: [] };

const Form = ({ allPendingProperties }: FormProps) => {
  const router = useRouter();

  const { mutate, isPending } = useRemoveAds();

  const submitHandler = (values: typeof initialValues) => {
    mutate(values, { onSuccess: () => router.refresh() });
  };

  return (
    <formik.Formik
      validationSchema={pendingAdsValidations}
      initialValues={initialValues}
      onSubmit={submitHandler}
    >
      {({ errors }) => (
        <formik.Form
          className={cn(
            "bg-card border shadow-sm rounded-xl space-y-6 p-4",
            !!errors.properties && "border-destructive"
          )}
        >
          <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 container mx-auto px-4 sm:px-0">
            {allPendingProperties.map((property) => (
              <React.Fragment key={property._id as string}>
                <PropertyComparisonCard
                  className="relative"
                  property={property}
                >
                  <Button className="absolute top-3 left-3" asChild>
                    <Link href={`/properties/${property._id}`}>
                      اطلاعات آگهی
                    </Link>
                  </Button>
                </PropertyComparisonCard>
              </React.Fragment>
            ))}
          </div>

          <div>
            <formik.ErrorMessage
              className="text-destructive text-sm font-medium"
              name="properties"
              component="span"
            />
          </div>

          <div className="flex flex-wrap-reverse justify-center items-center gap-6 p-4 sticky bottom-0 bg-card border shadow-sm rounded-xl z-40">
            <div className="flex flex-wrap-reverse justify-center items-center gap-6 container m-auto">
              <Button
                className="flex-1"
                variant="outline"
                type="button"
                asChild
              >
                <Link href="/admin-panel">بازگشت به صفحه اول</Link>
              </Button>

              <Button
                variant="destructive"
                disabled={isPending}
                className="flex-1"
                type="submit"
              >
                حذف آگهی ها
              </Button>
            </div>
          </div>
        </formik.Form>
      )}
    </formik.Formik>
  );
};

export default Form;
