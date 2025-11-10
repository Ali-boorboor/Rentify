"use client";

import React from "react";
import { IEquipmentAndFacilitie } from "@/models/EquipmentAndFacilitie";
import { toCommaDigits, toPersianDigits } from "@/utils/convertNumbers";
import { useRouter, useSearchParams } from "next/navigation";
import { IPropertyCategory } from "@models/PropertyCategory";
import { Button } from "@/components/ui/button";
import { IProvince } from "@models/Province";
import { X } from "lucide-react";

interface FiltersBadgeProps {
  propertyCategories: IPropertyCategory[];
  equipments: IEquipmentAndFacilitie[];
  provinces: IProvince[];
}

const filterLabels: Record<string, string> = {
  "from-mortgage": "رهن از",
  "to-mortgage": "رهن تا",
  "from-rent": "اجاره از",
  "to-rent": "اجاره تا",
  meterage: "متراژ",
  rooms: "تعداد اتاق",
  "only-with-image": "فقط آگهی های عکس دار",
  "only-agency": "فقط آگهی‌های آژانس",
};

const FiltersBadge = ({
  propertyCategories,
  equipments,
  provinces,
}: FiltersBadgeProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const propertyCategoryParam = searchParams.get("property-category");

  const activePropertyCategory = propertyCategories.find((propertyCategory) => {
    return propertyCategory.enTitle === propertyCategoryParam;
  });

  const searchParamsEntries: Array<[string, string]> = [];

  searchParams.forEach((value, key) => {
    if (Boolean(value)) searchParamsEntries.push([key, value]);
  });

  const removeFilter = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value !== undefined) {
      const all = params.getAll(key).filter((v) => v !== value);

      params.delete(key);
      all.forEach((v) => params.append(key, v));
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="space-x-2 px-2">
      {propertyCategoryParam && (
        <Button
          onClick={() => removeFilter("property-category")}
          variant={activePropertyCategory?.labelColor}
          className="rounded-full"
        >
          {activePropertyCategory?.faTitle}
          <X className="size-4.5" />
        </Button>
      )}

      {searchParamsEntries.map(([key, value]) => {
        if (["property-category", "sort-by"].includes(key)) return null;
        else if (key === "facilities") {
          const facility = equipments.find(
            (equipment) => equipment.value === value
          );

          return (
            <Button
              onClick={() => removeFilter("facilities", facility?.value)}
              className="rounded-full bg-primary/10"
              variant="outline"
              key={value}
            >
              {facility?.label}
              <X className="size-4.5" />
            </Button>
          );
        } else if (key === "province") {
          return (
            <Button
              onClick={() => removeFilter("province")}
              className="rounded-full bg-primary/10"
              variant="outline"
              key={value}
            >
              {provinces.find((province) => province.enName === value)?.faName}
              <X className="size-4.5" />
            </Button>
          );
        } else if (["only-agency", "only-with-image"].includes(key)) {
          return (
            <Button
              className="rounded-full bg-primary/10"
              onClick={() => removeFilter(key)}
              variant="outline"
              key={value}
            >
              {filterLabels[key]}
              <X className="size-4.5" />
            </Button>
          );
        } else if (
          [
            "from-mortgage",
            "to-mortgage",
            "from-rent",
            "to-rent",
            "meterage",
          ].includes(key)
        ) {
          return (
            <Button
              className="rounded-full bg-primary/10"
              onClick={() => removeFilter(key)}
              variant="outline"
              key={value}
            >
              {filterLabels[key]} : {toPersianDigits(toCommaDigits(value))}
              <X className="size-4.5" />
            </Button>
          );
        }

        return (
          <Button
            className="rounded-full bg-primary/10"
            onClick={() => removeFilter(key)}
            variant="outline"
            key={value}
          >
            {filterLabels[key]} : {toPersianDigits(value)}
            <X className="size-4.5" />
          </Button>
        );
      })}
    </div>
  );
};

export default FiltersBadge;
