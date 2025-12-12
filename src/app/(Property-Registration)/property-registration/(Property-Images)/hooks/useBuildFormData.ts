import useFormsState from "@propertyRegistration/stores/useFormsState";
import { FormValues } from "@propertyImagesRegistration/types";
import { stringifyJson } from "@/utils/json";

const useBuildFormData = () => {
  const buildFormData = (
    formsStates: ReturnType<typeof useFormsState.getState>,
    values: FormValues
  ) => {
    const formData = new FormData();

    const formsEntries = [
      ["propertyTypeDatas", formsStates.propertyTypeDatas],
      ["propertyLocationDatas", formsStates.propertyLocationDatas],
      ["propertyLocationCoordinates", formsStates.propertyLocationCoordinates],
      ["propertyDetailsDatas", formsStates.propertyDetailsDatas],
      ["propertyEquipmentsDatas", formsStates.propertyEquipmentsDatas],
      ["propertyDescriptionDatas", formsStates.propertyDescriptionDatas],
    ] as const;

    for (const [key, value] of formsEntries) {
      if (value) formData.append(key, stringifyJson(value)!);
    }

    values.uploadedImages.forEach(({ file }) => {
      if (file) formData.append("propertyImagesDatas", file);
    });

    return formData;
  };

  return { buildFormData };
};

export default useBuildFormData;
