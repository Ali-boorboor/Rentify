import React from "react";
import { Values, FormProps } from "@propertyEquipmentsRegistration/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormCheckboxsProps extends FormProps {
  setFieldValue: (field: string, value: string[]) => void;
  values: Values;
}

const FormCheckboxs = ({
  equipmentsAndFacilities,
  setFieldValue,
  values,
}: FormCheckboxsProps) => {
  return (
    <div className="flex flex-wrap justify-around gap-6 border shadow-sm rounded-xl p-4">
      {equipmentsAndFacilities.map((equipment) => (
        <div
          className="flex items-center space-x-2 min-w-32"
          key={equipment._id}
        >
          <Checkbox
            id={equipment.value}
            checked={values.equipments.includes(equipment._id)}
            onCheckedChange={(checked) => {
              if (checked) {
                setFieldValue("equipments", [
                  ...values.equipments,
                  equipment._id,
                ]);
              } else {
                setFieldValue(
                  "equipments",
                  values.equipments.filter((id) => id !== equipment._id)
                );
              }
            }}
          />
          <Label htmlFor={equipment.value}>{equipment.label}</Label>
        </div>
      ))}
    </div>
  );
};

export default FormCheckboxs;
