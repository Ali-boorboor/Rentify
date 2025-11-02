import EquipmentAndFacilitieModel from "@models/EquipmentAndFacilitie";
import Form from "@propertyEquipmentsRegistration/components/Form";
import connectToDB from "@configs/database";
import parseJson from "@/utils/jsonParser";
import React from "react";

const PropertyEquipmentsPage = async () => {
  connectToDB();
  const equipmentsAndFacilities = await EquipmentAndFacilitieModel.find(
    {}
  ).lean();

  return (
    <section className="flex-1 bg-card border shadow-sm rounded-xl p-4 flex flex-col gap-6">
      <h4 className="text-xl md:text-2xl font-semibold text-center md:text-right">
        تجهیزات و امکانت
      </h4>

      <Form equipmentsAndFacilities={parseJson(equipmentsAndFacilities)} />
    </section>
  );
};

export default PropertyEquipmentsPage;
