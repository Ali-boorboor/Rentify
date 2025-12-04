import React from "react";
import * as formik from "formik";
import PropertyComparisonCard from "@/components/ui/PropertyComparisonCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { IProperty } from "@models/Property";
import { useRouter } from "next/navigation";

interface FormProps {
  allProperties: IProperty[] | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isPending: boolean;
}

const initialValues = {
  properties: [],
};

const Form = ({
  isFetchingNextPage,
  fetchNextPage,
  allProperties,
  hasNextPage,
  isPending,
}: FormProps) => {
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
    <formik.Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <formik.Form className="flex flex-col gap-6">
        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 container m-auto px-4 sm:px-0">
          {allProperties?.map((property) => (
            <PropertyComparisonCard
              key={property._id as string}
              property={property}
            />
          ))}

          {(isPending || isFetchingNextPage) &&
            [...Array(8).fill(0)].map((_, index) => (
              <Skeleton className="h-96 sm:h-[28rem]" key={index} />
            ))}
        </div>

        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="m-auto my-6"
          >
            نمایش آگهی‌های بیشتر
          </Button>
        )}

        <div className="p-4 sticky bottom-0 bg-card border shadow-sm z-40">
          <div className="flex flex-wrap-reverse justify-center items-center gap-6 container m-auto">
            <Button
              onClick={() => router.back()}
              className="flex-1"
              variant="outline"
              type="button"
            >
              بازگشت به صفحه قبلی
            </Button>

            <Button className="flex-1" type="submit">
              تأیید
            </Button>
          </div>
        </div>
      </formik.Form>
    </formik.Formik>
  );
};

export default Form;
