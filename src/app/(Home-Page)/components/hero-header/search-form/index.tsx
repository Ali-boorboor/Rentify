import { parseJson } from "@/utils/json";
import connectToDB from "@configs/database";
import Form from "@home/components/hero-header/search-form/Form";
import PropertyCategoryModel from "@models/PropertyCategory";
import ProvinceModel from "@models/Province";
import { cache } from "react";

const getPropertyCategories = cache(async () => {
  await connectToDB();

  return await PropertyCategoryModel.find({}).lean();
});

const getProvinces = cache(async () => {
  await connectToDB();

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
