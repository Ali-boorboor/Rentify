import React from "react";
import connectToDB from "@configs/database";
import ProvinceModel from "@models/Province";
import PropertyCategoryModel from "@models/PropertyCategory";
import FiltersBadge from "@/components/filters-bar/FiltersBadge";
import FiltersDialog from "@/components/filters-bar/filters-dialog";
import EquipmentAndFacilitieModel from "@models/EquipmentAndFacilitie";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { parseJson } from "@/utils/json";

const FiltersBar = async () => {
  connectToDB();
  const propertyCategories = await PropertyCategoryModel.find({}).lean();
  const equipments = await EquipmentAndFacilitieModel.find({}).lean();
  const provinces = await ProvinceModel.find({}).lean();

  return (
    <section className="bg-card shadow-sm border p-2 sm:p-4">
      <div className="container m-auto flex gap-2 h-10">
        <FiltersDialog
          propertyCategories={parseJson(propertyCategories)}
          equipments={parseJson(equipments)}
          provinces={parseJson(provinces)}
        />

        <Separator className="mr-2 hidden sm:block" orientation="vertical" />

        <ScrollArea
          className="line-clamp-1 whitespace-nowrap hidden sm:block"
          dir="rtl"
        >
          <FiltersBadge
            propertyCategories={parseJson(propertyCategories)}
            equipments={parseJson(equipments)}
            provinces={parseJson(provinces)}
          />

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default FiltersBar;
