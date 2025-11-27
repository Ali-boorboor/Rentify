import React from "react";
import { Values, FormProps } from "@propertyEquipmentsRegistration/types";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormikErrors } from "formik";
import { cn } from "@/lib/utils";

interface FormCheckboxsProps extends FormProps {
  setFieldValue: (field: string, value: string[]) => void;
  errors: FormikErrors<Values>;
  values: Values;
}

const FormCheckboxs = ({
  equipmentsAndFacilities,
  setFieldValue,
  values,
  errors,
}: FormCheckboxsProps) => {
  const onCheckedChange = (
    checked: CheckedState,
    equipment: { _id: string }
  ) => {
    if (checked) {
      setFieldValue("equipments", [...values.equipments, equipment._id]);
    } else {
      setFieldValue(
        "equipments",
        values.equipments.filter((id) => id !== equipment._id)
      );
    }
  };

  return (
    <div
      className={cn(
        `flex flex-wrap justify-around gap-6 border shadow-sm rounded-xl p-4`,
        !!errors.equipments ? "border-destructive" : ""
      )}
    >
      {equipmentsAndFacilities.map((equipment) => (
        <div
          className="flex items-center space-x-2 min-w-32"
          key={equipment._id}
        >
          <Checkbox
            id={equipment.value}
            checked={values.equipments.includes(equipment._id)}
            onCheckedChange={(checked) => onCheckedChange(checked, equipment)}
          />
          <Label htmlFor={equipment.value}>{equipment.label}</Label>
        </div>
      ))}
    </div>
  );
};

export default FormCheckboxs;
