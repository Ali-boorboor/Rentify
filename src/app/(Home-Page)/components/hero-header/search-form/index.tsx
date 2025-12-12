import React, { cache } from "react";
import connectToDB from "@configs/database";
import ProvinceModel from "@models/Province";
import PropertyCategoryModel from "@models/PropertyCategory";
import Form from "@home/components/hero-header/search-form/Form";
import { parseJson } from "@/utils/json";

export const dynamic = "force-static";
export const revalidate = 24 * 60 * 60;

connectToDB();

const getPropertyCategories = cache(async () => {
  return await PropertyCategoryModel.find({}).lean();
});

const getProvinces = cache(async () => {
  return await ProvinceModel.find({}).lean();
});

const SearchForm = async () => {
  const [propertyCategories, provinces] = await Promise.all([
    getPropertyCategories(),
    getProvinces(),
  ]);

  return (
    <Form
      propertyCategories={parseJson(propertyCategories)}
      provinces={parseJson(provinces)}
    />
  );
};

export default SearchForm;
