import React from "react";
import connectToDB from "@configs/database";
import ProvinceModel from "@models/Province";
import PropertyCategoryModel from "@models/PropertyCategory";
import Form from "@home/components/hero-header/search-form/Form";
import { parseJson } from "@/utils/json";

const SearchForm = async () => {
  connectToDB();
  const propertyCategories = await PropertyCategoryModel.find({}).lean();
  const provinces = await ProvinceModel.find({}).lean();

  return (
    <Form
      propertyCategories={parseJson(propertyCategories)}
      provinces={parseJson(provinces)}
    />
  );
};

export default SearchForm;
