import React from "react";
import connectToDB from "@configs/database";
import ContractTypeModel from "@models/ContractType";
import Form from "@propertyTypeRegistration/components/form";
import PropertyCategoryModel from "@models/PropertyCategory";
import { parseJson } from "@/utils/json";

const PropertyTypePage = async () => {
  connectToDB();
  const propertyCategories = await PropertyCategoryModel.find({}).lean();
  const contractTypes = await ContractTypeModel.find({}).lean();

  return (
    <section className="flex-1 bg-card border shadow-sm rounded-xl p-4 flex flex-col gap-6">
      <h4 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        لطفا اطلاعات زیر را کامل کنید
      </h4>

      <Form
        propertyCategories={parseJson(propertyCategories)}
        contractTypes={parseJson(contractTypes)}
      />
    </section>
  );
};

export default PropertyTypePage;
