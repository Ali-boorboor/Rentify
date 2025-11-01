import React from "react";
import connectToDB from "@configs/database";
import ProvinceModel from "@models/Province";
import * as select from "@/components/ui/select";
import ContractTypeModel from "@models/ContractType";
import PropertyCategoryModel from "@models/PropertyCategory";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchForm = async () => {
  connectToDB();
  const propertyCategories = await PropertyCategoryModel.find({}).lean();
  const provinces = await ProvinceModel.find({}).lean();
  const contractTypes = await ContractTypeModel.find({}).lean();

  return (
    <form className="bg-card text-card-foreground p-4 pl-28 rounded-4xl md:rounded-full overflow-hidden relative border-2 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <select.Select dir="rtl">
          <select.SelectTrigger className="w-36 grow lg:w-48 border-0 outline-0 md:shadow-none">
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

        <select.Select dir="rtl">
          <select.SelectTrigger className="w-36 grow lg:w-48 border-0 outline-0 md:shadow-none">
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

        <select.Select dir="rtl">
          <select.SelectTrigger className="w-36 grow lg:w-48 border-0 outline-0 md:shadow-none">
            <select.SelectValue placeholder="نوع قرارداد" />
          </select.SelectTrigger>
          <select.SelectContent>
            {contractTypes.map((contractType) => (
              <select.SelectItem
                key={contractType._id as string}
                value={contractType.value}
              >
                {contractType.title}
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
    </form>
  );
};

export default SearchForm;
