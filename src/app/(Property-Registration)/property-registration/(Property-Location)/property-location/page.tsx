import React from "react";
import connectToDB from "@configs/database";
import ProvinceModel from "@models/Province";
import Map from "@propertyLocationRegistration/components/map";
import Form from "@propertyLocationRegistration/components/form";
import { parseJson } from "@/utils/json";

const PropertyLocationPage = async () => {
  connectToDB();
  const provinces = await ProvinceModel.find({}).lean();

  return (
    <section className="flex-1 bg-card border shadow-sm rounded-xl p-4 flex flex-col gap-6">
      <h4 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        لطفا اطلاعات زیر را کامل کنید
      </h4>

      <Form provinces={parseJson(provinces)} />

      <Map />
    </section>
  );
};

export default PropertyLocationPage;
