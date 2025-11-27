import React from "react";
import LabeledInput from "@/components/ui/LabeledInput";
import { Values } from "@propertyDescriptionRegistration/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage, FormikErrors } from "formik";
import { Label } from "@/components/ui/label";

interface FormInputsProps {
  handleChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  setFieldValue: (field: string, value: string | boolean) => void;
  errors: FormikErrors<Values>;
  values: Values;
}

const FormInputs = ({
  values,
  errors,
  handleChange,
  setFieldValue,
}: FormInputsProps) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div>
        <LabeledInput
          placeholder="عنوان آگهی خود را اینجا بنویسید..."
          aria-invalid={!!errors.propertyTitle}
          value={values.propertyTitle}
          onChange={handleChange}
          name="propertyTitle"
          id="propertyTitle"
          label="عنوان آگهی"
        />
      </div>

      <div className="space-y-2">
        <Textarea
          className="min-h-60 max-h-96 grow resize-none"
          placeholder="توضیحات خود را اینجا بنویسید..."
          aria-invalid={!!errors.descriptionMessage}
          value={values.descriptionMessage}
          name="descriptionMessage"
          onChange={handleChange}
        />
        <ErrorMessage
          className="text-destructive text-sm font-medium"
          name="descriptionMessage"
          component="span"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="isPropertyReadyToBeUsed"
          checked={values.isPropertyReadyToBeUsed}
          onCheckedChange={(checked) => {
            setFieldValue("isPropertyReadyToBeUsed", checked);
          }}
        />
        <Label htmlFor="isPropertyReadyToBeUsed">
          ملک تخلیه و مناسب بازدید است.
        </Label>
      </div>
    </div>
  );
};

export default FormInputs;
